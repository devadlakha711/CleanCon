import React from 'react';
import { Link } from 'react-router-dom';
import { MapPinIcon, CalendarIcon, UserGroupIcon, ClockIcon } from '@heroicons/react/24/outline';

const DriveCard = ({ drive }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
      {/* Drive Image */}
      <div className="h-48 bg-gray-200 relative">
        <img
          src={drive.poster}
          alt={drive.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
            drive.status === 'Upcoming' 
              ? 'bg-green-100 text-green-800'
              : drive.status === 'Completed'
              ? 'bg-gray-100 text-gray-800'
              : 'bg-blue-100 text-blue-800'
          }`}>
            {drive.status}
          </span>
        </div>
        <div className="absolute top-3 left-3">
          <span className="bg-primary-600 text-white px-2 py-1 rounded-full text-xs font-medium">
            {drive.category}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
          {drive.title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {drive.description}
        </p>

        {/* Drive Details */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <MapPinIcon className="h-4 w-4 mr-2 flex-shrink-0" />
            <span className="truncate">{drive.location}</span>
            <span className="ml-auto text-primary-600 font-medium">{drive.distance}</span>
          </div>
          
          <div className="flex items-center text-sm text-gray-600">
            <CalendarIcon className="h-4 w-4 mr-2 flex-shrink-0" />
            <span>{new Date(drive.date).toLocaleDateString()}</span>
            <ClockIcon className="h-4 w-4 ml-4 mr-1 flex-shrink-0" />
            <span>{drive.time}</span>
          </div>
          
          <div className="flex items-center text-sm text-gray-600">
            <UserGroupIcon className="h-4 w-4 mr-2 flex-shrink-0" />
            <span>{drive.volunteers.length}/{drive.maxVolunteers} volunteers</span>
          </div>
        </div>

        {/* Organizer */}
        <div className="mb-4">
          <p className="text-xs text-gray-500">Organized by</p>
          <p className="text-sm font-medium text-gray-700">{drive.organizer}</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-4">
          <div className="flex justify-between text-xs text-gray-600 mb-1">
            <span>Volunteers</span>
            <span>{Math.round((drive.volunteers.length / drive.maxVolunteers) * 100)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-primary-600 h-2 rounded-full"
              style={{ width: `${(drive.volunteers.length / drive.maxVolunteers) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex space-x-2">
          <Link
            to={`/drive/${drive.id}`}
            className="flex-1 bg-primary-600 text-white text-center py-2 px-4 rounded-md hover:bg-primary-700 transition-colors duration-200 text-sm font-medium"
          >
            View Details
          </Link>
          <button className="flex-1 border border-primary-600 text-primary-600 py-2 px-4 rounded-md hover:bg-primary-50 transition-colors duration-200 text-sm font-medium">
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default DriveCard; 
