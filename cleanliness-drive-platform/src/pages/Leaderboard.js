import React, { useState } from 'react';
import { TrophyIcon, StarIcon } from '@heroicons/react/24/solid';
import { leaderboardData } from '../data/mockData';
import LeaderboardTable from '../components/LeaderboardTable';

const Leaderboard = () => {
  const [selectedCity, setSelectedCity] = useState('');
  const [timeRange, setTimeRange] = useState('all');

  const cities = ['All Cities', ...new Set(leaderboardData.map(user => user.city))];

  const filteredData = leaderboardData.filter(user => {
    if (selectedCity && selectedCity !== 'All Cities') {
      return user.city === selectedCity;
    }
    return true;
  });

  const topThree = filteredData.slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            <TrophyIcon className="inline-block h-10 w-10 text-yellow-500 mr-2" />
            Leaderboard
          </h1>
          <p className="text-lg text-gray-600">
            Celebrating our top environmental champions
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Filter by City
              </label>
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                {cities.map(city => (
                  <option key={city} value={city === 'All Cities' ? '' : city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Time Range
              </label>
              <select
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="all">All Time</option>
                <option value="month">This Month</option>
                <option value="quarter">This Quarter</option>
                <option value="year">This Year</option>
              </select>
            </div>
          </div>
        </div>

        {/* Top 3 Podium */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">Top Champions</h2>
          <div className="flex justify-center items-end space-x-4">
            {/* 2nd Place */}
            {topThree[1] && (
              <div className="text-center">
                <div className="bg-gray-300 text-white p-6 rounded-lg mb-4 transform scale-90">
                  <div className="text-2xl font-bold">#{topThree[1].rank}</div>
                  <div className="text-4xl mb-2">🥈</div>
                  <div className="font-semibold">{topThree[1].name}</div>
                  <div className="text-sm opacity-75">{topThree[1].city}</div>
                  <div className="text-lg font-bold mt-2">{topThree[1].points} pts</div>
                </div>
              </div>
            )}

            {/* 1st Place */}
            {topThree[0] && (
              <div className="text-center">
                <div className="bg-yellow-400 text-white p-8 rounded-lg mb-4 transform scale-110 shadow-lg">
                  <div className="text-3xl font-bold">#{topThree[0].rank}</div>
                  <div className="text-6xl mb-2">🏆</div>
                  <div className="font-bold text-lg">{topThree[0].name}</div>
                  <div className="text-sm opacity-75">{topThree[0].city}</div>
                  <div className="text-xl font-bold mt-2">{topThree[0].points} pts</div>
                </div>
              </div>
            )}

            {/* 3rd Place */}
            {topThree[2] && (
              <div className="text-center">
                <div className="bg-orange-400 text-white p-6 rounded-lg mb-4 transform scale-90">
                  <div className="text-2xl font-bold">#{topThree[2].rank}</div>
                  <div className="text-4xl mb-2">🥉</div>
                  <div className="font-semibold">{topThree[2].name}</div>
                  <div className="text-sm opacity-75">{topThree[2].city}</div>
                  <div className="text-lg font-bold mt-2">{topThree[2].points} pts</div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Full Leaderboard Table */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Complete Rankings</h3>
          </div>
          <LeaderboardTable data={filteredData} />
        </div>

        {/* Points System Info */}
        <div className="mt-8 bg-primary-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-primary-800 mb-4">How Points Work</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-primary-700">
            <div className="flex items-center">
              <StarIcon className="h-5 w-5 mr-2" />
              <span>Joining a drive: 100 points</span>
            </div>
            <div className="flex items-center">
              <StarIcon className="h-5 w-5 mr-2" />
              <span>Organizing a drive: 500 points</span>
            </div>
            <div className="flex items-center">
              <StarIcon className="h-5 w-5 mr-2" />
              <span>Completing drive goals: +50% bonus</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard; 
