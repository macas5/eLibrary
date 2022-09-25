import { Divider, List, ListItem, Pagination } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';

const myBooksDisplay = (bookList, user) => {
  
  const handleBookRemoval = async (bookId) => {
    const booksOwnedNew = bookList.filter(function( book ) {
      return book._id !== bookId;
    });
    bookList = booksOwnedNew;
    const bookIdArray = booksOwnedNew.map((book) => book._id);
    try {
      await axios.put(`http://localhost:3001/user/update/${user._id}`, { booksOwned: bookIdArray });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    bookList && (
      <List key="bookList">
        {bookList.map((book, index) => {
          return (
              <ListItem key={index + 'item'}>
                <Link className="link" to={`/book/${book._id}`} key={index} >
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
                </Link>
                <button className="removeBookButton" onClick={ () => handleBookRemoval(book._id) }>Remove</button>
              </ListItem>    
          );
        })}
      </List>
    )
  );
};

export default myBooksDisplay;
