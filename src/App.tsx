import React, { useEffect, useState } from 'react';
import './css/App.css';

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

import { NavMenu } from './NavMenu';

import { TenseChat } from './pages/Practice/TenseChat';

import { Practice } from './Practice';
import { Home } from './Home';
import { About } from './About';
import { Contact } from './Contact';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const [currentPage, setCurrentPage] = useState('Home');
  const location = useLocation();

  useEffect(() => {
    // Определите логику для обновления currentPage в зависимости от текущего пути
    if (location.pathname === '/Practice') {
      setCurrentPage('Practice');
    } else if (location.pathname === '/About') {
      setCurrentPage('About');
    } else if (location.pathname === '/Contact') {
      setCurrentPage('Contact');
    } else {
      setCurrentPage('Home');
    }
  }, [location.pathname]);

  return (
    <div className="App">
      {/*
            <div className="App">
                <NavMenu currentPage={currentPage} />
            </div>
          */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/langleraningplatform' element={<Home />} />
        <Route path="/practice" element={<TenseChat />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
