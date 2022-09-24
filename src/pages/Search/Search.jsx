import Footer from '../../components/Footer/Footer';
import SearchBar from '../../components/SearchBar/SearchBar';
import SearchResults from '../../components/SearchResults/SearchResults';
import TopBar from '../../components/TopBar/TopBar';
import { useParams, useSearchParams } from 'react-router-dom';

const Search = ({ navbarLinks, accountLinks, books, user }) => {
  const { searchValue } = useParams();
  const [searchParams] = useSearchParams();
  const readOnline = `${searchParams.get('readonline')}`;
  return (
    <>
      <TopBar
        navbarLinks={navbarLinks}
        accountLinks={accountLinks}
        user={user}
      />
      <SearchBar
        isMini={true}
        value={searchValue}
      />
      <SearchResults
        searchValue={searchValue}
        isOnlineReadable={readOnline}
        books={books}
      />
      <Footer />
    </>
  );
};

export default Search;
