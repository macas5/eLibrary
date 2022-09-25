import myBooksDisplay from '../../../../helperComponents/myBooksDisplay';
import './AccountBooks.css';

const AccountBooks = ({ user, books, setUserState, bookLimit = 0 }) => {
  return (
    <>
      <h3>My Books</h3>
      {books &&
        user &&
        myBooksDisplay(
          user,
          books.filter((book) => user.booksOwned.includes(book._id)),
          setUserState
        )}
    </>
  );
};

export default AccountBooks;
