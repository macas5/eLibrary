import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import AccountBooks from '../../components/AccountBooks/AccountBooks';
import AccountInfo from '../../components/AccountInfo/AccountInfo';
import './Overview.css';

const Overview = ({ user, books, setUserState, backendUrl }) => {
  return (
    <div className="overview">
      <AccountInfo user={user} />
      <div className="accountBooks">
        <AccountBooks
          user={user}
          books={books}
          setUserState={setUserState}
          backendUrl={backendUrl}
          bookLimit={5}
        />
        {books && books.length > 5 && (
          <div className="buttonWrapper">
            <Link className="plainLink" to="/account/books">
              <Button variant="contained">View all of your books</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Overview;
