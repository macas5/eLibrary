import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainPage from './pages/MainPage/MainPage';
import Search from './pages/Search/Search';

import './App.css';

const navbarLinks = [
  { name: 'eBooks', path: '/' },
  { name: 'Most popular', path: '/' },
  { name: 'Login', path: '/' },
  { name: 'Register', path: '/' },
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
            path="/search"
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
