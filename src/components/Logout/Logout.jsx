import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import connection from '../../utils/connection';

const Logout = ({ backendUrl, setUserState }) => {
  try {
    connection(`${backendUrl}/user/logout`, 'POST');
  } catch (error) {
    console.log(error);
  }
  const nav = useNavigate();

  useEffect(() => {
    setUserState(null);
    nav('/');
  }, [nav, setUserState]);
  return <p></p>;
};

export default Logout;
