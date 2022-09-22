import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainPage from './pages/MainPage/MainPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import Search from './pages/Search/Search';

import './App.css';

const navbarLinks = [
  { name: 'eBooks', path: '/search/?readonline=true' },
  { name: 'Most popular', path: '/' },
  { name: 'Login', path: '/login' },
  { name: 'Register', path: '/register' },
];

const accountLinks = [
  { name: 'Account', path: '/' },
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
            path="/login"
            element={
              <LoginPage
                navbarLinks={navbarLinks}
                accountLinks={accountLinks}
              />
            }
          />
          <Route
            path="/register"
            element={
              <RegisterPage
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
              />
            }
          />
          <Route
            path="/search/:searchValue"
            element={
              <Search
                navbarLinks={navbarLinks}
                accountLinks={accountLinks}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
