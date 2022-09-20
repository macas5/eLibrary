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
      <MainPage navbarLinks={navbarLinks} />
    </div>
  );
}

export default App;
