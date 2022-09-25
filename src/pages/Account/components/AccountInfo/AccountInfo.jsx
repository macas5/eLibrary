import { Avatar } from '@mui/material';

import './AccountInfo.css';

const AccountInfo = ({ user }) => {
  return (
    <div className="accountInfo">
      {user && (
        <>
          <Avatar id="avatar">
            {`${user.name.split(' ')[0][0]}${user.name.split(' ')[1][0]}`}
          </Avatar>
          <div className="userData">
            <p>{`Hi ${user.name}!`}</p>
            <p>Loaned books: 12</p>
            <p>eBooks owned: {user.booksOwned.length}</p>
            <p>Books overdue: 2</p>
          </div>
        </>
      )}
    </div>
  );
};

export default AccountInfo;
