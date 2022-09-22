import TopBar from '../../components/TopBar/TopBar';
import LoginForm from '../../components/LoginForm/LoginForm';
import Footer from '../../components/Footer/Footer';

const LoginPage = ({ navbarLinks, accountLinks }) => {
  return (
    <>
      <TopBar
        navbarLinks={navbarLinks}
        accountLinks={accountLinks}
      />
      <LoginForm />
      <Footer />
    </>
  );
};

export default LoginPage;
