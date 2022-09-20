import Footer from '../../components/Footer/Footer';
import MainBody from '../../components/MainBody/MainBody';
import TopBar from '../../components/TopBar/TopBar';

const MainPage = ({ navbarLinks, accountLinks }) => {
  return (
    <>
      <TopBar
        navbarLinks={navbarLinks}
        accountLinks={accountLinks}
      />
      <MainBody />
      <Footer />
    </>
  );
};

export default MainPage;
