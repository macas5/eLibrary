import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import './SearchBar.css';

const SearchBar = ({ isMini = false, value = '' }) => {
  const [searchValue, setSearchValue] = useState(value);

  const handleSearchInput = (e) => {
    setSearchValue(e.target.value);
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
            defaultValue={searchValue}
            onChange={handleSearchInput}
          />
          <Link to={`/search/${searchValue}`}>
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
