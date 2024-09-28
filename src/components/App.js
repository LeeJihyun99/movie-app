import {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import Home from './Home';
import Details from './Details';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<Details />} />
      </Routes>
    </Router>

  );
}

export default App;
