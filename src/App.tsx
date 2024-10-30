import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import Resources from './pages/Resources';
import Dashboard from './pages/Dashboard';
import Apps from './pages/Apps'; // Add this import
import Footer from './components/layout/Footer';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/apps" element={<Apps />} /> {/* Add this route */}
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        
      </div>
    </Router>
  );
}