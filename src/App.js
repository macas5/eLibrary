import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainPage from './pages/MainPage/MainPage';
import Search from './pages/Search/Search';
import Account from './pages/Account/Account';

import './App.css';
import { books, user } from './dummyData';

const navbarLinks = [
  { name: 'eBooks', path: '/search/?readonline=true' },
  { name: 'Most popular', path: '/' },
  { name: 'Login', path: '/' },
  { name: 'Register', path: '/' },
];

const accountLinks = [
  { name: 'Account', path: '/account' },
  { name: 'Logout', path: '/' },
];

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <MainPage
                navbarLinks={navbarLinks}
                accountLinks={accountLinks}
              />
            }
          />
          <Route
            path="/search"
            element={
              <Search
                navbarLinks={navbarLinks}
                accountLinks={accountLinks}
                books={books}
              />
            }
          />
          <Route
            path="/search/:searchValue"
            element={
              <Search
                navbarLinks={navbarLinks}
                accountLinks={accountLinks}
                books={books}
              />
            }
          />
          <Route
            path="/account"
            element={
              <Account
                navbarLinks={navbarLinks}
                accountLinks={accountLinks}
                user={user}
                books={books}
              />
            }
          />
          <Route
            path="/account/:route"
            element={
              <Account
                navbarLinks={navbarLinks}
                accountLinks={accountLinks}
                user={user}
                books={books}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
