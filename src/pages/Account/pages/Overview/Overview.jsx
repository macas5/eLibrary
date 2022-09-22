import AccountBooks from '../../components/AccountBooks/AccountBooks';
import AccountInfo from '../../components/AccountInfo/AccountInfo';
import './Overview.css';

const Overview = ({ user, books }) => {
  return (
    <div className="overview">
      <AccountInfo user={user} />
      <div className="accountBooks">
        <AccountBooks
          user={user}
          books={books}
        />
      </div>
    </div>
  );
};

export default Overview;
