import { Link } from 'react-router-dom';
import './AccountNav.css';

const AccountNav = () => {
  return (
    <div className="accountNav">
      <ul>
        <Link to="/account">
          <li>Account</li>
        </Link>
        <Link to="/account/books">
          <li>My Books</li>
        </Link>
        <li>Orders</li>
        <Link to="/account/settings">
          <li>Settings</li>
        </Link>
      </ul>
    </div>
  );
};

export default AccountNav;
