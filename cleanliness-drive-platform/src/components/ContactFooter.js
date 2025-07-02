import React from 'react';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

const ContactFooter = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">🧼 CleanDrive Platform</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Empowering communities worldwide to create cleaner, healthier environments 
              through organized cleanup drives and sustainable initiatives.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <button className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                <span className="text-sm font-bold">f</span>
              </button>
              <button className="bg-blue-400 text-white p-2 rounded-lg hover:bg-blue-500 transition-colors duration-200">
                <span className="text-sm font-bold">t</span>
              </button>
              <button className="bg-pink-600 text-white p-2 rounded-lg hover:bg-pink-700 transition-colors duration-200">
                <span className="text-sm font-bold">ig</span>
              </button>
              <button className="bg-blue-800 text-white p-2 rounded-lg hover:bg-blue-900 transition-colors duration-200">
                <span className="text-sm font-bold">in</span>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Home
                </a>
              </li>
              <li>
                <a href="/start-drive" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Start a Drive
                </a>
              </li>
              <li>
                <a href="/drive-status" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Find Drives
                </a>
              </li>
              <li>
                <a href="/leaderboard" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Leaderboard
                </a>
              </li>
              <li>
                <a href="/profile" className="text-gray-300 hover:text-white transition-colors duration-200">
                  My Profile
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <EnvelopeIcon className="h-5 w-5 mr-3 text-gray-400" />
                <span className="text-gray-300">info@cleandrive.org</span>
              </div>
              <div className="flex items-center">
                <PhoneIcon className="h-5 w-5 mr-3 text-gray-400" />
                <span className="text-gray-300">+1-800-CLEANUP</span>
              </div>
              <div className="flex items-center">
                <MapPinIcon className="h-5 w-5 mr-3 text-gray-400" />
                <span className="text-gray-300">Global Headquarters</span>
              </div>
              <div className="flex items-center">
                <GlobeAltIcon className="h-5 w-5 mr-3 text-gray-400" />
                <span className="text-gray-300">www.cleandrive.org</span>
              </div>
            </div>
          </div>
        </div>

        {/* Support Section */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <h5 className="font-semibold mb-2">24/7 Support</h5>
              <p className="text-sm text-gray-300">
                Emergency environmental issues? Call our hotline anytime.
              </p>
            </div>
            <div className="text-center">
              <h5 className="font-semibold mb-2">Partner with Us</h5>
              <p className="text-sm text-gray-300">
                Join our network of environmental organizations.
              </p>
            </div>
            <div className="text-center">
              <h5 className="font-semibold mb-2">Newsletter</h5>
              <p className="text-sm text-gray-300">
                Stay updated with our latest environmental initiatives.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-400">
            © 2024 CleanDrive Platform. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <button className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
              Privacy Policy
            </button>
            <button className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
              Terms of Service
            </button>
            <button className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
              Cookie Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter; 
