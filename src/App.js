import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import SearchPage from './components/SearchPage';
import ListingPage from './components/ListingPage';
import DetailsPage from './components/DetailsPage';
import BookmarksPage from './components/BookmarksPage';




const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/listing">Listing</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/listing" element={<ListingPage />} />
          <Route path="/details/:name" element={<DetailsPage />} />
          <Route exact path="/bookmarks" component={BookmarksPage} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
