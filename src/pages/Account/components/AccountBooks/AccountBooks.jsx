import myBooksDisplay from '../../../../helperComponents/myBooksDisplay';
import './AccountBooks.css';

const AccountBooks = ({ user, books, setUserState }) => {
  return (
    <>
      <h3>My Books</h3>
      {books &&
        user &&
        myBooksDisplay(
          books.filter((book) => user.booksOwned.includes(book._id)),
          user,
          setUserState
        )}
    </>
  );
};

export default AccountBooks;
