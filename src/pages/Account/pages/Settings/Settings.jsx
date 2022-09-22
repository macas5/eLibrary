import { Button, TextField } from '@mui/material';
import AccountInfo from '../../components/AccountInfo/AccountInfo';

import './Settings.css';

const Settings = ({ user }) => {
  return (
    <div className="accountSettings">
      <AccountInfo user={user} />
      <div className="accountSettingsWrapper">
        <div className="basicInfo">
          <h3>Basic info</h3>
          <TextField
            id="inputField"
            label="Name"
            variant="outlined"
          />
          <TextField
            id="inputField"
            label="email"
            variant="outlined"
          />
        </div>
        <div className="passwordField">
          <h3>Password</h3>
          <TextField
            id="inputField"
            label="Current Password"
            type="password"
            variant="outlined"
          />
          <TextField
            id="inputField"
            label="New Password"
            type="password"
            variant="outlined"
          />
          <TextField
            id="inputField"
            label="Repeat Password"
            type="password"
            variant="outlined"
          />
        </div>
        <Button
          id="submit"
          variant="contained"
          color="success"
        >
          Update
        </Button>
      </div>
    </div>
  );
};

export default Settings;
