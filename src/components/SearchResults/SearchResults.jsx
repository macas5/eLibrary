import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
// import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';

import './SearchResults.css';

const book = (
  title,
  author,
  publicationDate,
  imageLink,
  form,
  language,
  id = ''
) => {
  return {
    title: title,
    author: author,
    form: form,
    publicationDate: publicationDate,
    imageLink: imageLink,
    language: language,
    id: id,
  };
};

const books = [
  book(
    'In Search of Lost time',
    'Marcel Proust',
    2005,
    '',
    'Printed',
    'English'
  ),
  book('Ulysses', 'James Joyse', 1950, '', 'Printed', 'French'),
  book('Don Quixote', 'Muigel de Cervantes', 1873, '', 'Electronic', 'Latvian'),
  book(
    'One Hundred Years of Solitude',
    'Gabriel Garcia Marquez',
    1701,
    '',
    'Printed',
    'Lithuanian'
  ),
  book(
    'The Great Gatsby',
    'F. Scott Fitzgerald',
    1992,
    '',
    'Electronic',
    'English'
  ),
];

const SearchResults = () => {
  return (
    <Container>
      <div className="searchResults">
        <h1>Search</h1>
        <p>Number of results found: 420</p>
        <div className="searchResultsWrapper">
          <div className="filters">
            <List dense>
              <List id="filters-list">
                <ListItem>
                  <Checkbox edge="start" />
                  <ListItemText primary="Read Online" />
                </ListItem>
              </List>
              <List id="filters-list">
                <p>Form</p>
                <ListItem>
                  <Checkbox edge="start" />
                  <ListItemText primary="Printed" />
                </ListItem>
                <ListItem>
                  <Checkbox edge="start" />
                  <ListItemText primary="Electronic" />
                </ListItem>
              </List>
              <List id="filters-list">
                <p>Language</p>
                <ListItem>
                  <Checkbox edge="start" />
                  <ListItemText primary="English" />
                </ListItem>
                <ListItem>
                  <Checkbox edge="start" />
                  <ListItemText primary="French" />
                </ListItem>
                <ListItem>
                  <Checkbox edge="start" />
                  <ListItemText primary="Latvian" />
                </ListItem>
                <ListItem>
                  <Checkbox edge="start" />
                  <ListItemText primary="Lithuanian" />
                </ListItem>
              </List>
              <List id="filters-list">
                <p>Release state</p>
                <ListItem>
                  <Checkbox edge="start" />
                  <ListItemText primary="Released" />
                </ListItem>
                <ListItem>
                  <Checkbox edge="start" />
                  <ListItemText primary="Not released" />
                </ListItem>
              </List>
            </List>
          </div>
          <div className="results">
            <List>
              {books.map((book, index) => {
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
