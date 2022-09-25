import { useState } from 'react';
import myBooksDisplay from '../../../../helperComponents/myBooksDisplay';
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
      {myBooksDisplay(bookList, user)}
    </>
  );
};

export default AccountBooks;
