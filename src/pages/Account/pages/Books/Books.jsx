import AccountBooks from '../../components/AccountBooks/AccountBooks';
import "./Books.css";

const Books = ({ user, books, setUserState, backendUrl }) => {
  return (
    <div className='accountBooks'>
    <AccountBooks
      user={user}
      books={books}
      setUserState={setUserState}
      backendUrl={backendUrl}
    />
    </div>
  );
};

export default Books;
