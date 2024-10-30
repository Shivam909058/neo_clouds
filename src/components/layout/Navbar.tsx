import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, CircuitBoard } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left side - Logo and Desktop Navigation */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <CircuitBoard className="w-8 h-8 text-purple-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Neo Clouds
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:block ml-10">
              <div className="flex items-center space-x-4">
                <Link to="/solutions" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Solutions
                </Link>
                <Link to="/resources" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Resources
                </Link>
                <Link to="/apps" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Apps
                </Link>
                <Link to="/dashboard" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Dashboard
                </Link>
              </div>
            </div>
          </div>

          {/* Right side - Get Started and Mobile Menu Button */}
          <div className="flex items-center">
            <Link
              to="/get-started"
              className="hidden md:block bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-colors"
            >
              Get Started
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to="/solutions"
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Solutions
              </Link>
              <Link
                to="/resources"
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Resources
              </Link>
              <Link
                to="/apps"
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Apps
              </Link>
              <Link
                to="/dashboard"
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Dashboard
              </Link>
              <Link
                to="/get-started"
                className="bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-colors block text-center"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}