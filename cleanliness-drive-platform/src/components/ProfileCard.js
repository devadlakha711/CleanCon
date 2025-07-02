import React from 'react';
import { 
  MapPinIcon, 
  EnvelopeIcon, 
  TrophyIcon,
  UserGroupIcon,
  CalendarIcon
} from '@heroicons/react/24/outline';

const ProfileCard = ({ user }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      {/* Profile Header */}
      <div className="flex items-center space-x-4 mb-6">
        <img
          src={user.profileImage}
          alt={user.name}
          className="h-16 w-16 rounded-full object-cover"
        />
        <div className="flex-1">
          <h2 className="text-xl font-semibold text-gray-900">{user.name}</h2>
          <p className="text-gray-600 flex items-center">
            <EnvelopeIcon className="h-4 w-4 mr-1" />
            {user.email}
          </p>
          <p className="text-gray-600 flex items-center">
            <MapPinIcon className="h-4 w-4 mr-1" />
            {user.city}
          </p>
        </div>
        <div className="text-right">
          <span className="inline-block bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">
            {user.level}
          </span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="text-center">
          <div className="text-2xl font-bold text-primary-600">{user.points}</div>
          <div className="text-xs text-gray-600">Points</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-green-600">{user.drivesJoined}</div>
          <div className="text-xs text-gray-600">Drives Joined</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-600">{user.drivesOrganized}</div>
          <div className="text-xs text-gray-600">Drives Organized</div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-900 mb-3">Recent Activity</h3>
        <div className="space-y-2">
          <div className="flex items-center text-sm text-gray-600">
            <UserGroupIcon className="h-4 w-4 mr-2 text-green-500" />
            <span>Joined Beach Cleanup Drive</span>
            <span className="ml-auto text-xs">2 days ago</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <TrophyIcon className="h-4 w-4 mr-2 text-yellow-500" />
            <span>Earned "Team Player" badge</span>
            <span className="ml-auto text-xs">1 week ago</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <CalendarIcon className="h-4 w-4 mr-2 text-blue-500" />
            <span>Organized Park Cleanup</span>
            <span className="ml-auto text-xs">2 weeks ago</span>
          </div>
        </div>
      </div>

      {/* Progress to Next Level */}
      <div>
        <h3 className="text-sm font-medium text-gray-900 mb-2">Progress to Next Level</h3>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-primary-600 h-2 rounded-full"
            style={{ width: '75%' }}
          ></div>
        </div>
        <p className="text-xs text-gray-600 mt-1">750/1000 points to "Eco Master"</p>
      </div>
    </div>
  );
};

export default ProfileCard; 
