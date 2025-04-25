import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Food from './pages/Food';
import Banking from './pages/Banking';
import IT from './pages/IT';
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';
import NotFound from './pages/NotFound'; // This is the fallback page for unmatched routes

function App() {
  return (
    <Router>
      <div className="app-container d-flex flex-column min-vh-100">
        <Navbar />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/food" element={<Food />} />
            <Route path="/banking" element={<Banking />} />
            <Route path="/it" element={<IT />} />
            <Route path="/contact" element={<Contact />} />
            {/* Fallback route for unmatched paths */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
