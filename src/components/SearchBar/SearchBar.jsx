import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { useCallback, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import debounce from 'lodash.debounce';

import './SearchBar.css';
import { Autocomplete, CircularProgress } from '@mui/material';
import axios from 'axios';

const SearchBar = ({ isMini = false, urlValue = '', backendUrl }) => {
  const [searchValues, setSearchValues] = useState(urlValue);
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const loading = open && options.length === 0;

  const nav = useNavigate();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSearch = useCallback(
    debounce((e) => getTitlesFromDb(e.target.value), 500),
    []
  );

  const getTitlesFromDb = async (input) => {
    if (input) {
      try {
        const { data } = await axios.post(`${backendUrl}/book/find`, {
          searchQuery: input,
        });
        setOptions(data);
      } catch (error) {
        console.error(error);
      }
    } else {
      setOptions([]);
    }
  };

  useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      try {
        if (active) {
          const { data } = await axios.get(`${backendUrl}/book/get`);
          setOptions(data);
        }
      } catch (error) {
        console.error(error);
      }
    })();

    return () => {
      active = false;
    };
  }, [backendUrl, loading]);

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  const handleSearchInput = (e) => {
    debouncedSearch(e);
    e.target.value ? setSearchValues(e.target.value) : setSearchValues([]);
  };

  const handleItemSelect = (e) => {
    const book = options.find((book) => book.title === e.target.innerHTML);
    book && nav(`/book/${book._id}`);
  };

  const handleSearchSubmit = (e) => {
    if (e.keyCode === 13) {
      nav(`/search/${searchValues}`);
    }
  };

  return (
    <div className={isMini ? 'searchBar mini' : 'searchBar'}>
      <div className="searchBarBackground" />
      <div className="searchBarWrapper">
        <h1>Search</h1>
        <div className="searchForm">
          <div className="searchFormWrapper">
            <Autocomplete
              id="searchField"
              open={open}
              freeSolo
              onOpen={() => {
                setOpen(true);
              }}
              onClose={() => {
                setOpen(false);
              }}
              isOptionEqualToValue={(option, value) =>
                option.title === value.title
              }
              getOptionLabel={(option) =>
                option.title ? option.title : option
              }
              options={options}
              loading={loading}
              filterOptions={(x) => x}
              onInputChange={handleSearchInput}
              onKeyDown={handleSearchSubmit}
              onChange={handleItemSelect}
              renderInput={(params) => (
                <TextField
                  variant="filled"
                  {...params}
                  label="Search books..."
                  InputProps={{
                    ...params.InputProps,
                    endAdornment: (
                      <>
                        {loading ? (
                          <CircularProgress
                            color="inherit"
                            size={20}
                          />
                        ) : null}
                        {params.InputProps.endAdornment}
                      </>
                    ),
                  }}
                />
              )}
            />
          </div>

          <Link to={`/search/${searchValues}`}>
            <Button
              variant="contained"
              color="success"
              id="searchButton"
            >
              <SearchIcon />
              Search
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
