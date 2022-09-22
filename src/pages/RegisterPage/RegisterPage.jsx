import TopBar from '../../components/TopBar/TopBar';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import Footer from '../../components/Footer/Footer';

const RegisterPage = ({ navbarLinks, accountLinks }) => {
  return (
    <>
      <TopBar
        navbarLinks={navbarLinks}
        accountLinks={accountLinks}
      />
      <RegisterForm />
      <Footer />
    </>
  );
};

export default RegisterPage;
