import AccountBooks from '../../components/AccountBooks/AccountBooks';
import "./Books.css";

const Books = ({ user, books, setUserState }) => {
  return (
    <div className='accountBooks'>
    <AccountBooks
      user={user}
      books={books}
      setUserState={setUserState}
    />
    </div>
  );
};

export default Books;
