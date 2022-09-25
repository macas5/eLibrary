import AccountBooks from '../../components/AccountBooks/AccountBooks';

const Books = ({ user, books, setUserState }) => {
  return (
    <AccountBooks
      user={user}
      books={books}
      setUserState={setUserState}
    />
  );
};

export default Books;
