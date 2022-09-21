import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';

import './SearchBar.css';

const SearchBar = ({ isMini = false }) => {
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
          />
          <Button
            variant="contained"
            color="success"
            id="searchButton"
          >
            <SearchIcon />
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
