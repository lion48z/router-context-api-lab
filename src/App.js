import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <Router>
  <div>
     
     <Routes>
          <Route path="/*" element={<HomePage />} />
          <Route path="/searchPage" element={<SearchPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;
