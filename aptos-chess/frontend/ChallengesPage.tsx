import React from 'react';
    import { RefreshCcw } from 'lucide-react';
    
    interface ChallengesPageProps {
      betAmount: string;
      setBetAmount: (amount: string) => void;
      profitAmount: string;
      setProfitAmount: (amount: string) => void;
      isAutoMode: boolean;
      toggleMode: () => void;
      numberOfBets: string;
      setNumberOfBets: (amount: string) => void;
      increaseOnWin: string;
      setIncreaseOnWin: (amount: string) => void;
      increaseOnLoss: string;
      setIncreaseOnLoss: (amount: string) => void;
      stopOnProfit: string;
      setStopOnProfit: (amount: string) => void;
      stopOnLoss: string;
      setStopOnLoss: (amount: string) => void;
      handleBetAmountFocus: () => void;
      handleBetAmountBlur: () => void;
      handleProfitAmountFocus: () => void;
      handleProfitAmountBlur: () => void;
      handleStopOnProfitFocus: () => void;
      handleStopOnProfitBlur: () => void;
      handleStopOnLossFocus: () => void;
      handleStopOnLossBlur: () => void;
      handleNumberOfBetsFocus: () => void;
      handleNumberOfBetsBlur: () => void;
      handleIncreaseOnWinFocus: () => void;
      handleIncreaseOnWinBlur: () => void;
      handleIncreaseOnLossFocus: () => void;
      handleIncreaseOnLossBlur: () => void;
      resetAutoBetSettings: () => void;
      resetIncreaseOnWin: () => void;
      resetIncreaseOnLoss: () => void;
      handleHalfBetAmount: () => void;
      handleDoubleBetAmount: () => void;
    }
    
    function ChallengesPage({
      betAmount,
      setBetAmount,
      profitAmount,
      setProfitAmount,
      isAutoMode,
      toggleMode,
      numberOfBets,
      setNumberOfBets,
      increaseOnWin,
      setIncreaseOnWin,
      increaseOnLoss,
      setIncreaseOnLoss,
      stopOnProfit,
      setStopOnProfit,
      stopOnLoss,
      setStopOnLoss,
      handleBetAmountFocus,
      handleBetAmountBlur,
      handleProfitAmountFocus,
      handleProfitAmountBlur,
      handleStopOnProfitFocus,
      handleStopOnProfitBlur,
      handleStopOnLossFocus,
      handleStopOnLossBlur,
      handleNumberOfBetsFocus,
      handleNumberOfBetsBlur,
      handleIncreaseOnWinFocus,
      handleIncreaseOnWinBlur,
      handleIncreaseOnLossFocus,
      handleIncreaseOnLossBlur,
      resetAutoBetSettings,
      resetIncreaseOnWin,
      resetIncreaseOnLoss,
      handleHalfBetAmount,
      handleDoubleBetAmount,
    }: ChallengesPageProps) {
      return (
        <div className="flex gap-6 h-full">
          {/* Left Side Betting Interface */}
          <div className="w-[300px] bg-gunmetal rounded-lg p-4 flex flex-col">
            {/* Mode Toggle */}
            <div className="flex rounded-lg overflow-hidden bg-black mb-6">
              <button 
                className={`flex-1 px-4 py-2 ${!isAutoMode ? 'bg-beaver text-white-smoke' : 'text-gray-400'} transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-[#00640033]`}
                onClick={toggleMode}
              >
                Manual
              </button>
              <button 
                className={`flex-1 px-4 py-2 ${isAutoMode ? 'bg-beaver text-white-smoke' : 'text-gray-400'} transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-[#00640033]`}
                onClick={toggleMode}
              >
                Auto
              </button>
              {isAutoMode && (
                <button 
                  className="px-2 text-gray-400 hover:text-white-smoke transition-colors"
                  onClick={resetAutoBetSettings}
                >
                  <RefreshCcw size={16} />
                </button>
              )}
            </div>
    
            {/* Bet Amount */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <label className="text-gray-400">Bet Amount</label>
                <span className="text-gray-400">$0.00</span>
              </div>
              <div className="relative">
                <input 
                  type="text" 
                  value={betAmount}
                  onChange={(e) => setBetAmount(e.target.value)}
                  onFocus={handleBetAmountFocus}
                  onBlur={handleBetAmountBlur}
                  className="w-full bg-black rounded p-3 text-white-smoke text-lg"
                />
                <div className="absolute right-2 top-1/2 -translate-y-1/2 flex space-x-1">
                  <button onClick={handleHalfBetAmount} className="px-3 py-1.5 bg-walnut-brown rounded text-sm hover:bg-beaver transition-colors">½</button>
                  <button onClick={handleDoubleBetAmount} className="px-3 py-1.5 bg-walnut-brown rounded text-sm hover:bg-beaver transition-colors">2×</button>
                </div>
              </div>
            </div>
    
            {isAutoMode && (
              <>
                {/* Number of Bets */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-gray-400">Number of Bets</label>
                    <span className="text-gray-400">∞</span>
                  </div>
                  <input 
                    type="text" 
                    value={numberOfBets}
                    onChange={(e) => setNumberOfBets(e.target.value)}
                    onFocus={handleNumberOfBetsFocus}
                    onBlur={handleNumberOfBetsBlur}
                    className="w-full bg-black rounded p-3 text-white-smoke text-lg"
                  />
                </div>
    
                {/* On Win */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-gray-400">On Win</label>
                  </div>
                  <div className="flex items-center space-x-2 bg-black rounded p-3">
                    <button onClick={resetIncreaseOnWin} className="px-3 py-1.5 bg-walnut-brown rounded text-sm hover:bg-beaver transition-colors">Reset</button>
                    <label className="text-gray-400">Increase by:</label>
                    <div className="relative">
                      <input 
                        type="text" 
                        value={increaseOnWin}
                        onChange={(e) => setIncreaseOnWin(e.target.value)}
                        onFocus={handleIncreaseOnWinFocus}
                        onBlur={handleIncreaseOnWinBlur}
                        className="w-16 bg-gunmetal rounded p-2 text-white-smoke text-sm"
                      />
                      <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400">%</span>
                    </div>
                  </div>
                </div>
    
                {/* On Loss */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-gray-400">On Loss</label>
                  </div>
                  <div className="flex items-center space-x-2 bg-black rounded p-3">
                    <button onClick={resetIncreaseOnLoss} className="px-3 py-1.5 bg-walnut-brown rounded text-sm hover:bg-beaver transition-colors">Reset</button>
                    <label className="text-gray-400">Increase by:</label>
                    <div className="relative">
                      <input 
                        type="text" 
                        value={increaseOnLoss}
                        onChange={(e) => setIncreaseOnLoss(e.target.value)}
                        onFocus={handleIncreaseOnLossFocus}
                        onBlur={handleIncreaseOnLossBlur}
                        className="w-16 bg-gunmetal rounded p-2 text-white-smoke text-sm"
                      />
                      <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400">%</span>
                    </div>
                  </div>
                </div>
    
                {/* Stop on Profit */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-gray-400">Stop on Profit</label>
                    <span className="text-gray-400">$0.00</span>
                  </div>
                  <input 
                    type="text" 
                    value={stopOnProfit}
                    onChange={(e) => setStopOnProfit(e.target.value)}
                    onFocus={handleStopOnProfitFocus}
                    onBlur={handleStopOnProfitBlur}
                    className="w-full bg-black rounded p-3 text-white-smoke text-lg"
                  />
                </div>
    
                {/* Stop on Loss */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-gray-400">Stop on Loss</label>
                    <span className="text-gray-400">$0.00</span>
                  </div>
                  <input 
                    type="text" 
                    value={stopOnLoss}
                    onChange={(e) => setStopOnLoss(e.target.value)}
                    onFocus={handleStopOnLossFocus}
                    onBlur={handleStopOnLossBlur}
                    className="w-full bg-black rounded p-3 text-white-smoke text-lg"
                  />
                </div>
              </>
            )}
    
            {!isAutoMode && (
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-gray-400">Profit on Win</label>
                  <span className="text-gray-400">$0.00</span>
                </div>
                <input 
                  type="text" 
                  value={profitAmount}
                  onChange={(e) => setProfitAmount(e.target.value)}
                  onFocus={handleProfitAmountFocus}
                  onBlur={handleProfitAmountBlur}
                  className="w-full bg-black rounded p-3 text-white-smoke text-lg"
                />
              </div>
            )}
    
            {/* Spacer to push button to bottom */}
            <div className="flex-grow"></div>
    
            {/* Bet Button */}
            <button className="w-full bg-beaver text-white-smoke font-bold text-xl py-4 rounded-lg hover:bg-walnut-brown transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-[#00640033] mb-4">
              {isAutoMode ? 'Start Autobet' : 'PLACE BET'}
            </button>
          </div>
    
          {/* Game Screen */}
          <div className="flex-1">
            <div className="w-full h-full bg-gunmetal rounded-lg"></div>
          </div>
        </div>
      );
    }
    
    export default ChallengesPage;
