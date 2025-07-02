import React from 'react';
import { Link } from 'react-router-dom';
import { PlayIcon } from '@heroicons/react/24/solid';
import { testimonials, partnerLogos, galleryImages } from '../data/mockData';
import GalleryCarousel from '../components/GalleryCarousel';
import TestimonialBlock from '../components/TestimonialBlock';
import NGOPartnersSection from '../components/NGOPartnersSection';
import ContactFooter from '../components/ContactFooter';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              🧼 CleanDrive Platform
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Empowering communities to create cleaner, healthier environments through 
              organized cleanup drives and sustainable initiatives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/start-drive"
                className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                Start a Drive
              </Link>
              <Link
                to="/drive-status"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors duration-200"
              >
                Join a Drive
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      {/* Mission Statement */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            To build a sustainable future by connecting passionate individuals and organizations 
            in meaningful environmental action. Through our platform, we facilitate seamless 
            coordination of cleanup drives, promote community engagement, and track collective 
            impact towards a cleaner planet.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-primary-600 mb-2">500+</div>
              <div className="text-gray-600">Drives Organized</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-primary-600 mb-2">15,000+</div>
              <div className="text-gray-600">Volunteers</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-primary-600 mb-2">50+</div>
              <div className="text-gray-600">Cities</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-primary-600 mb-2">2M kg</div>
              <div className="text-gray-600">Waste Collected</div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Drives in Action
          </h2>
          <GalleryCarousel images={galleryImages} />
        </div>
      </div>

      {/* Video Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">See Our Impact</h2>
          <div className="relative bg-gray-300 rounded-lg overflow-hidden aspect-video">
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-primary-600 text-white p-4 rounded-full hover:bg-primary-700 transition-colors duration-200">
                <PlayIcon className="h-8 w-8" />
              </button>
            </div>
            <div className="absolute bottom-4 left-4 text-white font-semibold">
              CleanDrive Impact Video 2024
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What Our Community Says
          </h2>
          <TestimonialBlock testimonials={testimonials} />
        </div>
      </div>

      {/* Partner Organizations */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <NGOPartnersSection partners={partnerLogos} />
        </div>
      </div>

      {/* Contact Footer */}
      <ContactFooter />
    </div>
  );
};

export default Home; 
