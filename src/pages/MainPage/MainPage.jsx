import BookDisplay from '../../components/BookDisplay/BookDisplay';
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
      <SearchBar isMini={false} />
      <BookDisplay />
      <Footer />
    </>
  );
};

export default MainPage;
