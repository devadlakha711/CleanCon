import React, { useState } from 'react';
import { 
  CogIcon, 
  BellIcon, 
  GiftIcon, 
  TrophyIcon, 
  MapPinIcon,
  EnvelopeIcon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon
} from '@heroicons/react/24/outline';
import { userProfile } from '../data/mockData';
import ProfileCard from '../components/ProfileCard';

const Profile = () => {
  const [notifications, setNotifications] = useState(true);
  const [theme, setTheme] = useState('light');
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState(userProfile);

  const handleSave = () => {
    setIsEditing(false);
    console.log('Profile updated:', profileData);
  };

  const handleLogout = () => {
    console.log('User logged out');
    alert('You have been logged out successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">My Profile</h1>
          <p className="text-lg text-gray-600">
            Manage your account and track your environmental impact
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Basic Info Card */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Profile Information</h2>
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="text-primary-600 hover:text-primary-700 font-medium"
                >
                  {isEditing ? 'Cancel' : 'Edit'}
                </button>
              </div>

              <div className="flex items-center space-x-6 mb-6">
                <img
                  src={profileData.profileImage}
                  alt="Profile"
                  className="h-20 w-20 rounded-full object-cover"
                />
                <div className="flex-1">
                  {isEditing ? (
                    <div className="space-y-3">
                      <input
                        type="text"
                        value={profileData.name}
                        onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                      <input
                        type="email"
                        value={profileData.email}
                        onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                      <input
                        type="text"
                        value={profileData.city}
                        onChange={(e) => setProfileData({...profileData, city: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                    </div>
                  ) : (
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{profileData.name}</h3>
                      <p className="text-gray-600 flex items-center mt-1">
                        <EnvelopeIcon className="h-4 w-4 mr-1" />
                        {profileData.email}
                      </p>
                      <p className="text-gray-600 flex items-center mt-1">
                        <MapPinIcon className="h-4 w-4 mr-1" />
                        {profileData.city}
                      </p>
                      <div className="mt-2">
                        <span className="inline-block bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">
                          {profileData.level}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {isEditing && (
                <div className="flex justify-end">
                  <button
                    onClick={handleSave}
                    className="bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 transition-colors duration-200"
                  >
                    Save Changes
                  </button>
                </div>
              )}
            </div>

            {/* Stats */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">My Impact</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">{profileData.points}</div>
                  <div className="text-green-700">Total Points</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">{profileData.drivesJoined}</div>
                  <div className="text-blue-700">Drives Joined</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">{profileData.drivesOrganized}</div>
                  <div className="text-purple-700">Drives Organized</div>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Achievements</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {profileData.achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center p-4 bg-yellow-50 rounded-lg">
                    <div className="text-3xl mr-4">{achievement.icon}</div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{achievement.name}</h3>
                      <p className="text-sm text-gray-600">{achievement.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Settings */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Settings</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <BellIcon className="h-5 w-5 text-gray-400 mr-3" />
                    <span className="text-gray-700">Notifications</span>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={notifications}
                      onChange={(e) => setNotifications(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <CogIcon className="h-5 w-5 text-gray-400 mr-3" />
                    <span className="text-gray-700">Theme</span>
                  </div>
                  <select
                    value={theme}
                    onChange={(e) => setTheme(e.target.value)}
                    className="px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                    <option value="auto">Auto</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Linked Accounts */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Linked Accounts</h2>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
                      G
                    </div>
                    <span className="text-gray-700">Google Account</span>
                  </div>
                  <span className="text-green-600 text-sm">Connected</span>
                </div>
                <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
                      f
                    </div>
                    <span className="text-gray-700">Facebook Account</span>
                  </div>
                  <button className="text-primary-600 text-sm hover:text-primary-700">Connect</button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Redeemable Coupons */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <GiftIcon className="h-5 w-5 mr-2" />
                Redeemable Coupons
              </h3>
              <div className="space-y-3">
                {profileData.coupons.map((coupon, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-3">
                    <h4 className="font-medium text-gray-900">{coupon.name}</h4>
                    <p className="text-sm text-gray-600">Code: {coupon.code}</p>
                    <p className="text-xs text-gray-500">Expires: {coupon.expiry}</p>
                    <button className="mt-2 text-xs bg-primary-600 text-white px-3 py-1 rounded hover:bg-primary-700">
                      Use Now
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <a
                  href="/start-drive"
                  className="flex items-center p-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                >
                  <span>Start New Drive</span>
                </a>
                <a
                  href="/drive-status"
                  className="flex items-center p-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                >
                  <span>Find Drives</span>
                </a>
                <a
                  href="/leaderboard"
                  className="flex items-center p-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                >
                  <TrophyIcon className="h-4 w-4 mr-2" />
                  <span>View Leaderboard</span>
                </a>
              </div>
            </div>

            {/* Logout */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <button
                onClick={handleLogout}
                className="w-full flex items-center justify-center p-3 text-danger-600 hover:bg-danger-50 rounded-lg transition-colors duration-200"
              >
                <ArrowRightOnRectangleIcon className="h-5 w-5 mr-2" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile; 
