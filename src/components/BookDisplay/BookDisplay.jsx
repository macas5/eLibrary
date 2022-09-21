import Button from '@mui/material/Button';

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
            <img
              key={book.image}
              src={book.image}
              alt={`book${index}`}
            />
          ))}
        </div>
        <Button variant="outlined">All eBooks</Button>
      </div>
    </div>
  );
};

export default BookDisplay;