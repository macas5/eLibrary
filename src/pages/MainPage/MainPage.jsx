import Footer from '../../components/Footer/Footer';
import SearchBar from '../../components/SearchBar/SearchBar';
import TopBar from '../../components/TopBar/TopBar';

const MainPage = ({ navbarLinks, accountLinks }) => {
  return (
    <>
      <TopBar
        navbarLinks={navbarLinks}
        accountLinks={accountLinks}
      />
      <SearchBar />
      <Footer />
    </>
  );
};

export default MainPage;
