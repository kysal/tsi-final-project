import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FilmListPage from './pages/FilmListPage';
import FilmPage from './pages/FilmPage';
import LoginPage from './pages/LoginPage';
import ActorPage from './pages/ActorPage';
import MainHeading from './components/MainHeading';

function App() {
  return (
    <Router>
      <div className="App app-padding">

        <MainHeading />

        <Routes>
          <Route path='/' element={<HomePage />} />

          <Route path='filmlist' element={<FilmListPage />} />

          <Route path='film'>
            <Route path=':filmId' element={<FilmPage />} />
          </Route>

          <Route path='actor'>
            <Route path=':actorId' element={<ActorPage />} />
          </Route>

          <Route path='login' element={<LoginPage />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
