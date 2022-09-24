import Button from '@mui/material/Button';
import { useMemo } from 'react';
import { Link } from 'react-router-dom';

import './BookDisplay.css';

const books = [
  {
    image:
      'https://ibiblioteka.lt/metis-api/front-page/electronic-books/1/cover',
    link: '/',
  },
  {
    image:
      'https://ibiblioteka.lt/metis-api/front-page/electronic-books/2/cover',
    link: '/',
  },
  {
    image:
      'https://ibiblioteka.lt/metis-api/front-page/electronic-books/3/cover',
    link: '/',
  },
  {
    image:
      'https://ibiblioteka.lt/metis-api/front-page/electronic-books/4/cover',
    link: '/',
  },
  {
    image:
      'https://ibiblioteka.lt/metis-api/front-page/electronic-books/5/cover',
    link: '/',
  },
];

const BookDisplay = ({ books }) => {
  const selectedBooks = useMemo(() => {
    const filteredBooks = books.filter(
      (book) => book.isReadableOnline === 'true'
    );
    const shuffledBooks = filteredBooks.sort(() => 0.5 - Math.random());
    return shuffledBooks.slice(0, 5);
  }, [books]);

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
