import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BellIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Start a Drive', href: '/start-drive' },
    { name: 'Leaderboard', href: '/leaderboard' },
    { name: 'My Profile', href: '/profile' },
    { name: 'Check Drive Status', href: '/drive-status' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-primary-600">🧼 CleanDrive</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-gray-700 hover:text-primary-600 hover:bg-gray-100'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* SOS Button - Highlighted in Red */}
            <Link
              to="/report-issue"
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                isActive('/report-issue')
                  ? 'bg-danger-600 text-white'
                  : 'bg-danger-500 text-white hover:bg-danger-600'
              }`}
            >
              🚨 Trigger SOS
            </Link>

            {/* Notification Bell */}
            <button className="p-2 text-gray-400 hover:text-gray-500 relative">
              <BellIcon className="h-6 w-6" />
              <span className="absolute top-0 right-0 h-2 w-2 bg-danger-500 rounded-full"></span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {isMenuOpen ? (
                <XMarkIcon className="block h-6 w-6" />
              ) : (
                <Bars3Icon className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(item.href)
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-gray-700 hover:text-primary-600 hover:bg-gray-100'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/report-issue"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium bg-danger-500 text-white hover:bg-danger-600"
            >
              🚨 Trigger SOS
            </Link>
            <button className="flex items-center px-3 py-2 text-gray-700">
              <BellIcon className="h-5 w-5 mr-2" />
              Notifications
              <span className="ml-2 h-2 w-2 bg-danger-500 rounded-full"></span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 
