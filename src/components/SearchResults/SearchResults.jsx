import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import './SearchResults.css';

const Book = (
  title,
  author,
  publicationDate,
  imageLink,
  form,
  language,
  isReleased,
  isReadableOnline,
  id = ''
) => {
  return {
    title: title,
    author: author,
    form: form,
    publicationDate: publicationDate,
    imageLink: imageLink,
    language: language,
    isReleased: isReleased,
    isReadableOnline: isReadableOnline,
    id: id,
  };
};

const books = [
  new Book(
    'In Search of Lost time',
    'Marcel Proust',
    2005,
    '',
    'Printed',
    'English',
    'true',
    'false'
  ),
  new Book(
    'Ulysses',
    'James Joyse',
    1950,
    '',
    'Printed',
    'French',
    'false',
    'false'
  ),
  new Book(
    'Don Quixote',
    'Muigel de Cervantes',
    1873,
    '',
    'Electronic',
    'Latvian',
    'true',
    'true'
  ),
  new Book(
    'One Hundred Years of Solitude',
    'Gabriel Garcia Marquez',
    1701,
    '',
    'Printed',
    'Lithuanian',
    'false',
    'true'
  ),
  new Book(
    'The Great Gatsby',
    'F. Scott Fitzgerald',
    1992,
    '',
    'Electronic',
    'English',
    'true',
    'false'
  ),
];

const SearchResults = ({ searchValue, isOnlineReadable = 'false' }) => {
  const [bookList, setbookList] = useState([...books]);
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
  }, [searchFilters]);

  return (
    <Container>
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
          <div className="results">
            <List>
              {bookList.map((book, index) => {
                return (
                  <>
                    <Link
                      className="link"
                      to={`/${book.id}`}
                      key={index}
                    >
                      <ListItem>
                        <div className="book">
                          <div className="bookImage">
                            <img
                              src={
                                book.imageLink !== ''
                                  ? book.imageLink
                                  : 'https://d3i5mgdwi2ze58.cloudfront.net/f7nkbyqfsnrrlct3hs01jkrz2vdi'
                              }
                              alt={book.title}
                            />
                          </div>
                          <div className="bookData">
                            <div className="bookForm">FORM: {book.form}</div>
                            <div className="bookInfo">
                              <p>
                                <b>Title:</b> {book.title}
                              </p>
                              <p>
                                <b>Author:</b> {book.author}
                              </p>
                              <p>
                                <b>Language:</b> {book.language}
                              </p>
                              <p>
                                <b>Publication date:</b> {book.publicationDate}
                              </p>
                            </div>
                          </div>
                        </div>
                      </ListItem>
                    </Link>
                    <Divider />
                  </>
                );
              })}
            </List>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SearchResults;
