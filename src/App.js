import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import SearchPage from "./pages/SearchPage";
import {MovieProvider} from './MovieContext';

function App() {
  return (
    <Router>
      <MovieProvider>
      <div>
        
        <nav>
          <ul className="list-unstyled">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/searchPage">Search</Link>
            </li>
            <li>
              <Link to="/movieDetailsPage">Movie Details</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/searchPage" element={<SearchPage />} />
          <Route path="/movie/:imdbID" element={<MovieDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      </MovieProvider>
    </Router>
  );
}

export default App;
