import { Container } from '@mui/system';
import Footer from '../../components/Footer/Footer';
import SearchBar from '../../components/SearchBar/SearchBar';
import TopBar from '../../components/TopBar/TopBar';
import AccountNav from './components/AccountNav/AccountNav';
import Books from './pages/Books/Books';
import Settings from './pages/Settings/Settings';
import Overview from './pages/Overview/Overview';
import { useParams } from 'react-router-dom';
import Messages from './pages/Messages/Messages';

const Account = ({
  navbarLinks,
  accountLinks,
  user,
  books,
  backendUrl,
  setUserState,
}) => {
  const { route } = useParams();
  const routes = {
    books: (
      <Books
        user={user}
        books={books}
      />
    ),
    settings: (
      <Settings
        user={user}
        backendUrl={backendUrl}
        setUserState={setUserState}
      />
    ),
    messages: <Messages user={user} />,
  };

  const routeSelector = () => {
    return route && Object.keys(routes).includes(route) ? (
      routes[route]
    ) : (
      <Overview
        user={user}
        books={books}
      />
    );
  };

  return (
    <div className="accountPage">
      <TopBar
        navbarLinks={navbarLinks}
        accountLinks={accountLinks}
        user={user}
      />
      <SearchBar
        isMini={true}
        backendUrl={backendUrl}
      />
      <Container>
        <AccountNav />
        {routeSelector()}
      </Container>
      <Footer />
    </div>
  );
};

export default Account;
