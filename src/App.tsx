import React, { useEffect, useState } from 'react';
import './css/App.css';

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

import { NavMenu } from './NavMenu/NavMenu';

import { TenseChat } from './pages/Practice/TenseChat';

import { Practice } from './Practice';
import { Home } from './Home';
import { About } from './About';
import { Contact } from './pages/Contact/Contact';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const [currentPage, setCurrentPage] = useState('Practice');
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/Practice') {
      setCurrentPage('Practice');
    } else if (location.pathname === '/About') {
      setCurrentPage('Practice');
    } else if (location.pathname === '/Feedback') {
      setCurrentPage('Feedback');
    } else {
      setCurrentPage('Practice');
    }
  }, [location.pathname]);

  return (
    <div className="App">
      <NavMenu currentPage={currentPage} />
      <Routes>
        <Route path="/" element={<TenseChat />} />                { /* Home is not implemented yet */ }
        <Route path="/Practice" element={<TenseChat />} />
        <Route path="/About" element={<TenseChat />} />           { /* About is not implemented yet */ }
        <Route path="/Feedback" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
