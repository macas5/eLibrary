import Footer from '../../components/Footer/Footer';
import MainBody from '../../components/MainBody/MainBody';
import TopBar from '../../components/TopBar/TopBar';

const MainPage = ({ navbarLinks }) => {
  return (
    <>
      <TopBar navbarLinks={navbarLinks} />
      <MainBody />
      <Footer />
    </>
  );
};

export default MainPage;
