import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainPage from './pages/MainPage/MainPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import Search from './pages/Search/Search';
import Account from './pages/Account/Account';
import ProductPage from './pages/ProductPage/ProductPage';

import './App.css';
import connection from './utils/connection';
import { useEffect, useState } from 'react';
import Logout from './components/Logout/Logout';

const navbarLinks = [
  { name: 'eBooks', path: '/search/?readonline=true' },
  { name: 'Most popular', path: '/' },
  { name: 'Login', path: '/login' },
  { name: 'Register', path: '/register' },
];

const accountLinks = [
  { name: 'Account', path: '/account' },
  { name: 'Messages', path: '/account/messages' },
  { name: 'Logout', path: '/logout' },
];

const backendUrl = 'http://localhost:3001';

function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [user, setUser] = useState(null);
  const {
    dataState: books,
    loading: booksLoading,
    error: booksError,
  } = connection(`${backendUrl}/book/get`, 'GET');

  const { dataState: resUser } = connection(`${backendUrl}/user/getown`, 'GET');

  const setUserState = (user) => {
    setUser(user);
  };

  useEffect(() => {
    setUser(resUser);
  }, [resUser]);

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
                  user={user}
                  books={books}
                />
              }
            />
            <Route
              path="/login"
              element={
                <LoginPage
                  navbarLinks={navbarLinks}
                  accountLinks={accountLinks}
                  user={user}
                  backendUrl={backendUrl}
                  setUserState={setUserState}
                />
              }
            />
            <Route
              path="/register"
              element={
                <RegisterPage
                  navbarLinks={navbarLinks}
                  accountLinks={accountLinks}
                  user={user}
                  backendUrl={backendUrl}
                  setUserState={setUserState}
                />
              }
            />
            <Route
              path="/search"
              element={
                <Search
                  navbarLinks={navbarLinks}
                  accountLinks={accountLinks}
                  user={user}
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
                  user={user}
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
                  backendUrl={backendUrl}
                  setUserState={setUserState}
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
                  backendUrl={backendUrl}
                  setUserState={setUserState}
                />
              }
            />
            <Route
              path="/logout"
              element={
                <Logout
                  backendUrl={backendUrl}
                  setUserState={setUserState}
                />
              }
            />
            <Route
              path="/book/:bookId"
              element={
                <ProductPage
                  navbarLinks={navbarLinks}
                  accountLinks={accountLinks}
                  books={books}
                  user={user}
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
