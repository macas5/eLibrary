import './AuthForms.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const LoginForm = ({ backendUrl, setUserState }) => {
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState('');
  const nav = useNavigate();

  const handleFormChange = (e) => {
    setLoginData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    if (!loginData.username || !loginData.password) {
      return setError('Please enter username and password');
    }
    try {
      const { data } = await axios.post(`${backendUrl}/user/login`, loginData, {
        withCredentials: true,
      });
      setUserState(data);
      nav('/');
    } catch (error) {
      error.code === 'ERR_BAD_REQUEST' &&
        setError('Invalid username or password');
      console.log(error);
    }
  };

  return (
    <div className="authFormWrapper">
      <div className="authFormTitle">Login</div>
      <div className="authFormBox">
        <div className="authFormFirstSection">
          <div className="authFormRow">
            <div className="authFormLabel">Username</div>
            <input
              name="username"
              onChange={handleFormChange}
              type="text"
            />
          </div>
          <div className="authFormRow">
            <div className="authFormLabel">Password</div>
            <input
              name="password"
              onChange={handleFormChange}
              type="password"
            />
          </div>
          <div className="authFormButton">
            <button onClick={handleSubmit}>Login</button>
            <p className="error">{error}</p>
          </div>
        </div>
        <div className="authFormSecondSection">
          <div className="authFormSectionTitle">
            You do not have an account?
          </div>
          <div className="authFormButton">
            <Link to="/register">
              <button>Register</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
