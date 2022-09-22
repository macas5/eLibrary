import { Container } from '@mui/system';
import './AccountNav.css';

const AccountNav = () => {
  return (
    <Container>
      <div className="accountNav">
        <ul>
          <li>Account</li>
          <li>My Books</li>
          <li>Orders</li>
          <li>Settings</li>
        </ul>
      </div>
    </Container>
  );
};

export default AccountNav;
