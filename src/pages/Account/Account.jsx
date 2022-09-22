import Footer from '../../components/Footer/Footer';
import SearchBar from '../../components/SearchBar/SearchBar';
import TopBar from '../../components/TopBar/TopBar';

const Account = ({ navbarLinks, accountLinks }) => {
  return (
    <div className="accountPage">
      <TopBar
        navbarLinks={navbarLinks}
        accountLinks={accountLinks}
      />
      <SearchBar isMini={true} />
      <Footer />
    </div>
  );
};

export default Account;
