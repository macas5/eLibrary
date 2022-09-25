import TopBar from '../../components/TopBar/TopBar';
import RegisterForm from '../../components/AuthForms/RegisterForm';
import Footer from '../../components/Footer/Footer';

const RegisterPage = ({
  navbarLinks,
  accountLinks,
  user,
  backendUrl,
  setUserState,
}) => {
  return (
    <>
      <TopBar
        navbarLinks={navbarLinks}
        accountLinks={accountLinks}
        user={user}
      />
      <RegisterForm
        backendUrl={backendUrl}
        setUserState={setUserState}
      />
      <Footer />
    </>
  );
};

export default RegisterPage;
