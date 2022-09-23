import BookDisplay from '../../components/BookDisplay/BookDisplay';
import Footer from '../../components/Footer/Footer';
import SearchBar from '../../components/SearchBar/SearchBar';
import TopBar from '../../components/TopBar/TopBar';

const MainPage = ({ navbarLinks, accountLinks, user }) => {
  return (
    <>
      <TopBar
        navbarLinks={navbarLinks}
        accountLinks={accountLinks}
        user={user}
      />
      <SearchBar isMini={false} />
      <BookDisplay />
      <Footer />
    </>
  );
};

export default MainPage;
