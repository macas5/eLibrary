import AccountInfo from '../../components/AccountInfo/AccountInfo';

import './Settings.css';

const Settings = ({ user }) => {
  return (
    <div className="accountSettings">
      <AccountInfo user={user} />
    </div>
  );
};

export default Settings;
