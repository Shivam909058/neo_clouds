import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, CircuitBoard } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <CircuitBoard className="w-8 h-8 text-purple-400" />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Neo Clouds
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/solutions" className="text-gray-300 hover:text-white transition-colors">
              Solutions
            </Link>
            <Link to="/resources" className="text-gray-300 hover:text-white transition-colors">
              Resources
            </Link>
            <Link to="/dashboard" className="text-gray-300 hover:text-white transition-colors">
              Dashboard
            </Link>
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-colors">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link
                to="/solutions"
                className="text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Solutions
              </Link>
              <Link
                to="/resources"
                className="text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Resources
              </Link>
              <Link
                to="/dashboard"
                className="text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Dashboard
              </Link>
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}