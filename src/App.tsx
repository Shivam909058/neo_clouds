import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import Resources from './pages/Resources';
import Dashboard from './pages/Dashboard';
import Apps from './pages/Apps';
import Footer from './components/layout/Footer';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white flex flex-col"> {/* Added flex flex-col */}
        <Navbar />
        <main className="flex-grow"> {/* Added flex-grow */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/apps" element={<Apps />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}