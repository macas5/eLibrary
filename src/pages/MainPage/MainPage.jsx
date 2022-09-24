import BookDisplay from '../../components/BookDisplay/BookDisplay';
import Footer from '../../components/Footer/Footer';
import SearchBar from '../../components/SearchBar/SearchBar';
import TopBar from '../../components/TopBar/TopBar';

const MainPage = ({ navbarLinks, accountLinks, user, books, backendUrl }) => {
  return (
    <>
      {books && (
        <>
          <TopBar
            navbarLinks={navbarLinks}
            accountLinks={accountLinks}
            user={user}
          />
          <SearchBar
            isMini={false}
            backendUrl={backendUrl}
          />
          <BookDisplay books={books} />
          <Footer />
        </>
      )}
    </>
  );
};

export default MainPage;
