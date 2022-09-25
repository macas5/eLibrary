import { useState } from 'react';
import showBookSearchResults from '../../../../helperComponents/bookSearch';
import './AccountBooks.css';

const AccountBooks = ({ user, books }) => {
  const [bookList, setbookList] = useState(books);

  useState(() => {
    if (books && user) {
      const filteredBooks = books.filter((book) =>
        user.booksOwned.includes(book._id)
      );
      setbookList(filteredBooks);
    }
  }, []);

  return (
    <>
      <h3>My Books</h3>
      {showBookSearchResults(bookList, 0, 0, 0, 5)}
    </>
  );
};

export default AccountBooks;
