import { Link } from 'react-router-dom';
import './AccountNav.css';

const AccountNav = () => {
  return (
    <div className="accountNav">
      <ul>
        <Link to="/account">
          <li>Account</li>
        </Link>
        <li>My Books</li>
        <li>Orders</li>
        <li>Settings</li>
      </ul>
    </div>
  );
};

export default AccountNav;
