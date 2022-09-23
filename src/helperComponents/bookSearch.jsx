import { Divider, List, ListItem } from '@mui/material';
import { Link } from 'react-router-dom';

const showBookSearchResults = (bookList) => {
  return (
    bookList && (
      <List key="bookList">
        {bookList.map((book, index) => {
          return (
            <Link
              className="link"
              to={`/book/${book._id}`}
              key={index}
            >
              <ListItem key={index + 'item'}>
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
              <Divider />
            </Link>
          );
        })}
      </List>
    )
  );
};

export default showBookSearchResults;
