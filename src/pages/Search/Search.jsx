import Footer from '../../components/Footer/Footer';
import SearchBar from '../../components/SearchBar/SearchBar';
import SearchResults from '../../components/SearchResults/SearchResults';
import TopBar from '../../components/TopBar/TopBar';
import { useParams } from 'react-router-dom';

const Search = ({ navbarLinks, accountLinks }) => {
  const { searchValue } = useParams();
  return (
    <>
      <TopBar
        navbarLinks={navbarLinks}
        accountLinks={accountLinks}
      />
      <SearchBar
        isMini={true}
        value={searchValue}
      />
      <SearchResults searchValue={searchValue} />
      <Footer />
    </>
  );
};

export default Search;
