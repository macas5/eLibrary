import { Container } from '@mui/system';
import Footer from '../../components/Footer/Footer';
import SearchBar from '../../components/SearchBar/SearchBar';
import TopBar from '../../components/TopBar/TopBar';
import AccountNav from './components/AccountNav/AccountNav';
import Overview from './pages/Overview/Overview';

const user = {
  username: 'usrnm',
  name: 'User Name',
};

const Account = ({ navbarLinks, accountLinks }) => {
  return (
    <div className="accountPage">
      <TopBar
        navbarLinks={navbarLinks}
        accountLinks={accountLinks}
      />
      <SearchBar isMini={true} />
      <Container>
        <AccountNav />
        <Overview user={user} />
      </Container>
      <Footer />
    </div>
  );
};

export default Account;
