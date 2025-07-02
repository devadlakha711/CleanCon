import React from 'react';
import { MapPinIcon } from '@heroicons/react/24/solid';

const LeaderboardTable = ({ data }) => {
  const getRankIcon = (rank) => {
    switch (rank) {
      case 1:
        return '🏆';
      case 2:
        return '🥈';
      case 3:
        return '🥉';
      default:
        return null;
    }
  };

  const getRankColor = (rank) => {
    switch (rank) {
      case 1:
        return 'bg-yellow-50 text-yellow-800';
      case 2:
        return 'bg-gray-50 text-gray-800';
      case 3:
        return 'bg-orange-50 text-orange-800';
      default:
        return 'bg-white text-gray-900';
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Rank
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Volunteer
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              City
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Points
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Achievement
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((user) => (
            <tr key={user.rank} className={`hover:bg-gray-50 transition-colors duration-200 ${getRankColor(user.rank)}`}>
              {/* Rank */}
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <span className="text-2xl mr-2">{getRankIcon(user.rank)}</span>
                  <span className="text-lg font-semibold">#{user.rank}</span>
                </div>
              </td>

              {/* Name */}
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10">
                    <div className="h-10 w-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold">
                      {user.name.charAt(0)}
                    </div>
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">
                      {user.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      Environmental Champion
                    </div>
                  </div>
                </div>
              </td>

              {/* City */}
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center text-sm text-gray-900">
                  <MapPinIcon className="h-4 w-4 mr-1 text-gray-400" />
                  {user.city}
                </div>
              </td>

              {/* Points */}
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-semibold text-gray-900">
                  {user.points.toLocaleString()}
                </div>
                <div className="text-xs text-gray-500">
                  points
                </div>
              </td>

              {/* Achievement Badge */}
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                  user.rank <= 3
                    ? 'bg-green-100 text-green-800'
                    : user.rank <= 10
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  {user.rank <= 3 ? 'Top Performer' : user.rank <= 10 ? 'Star Volunteer' : 'Active Member'}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Mobile View */}
      <div className="md:hidden">
        {data.map((user) => (
          <div key={user.rank} className={`p-4 border-b border-gray-200 ${getRankColor(user.rank)}`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="text-xl mr-2">{getRankIcon(user.rank)}</span>
                <div>
                  <div className="font-semibold text-gray-900">#{user.rank} {user.name}</div>
                  <div className="text-sm text-gray-600 flex items-center">
                    <MapPinIcon className="h-3 w-3 mr-1" />
                    {user.city}
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-semibold text-gray-900">{user.points.toLocaleString()}</div>
                <div className="text-xs text-gray-500">points</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeaderboardTable; 
