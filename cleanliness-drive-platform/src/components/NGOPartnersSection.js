import React from 'react';

const NGOPartnersSection = ({ partners }) => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
        Our Partners
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
          >
            {/* Logo/Icon */}
            <div className="text-4xl mb-3">
              {partner.logo}
            </div>
            
            {/* Partner Name */}
            <h3 className="text-sm font-medium text-gray-700 text-center leading-tight">
              {partner.name}
            </h3>
          </div>
        ))}
      </div>

      {/* Partner Stats */}
      <div className="mt-12 bg-primary-50 rounded-lg p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-2xl font-bold text-primary-600 mb-2">50+</div>
            <div className="text-primary-700">Partner Organizations</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-primary-600 mb-2">25</div>
            <div className="text-primary-700">Cities Covered</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-primary-600 mb-2">100K+</div>
            <div className="text-primary-700">People Reached</div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-8 text-center">
        <p className="text-gray-600 mb-4">
          Want to partner with us? Join our network of environmental champions.
        </p>
        <button className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors duration-200 font-medium">
          Become a Partner
        </button>
      </div>
    </div>
  );
};

export default NGOPartnersSection; 
