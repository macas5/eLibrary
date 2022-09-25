import TopBar from '../../components/TopBar/TopBar';
import LoginForm from '../../components/AuthForms/LoginForm';
import Footer from '../../components/Footer/Footer';

const LoginPage = ({
  navbarLinks,
  accountLinks,
  backendUrl,
  user,
  setUserState,
}) => {
  return (
    <>
      <TopBar
        navbarLinks={navbarLinks}
        accountLinks={accountLinks}
        user={user}
      />
      <LoginForm
        backendUrl={backendUrl}
        setUserState={setUserState}
      />
      <Footer />
    </>
  );
};

export default LoginPage;
