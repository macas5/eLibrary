import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './SearchBar.css';

const SearchBar = ({ isMini = false, value = '' }) => {
  const [searchValues, setSearchValues] = useState(value);
  const nav = useNavigate();

  const handleSearchInput = (e) => {
    setSearchValues(e.target.value);
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
          <TextField
            id="searchField"
            variant="filled"
            label="Type what you are looking for..."
            defaultValue={searchValues}
            onKeyDown={handleSearchSubmit}
            onChange={handleSearchInput}
          />
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
