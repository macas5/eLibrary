import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainPage from './pages/MainPage/MainPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import Search from './pages/Search/Search';
import Account from './pages/Account/Account';

import './App.css';
import { user } from './dummyData';
import connection from './utils/connection';
import { useEffect, useState } from 'react';

const navbarLinks = [
  { name: 'eBooks', path: '/search/?readonline=true' },
  { name: 'Most popular', path: '/' },
  { name: 'Login', path: '/login' },
  { name: 'Register', path: '/register' },
];

const accountLinks = [
  { name: 'Account', path: '/account' },
  { name: 'Messages', path: '/account/messages' },
  { name: 'Logout', path: '/' },
];

const backendUrl = 'http://localhost:3001';

function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const {
    dataState: books,
    loading: booksLoading,
    error: booksError,
  } = connection(`${backendUrl}/book/get`, 'GET');

  useEffect(() => {
    setLoading(booksLoading ? true : false);
    setError(booksError ? true : false);
  }, [booksError, booksLoading]);

  return (
    <div className="App">
      {!loading && !error ? (
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
      ) : (
        <h1>{error}</h1>
      )}
    </div>
  );
}

export default App;
