import { Avatar } from '@mui/material';
import AccountBooks from '../../components/AccountBooks/AccountBooks';
import './Overview.css';

const Overview = ({ user }) => {
  return (
    <div className="overview">
      <div className="accountInfo">
        <Avatar id="avatar">
          {`${user.name.split(' ')[0][0]}${user.name.split(' ')[1][0]}`}
        </Avatar>
        <div className="userData">
          <p>{`Hi ${user.name}!`}</p>
          <p>Loaned books: 12</p>
          <p>eBooks owned: 21</p>
          <p>Books overdue: 2</p>
        </div>
      </div>
      <div className="accountBooks">
        <AccountBooks />
      </div>
    </div>
  );
};

export default Overview;
