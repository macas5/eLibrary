import Footer from '../../components/Footer/Footer';
import SearchBar from '../../components/SearchBar/SearchBar';
import SearchResults from '../../components/SearchResults/SearchResults';
import TopBar from '../../components/TopBar/TopBar';

const Search = ({ navbarLinks, accountLinks }) => {
  return (
    <>
      <TopBar
        navbarLinks={navbarLinks}
        accountLinks={accountLinks}
      />
      <SearchBar isMini={true} />
      <SearchResults />
      <Footer />
    </>
  );
};

export default Search;
