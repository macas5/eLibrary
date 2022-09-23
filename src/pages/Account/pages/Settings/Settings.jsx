import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import AccountInfo from '../../components/AccountInfo/AccountInfo';

import './Settings.css';

const Settings = ({ user }) => {
  const [updatedUserData, setUpdatedUserData] = useState({});
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleFormChange = (e) => {
    e.target.value
      ? setUpdatedUserData((prev) => ({
          ...prev,
          [e.target.name]: e.target.value,
        }))
      : setUpdatedUserData((prev) => {
          delete prev[e.target.name];
          return { ...prev };
        });
  };

  const isPasswordFieldsFilled = () => {
    return (
      updatedUserData.currPassword ||
      updatedUserData.newPassword ||
      updatedUserData.newPasswordRepeat
    );
  };

  const isPasswordsMatch = (pass1, pass2) => {
    return pass1 && pass2 && pass1 === pass2 ? true : false;
  };

  const handleSubmit = () => {
    if (!isPasswordFieldsFilled()) {
      setError('');
      setSuccess('Data updated successfuly');
      console.log(updatedUserData);
      return;
    }

    if (
      isPasswordsMatch(user.password, updatedUserData.currPassword) &&
      isPasswordsMatch(
        updatedUserData.newPassword,
        updatedUserData.newPasswordRepeat
      )
    ) {
      const newData = {
        ...updatedUserData,
        password: updatedUserData.newPassword,
      };
      delete newData.currPassword;
      delete newData.newPassword;
      delete newData.newPasswordRepeat;
      setError('');
      setSuccess('Data updated successfuly');
      console.log(newData);
    } else {
      setSuccess('');
      setError('Either current or new passwords do not match');
    }
  };

  return (
    <div className="accountSettings">
      <AccountInfo user={user} />
      <div className="accountSettingsWrapper">
        <div className="basicInfo">
          <h3>Basic info</h3>
          <TextField
            id="inputField"
            name="name"
            onChange={handleFormChange}
            label="Name"
            variant="outlined"
          />
          <TextField
            id="inputField"
            name="email"
            onChange={handleFormChange}
            label="email"
            variant="outlined"
          />
        </div>
        <div className="passwordField">
          <h3>Password</h3>
          <TextField
            id="inputField"
            name="currPassword"
            onChange={handleFormChange}
            label="Current Password"
            type="password"
            variant="outlined"
          />
          <TextField
            id="inputField"
            name="newPassword"
            onChange={handleFormChange}
            label="New Password"
            type="password"
            variant="outlined"
          />
          <TextField
            id="inputField"
            name="newPasswordRepeat"
            onChange={handleFormChange}
            label="Repeat Password"
            type="password"
            variant="outlined"
          />
        </div>
        <Button
          id="submit"
          onClick={handleSubmit}
          variant="contained"
          color="success"
        >
          Update
        </Button>
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
      </div>
    </div>
  );
};

export default Settings;
