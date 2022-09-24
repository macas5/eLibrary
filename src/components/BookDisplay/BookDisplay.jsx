import Button from '@mui/material/Button';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

import './BookDisplay.css';

const BookDisplay = ({ books }) => {
  const getRandomBooks = (books) => {
    const filteredBooks = books.filter(
      (book) => book.isReadableOnline === 'true'
    );
    const shuffledBooks = filteredBooks.sort(() => 0.5 - Math.random());
    return shuffledBooks.slice(0, 5);
  };

  const selectedBooks = useRef(getRandomBooks(books)).current;

  return (
    <div className="bookDisplay">
      <div className="bookDisplayWrapper">
        <h1>eBooks</h1>
        <div className="bookDisplayShowcase">
          {selectedBooks.map((book) => (
            <Link
              key={book._id}
              to={`/book/${book._id}`}
            >
              <img
                src={book.imageLink}
                alt={book.title}
              />
            </Link>
          ))}
        </div>
        <Link
          className="link"
          to="/search/?readonline=true"
        >
          <Button variant="outlined">All eBooks</Button>
        </Link>
      </div>
    </div>
  );
};

export default BookDisplay;
