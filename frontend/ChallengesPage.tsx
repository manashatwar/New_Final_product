import React from 'react';
    
    interface ChallengesPageProps {
      onPlayClick: () => void;
    }
    
    function ChallengesPage({ onPlayClick }: ChallengesPageProps) {
      return (
        <div className="flex flex-col h-full">
          {/* Header Section */}
          <div className="p-6">
            <h1 className="text-4xl font-bold text-white-smoke mb-2">Chess - Play learn and Bet</h1>
            <p className="text-gray-400 text-sm mb-4">Chess.com</p>
            <div className="flex space-x-4 mb-4">
              <div className="bg-gray-800 rounded-lg p-2 flex flex-col items-center">
                <span className="text-white-smoke text-xl font-bold">4.7<span className="text-gray-400">★</span></span>
                <span className="text-gray-400 text-xs">2.42M reviews</span>
              </div>
              <div className="bg-gray-800 rounded-lg p-2 flex flex-col items-center">
                <span className="text-white-smoke text-xl font-bold">50M+</span>
                <span className="text-gray-400 text-xs">Downloads</span>
              </div>
              <div className="bg-gray-800 rounded-lg p-2 flex flex-col items-center">
                <span className="text-white-smoke text-xl font-bold">3+</span>
                <span className="text-gray-400 text-xs">Rated for 3+</span>
              </div>
            </div>
            <button onClick={onPlayClick} className="bg-green-500 text-white-smoke font-bold py-3 px-6 rounded-lg flex items-center space-x-2">
              <span>▶</span>
              <span>Play</span>
            </button>
          </div>
    
          {/* Description Section */}
          <div className="px-6 text-gray-400 text-xs mb-4">
            Google Play Games beta is required to install this game on Windows. By downloading the beta and the game, you agree to the <a href="/" className="text-blue-500">Google Terms of Service</a> and <a href="/" className="text-blue-500">Google Play Terms of Service</a>. <a href="/" className="text-blue-500">Learn more</a>.
          </div>
    
          {/* Game Screen */}
          <div className="flex-1 px-6">
            <div className="w-full h-full bg-gray-700 rounded-lg flex flex-col">
              <div className="flex-1">
                {/* Placeholder for the Chess Board Image */}
                <div className="w-full h-full bg-gray-800 rounded-lg flex items-center justify-center text-gray-500">
                  {/* Placeholder Image */}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    
    export default ChallengesPage;
