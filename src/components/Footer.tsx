import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black bg-opacity-80 py-12 px-6 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © 2025 Thugz App. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-gray-300 transition text-sm">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-gray-300 transition text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-gray-300 transition text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};