import AccountBooks from '../../components/AccountBooks/AccountBooks';
import AccountInfo from '../../components/AccountInfo/AccountInfo';
import './Overview.css';

const Overview = ({ user, books, setUserState }) => {
  return (
    <div className="overview">
      <AccountInfo user={user} />
      <div className="accountBooks">
        <AccountBooks
          user={user}
          books={books}
          setUserState={setUserState}
        />
      </div>
    </div>
  );
};

export default Overview;
