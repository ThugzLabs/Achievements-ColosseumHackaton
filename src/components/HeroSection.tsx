import React from 'react';

export const HeroSection: React.FC = () => {
  return (
    <section className="pt-16 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Your Gaming <span className="glow-text text-purple-400">Legacy</span><br />
              Forever <span className="text-blue-400">Immortalized</span>
            </h1>
            <p className="text-gray-400 text-lg mb-8 max-w-lg">
              Showcase your gaming achievements across all platforms in one unified profile.
              Create your ultimate gaming legacy.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-500 rounded-md text-white font-medium hover:from-purple-700 hover:to-blue-600 transition-all">
                Explore Achievements
              </button>
              <button className="px-8 py-3 border border-purple-400 text-purple-400 rounded-md font-medium hover:bg-purple-400 hover:bg-opacity-10 transition-all">
                How It Works
              </button>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-purple-900 to-blue-900 rounded-full flex items-center justify-center">
                <div className="w-56 h-56 md:w-72 md:h-72 bg-gradient-to-br from-purple-800 to-blue-800 rounded-full flex items-center justify-center">
                  <div className="w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-purple-700 to-blue-700 rounded-full flex items-center justify-center overflow-hidden group relative">
                    <img 
                      src="https://images.pexels.com/photos/2156/sky-earth-space-working.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                      alt="Player Profile" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-white text-sm font-medium">Change Photo</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-900 px-4 py-2 rounded-full border border-gray-700 shadow-lg">
                <span className="text-purple-400 font-medium">Name</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};