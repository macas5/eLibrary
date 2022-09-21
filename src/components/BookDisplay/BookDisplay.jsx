import Button from '@mui/material/Button';
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

const BookDisplay = () => {
  return (
    <div className="bookDisplay">
      <div className="bookDisplayWrapper">
        <h1>eBooks</h1>
        <div className="bookDisplayShowcase">
          {books.map((book, index) => (
            <Link
              key={book.image}
              to={book.link}
            >
              <img
                src={book.image}
                alt={`book${index}`}
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
