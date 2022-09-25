import { useState } from 'react';
import showBookSearchResults from '../../../../helperComponents/bookSearch';
import './AccountBooks.css';

const AccountBooks = ({ user, books, bookLimit = 0 }) => {
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
      {showBookSearchResults(bookList, null, null, null, bookLimit)}
    </>
  );
};

export default AccountBooks;
