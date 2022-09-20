import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainPage from './pages/MainPage/MainPage';
import './App.css';

const navbarLinks = [
  { name: 'eBooks', path: '/' },
  { name: 'Most popular', path: '/' },
  { name: 'Login', path: '/' },
  { name: 'Register', path: '/' },
];

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<MainPage navbarLinks={navbarLinks} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
