import AccountBooks from '../../components/AccountBooks/AccountBooks';

const Books = ({ user, books }) => {
  return (
    <AccountBooks
      user={user}
      books={books}
    />
  );
};

export default Books;
