import { Container } from '@mui/system';
import Footer from '../../components/Footer/Footer';
import SearchBar from '../../components/SearchBar/SearchBar';
import TopBar from '../../components/TopBar/TopBar';
import AccountNav from './components/AccountNav/AccountNav';
import Overview from './pages/Overview/Overview';

const Account = ({ navbarLinks, accountLinks, user, books }) => {
  return (
    <div className="accountPage">
      <TopBar
        navbarLinks={navbarLinks}
        accountLinks={accountLinks}
      />
      <SearchBar isMini={true} />
      <Container>
        <AccountNav />
        <Overview
          user={user}
          books={books}
        />
      </Container>
      <Footer />
    </div>
  );
};

export default Account;
