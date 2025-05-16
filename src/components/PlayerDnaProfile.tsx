import { Dna } from 'lucide-react';
import React from 'react';
import { GamerCard } from './GamerCard';

// Mock scores for the four PCSR axes (0–100)
const mockScores = {
  completion: 85,
  story: 70,
  challenge: 60,
  build: 75,
};

export const PlayerDnaProfile: React.FC = () => {
  return (
    <section className="py-12 px-6 bg-gray-900 bg-opacity-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 flex items-center">
          <span className="mr-3">
            <Dna className="text-purple-400" size={24} />
          </span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            PLAYER DNA PROFILE
          </span>
        </h2>

        {/* Gamer Card */}
        <GamerCard />

        {/* PCSR Dashboard Bars */}
        <div className="bg-gray-800 bg-opacity-60 rounded-xl p-6 border border-gray-700 mb-8">
          <h3 className="text-lg font-semibold text-gray-200 mb-4">PCSR TRAITS</h3>
          <div className="space-y-4">
            {/* Completion Bar */}
            <div>
              <div className="flex justify-between text-gray-300 text-sm mb-1">
                <span>Completion</span>
                <span>{mockScores.completion}%</span>
              </div>
              <div className="w-full bg-gray-700 h-3 rounded-full overflow-hidden">
                <div
                  className="h-3 rounded-full bg-gradient-to-r from-teal-400 to-purple-400"
                  style={{ width: `${mockScores.completion}%` }}
                ></div>
              </div>
            </div>

            {/* Story Bar */}
            <div>
              <div className="flex justify-between text-gray-300 text-sm mb-1">
                <span>Story</span>
                <span>{mockScores.story}%</span>
              </div>
              <div className="w-full bg-gray-700 h-3 rounded-full overflow-hidden">
                <div
                  className="h-3 rounded-full bg-gradient-to-r from-purple-400 to-blue-400"
                  style={{ width: `${mockScores.story}%` }}
                ></div>
              </div>
            </div>

            {/* Challenge Bar */}
            <div>
              <div className="flex justify-between text-gray-300 text-sm mb-1">
                <span>Challenge</span>
                <span>{mockScores.challenge}%</span>
              </div>
              <div className="w-full bg-gray-700 h-3 rounded-full overflow-hidden">
                <div
                  className="h-3 rounded-full bg-gradient-to-r from-pink-400 to-purple-400"
                  style={{ width: `${mockScores.challenge}%` }}
                ></div>
              </div>
            </div>

            {/* Build Bar */}
            <div>
              <div className="flex justify-between text-gray-300 text-sm mb-1">
                <span>Build</span>
                <span>{mockScores.build}%</span>
              </div>
              <div className="w-full bg-gray-700 h-3 rounded-full overflow-hidden">
                <div
                  className="h-3 rounded-full bg-gradient-to-r from-purple-400 to-teal-400"
                  style={{ width: `${mockScores.build}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-800 bg-opacity-60 rounded-xl p-6 border border-gray-700  mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start">
            
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-900 bg-opacity-70 p-4 rounded-lg border-l-4 border-purple-400">
                <h4 className="text-gray-400 text-sm mb-1">PLAYER ARCHETYPE</h4>
                <p className="text-xl font-bold text-purple-400">Completionist</p>
                <p className="text-gray-400 text-sm mt-2">You leave no stone unturned and no achievement unlocked.</p>
              </div>
              
              <div className="bg-gray-900 bg-opacity-70 p-4 rounded-lg border-l-4 border-blue-400">
                <h4 className="text-gray-400 text-sm mb-1">TOP GENRE</h4>
                <p className="text-xl font-bold text-blue-400">RPG</p>
                <p className="text-gray-400 text-sm mt-2">83% of your achievements come from role-playing games.</p>
              </div>
              
              <div className="bg-gray-900 bg-opacity-70 p-4 rounded-lg border-l-4 border-pink-500">
                <h4 className="text-gray-400 text-sm mb-1">RARITY SCORE</h4>
                <p className="text-xl font-bold text-pink-400">8.7/10</p>
                <div className="w-full bg-gray-700 h-2 mt-2 rounded-full">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{ width: '87%' }}></div>
                </div>
              </div>
              
              <div className="bg-gray-900 bg-opacity-70 p-4 rounded-lg border-l-4 border-yellow-400">
                <h4 className="text-gray-400 text-sm mb-1">MOST PLAYED</h4>
                <p className="text-xl font-bold text-yellow-400">The Witcher 3</p>
                <p className="text-gray-400 text-sm mt-2">156 hours logged, 47/50 achievements</p>
              </div>
              
              <div className="bg-gray-900 bg-opacity-70 p-4 rounded-lg border-l-4 border-green-400">
                <h4 className="text-gray-400 text-sm mb-1">COMPLETION RATE</h4>
                <p className="text-xl font-bold text-green-400">64%</p>
                <p className="text-gray-400 text-sm mt-2">Higher than 92% of players</p>
              </div>
              
              <div className="bg-gray-900 bg-opacity-70 p-4 rounded-lg border-l-4 border-red-400">
                <h4 className="text-gray-400 text-sm mb-1">RECENT ACTIVITY</h4>
                <p className="text-xl font-bold text-red-400">Elden Ring</p>
                <p className="text-gray-400 text-sm mt-2">Unlocked "Legend" achievement 2 days ago</p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};