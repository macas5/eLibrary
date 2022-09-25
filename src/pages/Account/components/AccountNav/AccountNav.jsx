import { Link } from 'react-router-dom';
import './AccountNav.css';

const AccountNav = ({ isAdmin }) => {
  return (
    <div className="accountNav">
      <ul>
        <Link to="/account">
          <li>Account</li>
        </Link>
        <li>Pending Orders</li>
        <Link to="/account/books">
          <li>My Books</li>
        </Link>
        <Link to="/account/messages">
          <li>Messages</li>
        </Link>
        <Link to="/account/settings">
          <li>Settings</li>
        </Link>
        {isAdmin && (
          <Link to="/account/admin">
            <li>Admin menu</li>
          </Link>
        )}
      </ul>
    </div>
  );
};

export default AccountNav;
