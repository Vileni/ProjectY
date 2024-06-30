import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Photos from './pages/Photos';
import About from './pages/About';
import ErrorPage from './pages/ErrorPage';
import Footer from './components/Footer';
import Header from './components/Header';

function AppRouter() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/photos' element={<Photos />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default AppRouter;
