import React from 'react';
import PlayerDNACard from './PlayerDnaCard';

export const GamerCard: React.FC = () => {
  const stats = [
    { value: '1,247', label: 'TOTAL ACHIEVEMENTS', color: 'text-purple-400' },
    { value: '87', label: 'GAMES PLAYED', color: 'text-blue-400' },
    { value: '23', label: 'PLATINUM TROPHIES', color: 'text-pink-400' },
    { value: '1,856', label: 'HOURS PLAYED', color: 'text-yellow-400' },
    { value: 'TOP 5%', label: 'GLOBAL RANK', color: 'text-green-400' },
    { value: '2020', label: 'MEMBER SINCE', color: 'text-red-400' },
  ];

  return (
    <div className="mt-8 gamer-card rounded-xl p-6 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex justify-center">
          <div className="w-full max-w-xs aspect-[4/3] bg-gray-800 rounded-lg border-2 border-dashed border-gray-600 flex items-center justify-center">
            <PlayerDNACard />
          </div>
        </div>
        <div className="md:col-span-2">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-gray-800 bg-opacity-50 p-4 rounded-lg border border-gray-700">
                <div className={`text-2xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};