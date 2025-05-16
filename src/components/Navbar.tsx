import { Trophy } from 'lucide-react';
import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <nav className="bg-black/80 backdrop-blur-md py-4 px-6 sticky top-0 z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-500 rounded-md flex items-center justify-center">
            <Trophy className="text-white" size={20} />
          </div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            THUGZ APP
          </span>
        </div>
        
        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-purple-400 font-medium">Profile</a>
          <a href="#" className="text-purple-400 font-medium">Dashboard</a>
        </div>
        
        <button className="px-6 py-2 bg-green-600 rounded-md text-white font-medium hover:bg-green-700 transition-all">
          <span className="flex items-center">
            <span className="w-2 h-2 rounded-full"></span>
            Connect
          </span>
        </button>
      </div>
    </nav>
  );
};