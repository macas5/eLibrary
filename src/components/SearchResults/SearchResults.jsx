import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import { useEffect, useState } from 'react';

import './SearchResults.css';
import showBookSearchResults from '../../helperComponents/bookSearch';

const SearchResults = ({ searchValue, isOnlineReadable = 'false', books }) => {
  const [bookList, setbookList] = useState(books);
  const [searchFilters, setSearchFilters] = useState({
    addressValue: '',
    form: [],
    language: [],
    isReadableOnline: [],
    isReleased: [],
  });

  const handleFilterChange = (e) => {
    if (
      e.target.checked &&
      searchFilters[e.target.id].indexOf(e.target.name) === -1
    ) {
      setSearchFilters((prev) => ({
        ...prev,
        [e.target.id]: [...prev[e.target.id], e.target.name],
      }));
    } else {
      if (searchFilters[e.target.id].indexOf(e.target.name) !== -1) {
        const newFilter = searchFilters[e.target.id].filter(
          (filter) => filter !== e.target.name
        );
        setSearchFilters((prev) => ({
          ...prev,
          [e.target.id]: newFilter,
        }));
      }
    }
  };

  useEffect(() => {
    setSearchFilters((prev) => ({
      ...prev,
      addressValue: searchValue ? searchValue : '',
      isReadableOnline: isOnlineReadable === 'true' ? [isOnlineReadable] : [],
    }));
  }, [isOnlineReadable, searchValue]);

  useEffect(() => {
    books &&
      setbookList(
        books.filter((book) => {
          return (
            (book.title
              .toLowerCase()
              .includes(searchFilters.addressValue.toLowerCase()) ||
              book.author
                .toLowerCase()
                .includes(searchFilters.addressValue.toLowerCase()) ||
              !searchFilters.addressValue.length) &&
            (searchFilters.language.indexOf(book.language) !== -1 ||
              !searchFilters.language.length) &&
            (searchFilters.form.indexOf(book.form) !== -1 ||
              !searchFilters.form.length) &&
            (searchFilters.isReadableOnline.indexOf(book.isReadableOnline) !==
              -1 ||
              !searchFilters.isReadableOnline.length) &&
            (searchFilters.isReleased.indexOf(book.isReleased) !== -1 ||
              !searchFilters.isReleased.length)
          );
        })
      );
  }, [books, searchFilters]);

  return (
    <Container>
      {bookList && (
        <div className="searchResults">
          <h1>Search</h1>
          <p>Number of results found: {bookList.length}</p>
          <div className="searchResultsWrapper">
            <div className="filters">
              <List dense>
                <List id="filters-list">
                  <ListItem>
                    <Checkbox
                      name="true"
                      id="isReadableOnline"
                      onClick={handleFilterChange}
                      defaultChecked={isOnlineReadable === 'true'}
                      edge="start"
                    />
                    <ListItemText primary="Read Online" />
                  </ListItem>
                </List>
                <List id="filters-list">
                  <p>Form</p>
                  <ListItem>
                    <Checkbox
                      name="Printed"
                      id="form"
                      onClick={handleFilterChange}
                      edge="start"
                    />
                    <ListItemText primary="Printed" />
                  </ListItem>
                  <ListItem>
                    <Checkbox
                      name="Electronic"
                      id="form"
                      onClick={handleFilterChange}
                      edge="start"
                    />
                    <ListItemText primary="Electronic" />
                  </ListItem>
                </List>
                <List id="filters-list">
                  <p>Language</p>
                  <ListItem>
                    <Checkbox
                      name="English"
                      id="language"
                      onClick={handleFilterChange}
                      edge="start"
                    />
                    <ListItemText primary="English" />
                  </ListItem>
                  <ListItem>
                    <Checkbox
                      name="French"
                      id="language"
                      onClick={handleFilterChange}
                      edge="start"
                    />
                    <ListItemText primary="French" />
                  </ListItem>
                  <ListItem>
                    <Checkbox
                      name="Latvian"
                      id="language"
                      onClick={handleFilterChange}
                      edge="start"
                    />
                    <ListItemText primary="Latvian" />
                  </ListItem>
                  <ListItem>
                    <Checkbox
                      name="Lithuanian"
                      id="language"
                      onClick={handleFilterChange}
                      edge="start"
                    />
                    <ListItemText primary="Lithuanian" />
                  </ListItem>
                </List>
                <List id="filters-list">
                  <p>Release state</p>
                  <ListItem>
                    <Checkbox
                      name="true"
                      id="isReleased"
                      onClick={handleFilterChange}
                      edge="start"
                    />
                    <ListItemText primary="Released" />
                  </ListItem>
                  <ListItem>
                    <Checkbox
                      name="false"
                      id="isReleased"
                      onClick={handleFilterChange}
                      edge="start"
                    />
                    <ListItemText primary="Not released" />
                  </ListItem>
                </List>
              </List>
            </div>
            <div className="results">{showBookSearchResults(bookList)}</div>
          </div>
        </div>
      )}
    </Container>
  );
};

export default SearchResults;
