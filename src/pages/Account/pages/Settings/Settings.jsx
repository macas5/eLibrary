import { Button, TextField } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AccountInfo from '../../components/AccountInfo/AccountInfo';

import './Settings.css';

const Settings = ({ user, backendUrl, setUserState }) => {
  const [updatedUserData, setUpdatedUserData] = useState({});
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const nav = useNavigate();

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

  const isNameCorrect = (name) => !name || name.split(' ').length > 1;

  const sendData = async (data) => {
    try {
      return await axios.put(`${backendUrl}/user/update/${user._id}`, data, {
        withCredentials: true,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async () => {
    if (!isNameCorrect(updatedUserData.name)) {
      setSuccess('');
      return setError('Please enter your full name');
    }

    if (!isPasswordFieldsFilled()) {
      setError('');
      setSuccess('Data updated successfuly');
      const { data } = await sendData({ updatedUserData });
      data && setUserState(data);
      return;
    }

    if (
      isPasswordsMatch(
        updatedUserData.newPassword,
        updatedUserData.newPasswordRepeat
      )
    ) {
      try {
        const { data } = await sendData({ updatedUserData });
        data && setUserState(null);
        nav('/');
      } catch (error) {
        if (error.response.status === 405) setError('Invalid current password');
        console.error(error);
      }
    } else {
      setSuccess('');
      setError('Either current or new passwords do not match');
    }
  };

  const handleEnter = (e) => {
    e.keyCode === 13 && handleSubmit(e);
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
            onKeyDown={handleEnter}
            label="Name"
            variant="outlined"
          />
          <TextField
            id="inputField"
            name="email"
            onChange={handleFormChange}
            onKeyDown={handleEnter}
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
            onKeyDown={handleEnter}
            label="Current Password"
            type="password"
            variant="outlined"
          />
          <TextField
            id="inputField"
            name="newPassword"
            onChange={handleFormChange}
            onKeyDown={handleEnter}
            label="New Password"
            type="password"
            variant="outlined"
          />
          <TextField
            id="inputField"
            name="newPasswordRepeat"
            onChange={handleFormChange}
            onKeyDown={handleEnter}
            label="Repeat Password"
            type="password"
            variant="outlined"
          />
        </div>
        <div className="settingsUpdateButton">
        <Button
          id="submit"
          onClick={handleSubmit}
          variant="contained"
          color="success"
        >
          Update
        </Button>
        </div>
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
      </div>
    </div>
  );
};

export default Settings;
