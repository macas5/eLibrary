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
        <li>Settings</li>
      </ul>
    </div>
  );
};

export default AccountNav;
