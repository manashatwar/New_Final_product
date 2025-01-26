import React, { useState, useRef, useEffect } from 'react';
    import { RefreshCcw, MessageSquare } from 'lucide-react';
import ChessBoard from './ChessBoard';
    
    interface StakeOriginalsProps {
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
    
    function StakeOriginals({
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
    }: StakeOriginalsProps) {
      const bettingRef = useRef<HTMLDivElement>(null);
      const [bettingHeight, setBettingHeight] = useState(0);
    
      useEffect(() => {
        if (bettingRef.current) {
          setBettingHeight(bettingRef.current.offsetHeight);
        }
      }, []);
    
      return (
        <div className="flex gap-6 h-full overflow-y-auto">
          {/* Left Side Betting Interface */}
          <div ref={bettingRef} className="w-[300px] bg-gunmetal rounded-lg p-4 flex flex-col">
            {/* Mode Toggle */}
            <div className="flex rounded-lg overflow-hidden bg-black mb-6 relative">
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
              <button className="px-2 text-gray-400 hover:text-white-smoke transition-colors">
                <MessageSquare size={16} />
              </button>
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
          <div className="flex-1 flex flex-col">
            <div style={{ height: `${bettingHeight}px` }} className="w-full bg-gunmetal rounded-lg mb-4">
            <div className="App">
      <ChessBoard />
    </div>
            </div>
            <div className="w-full bg-gunmetal rounded-lg p-4">
              <div className="flex items-start justify-between mb-4">
                <div className="flex flex-col">
                  <h2 className="text-white-smoke text-xl font-bold">Chess <span className="text-gray-400 text-sm"> Have Fun</span></h2>
                  <div className="flex items-center space-x-2">
                   
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                 
                  <button className="text-gray-400 hover:text-white-smoke">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="flex space-x-2 mb-4">
              
                <button className="bg-gray-700 rounded-md px-3 py-1 text-white-smoke text-sm">Description</button>
              </div>
              <div className="flex space-x-4">
                <div className="bg-gray-800 rounded-lg p-4 w-48 h-48 flex items-center justify-center">
                  <div className="flex flex-col items-center">
                    <div className="text-white-smoke text-4xl font-bold">DICE</div>
                    <div className="text-gray-400 text-xs">STAKE ORIGINALS</div>
                  </div>
                </div>
                <div className="flex flex-col flex-1">
                  <p className="text-gray-400 text-sm mb-4">
                    Dice is a Stake Original casino game and is a simple game of chance with easy-to-understand betting mechanics for players to bet Bitcoin and other supported cryptocurrencies on the Stake casino .
                  </p>
                  <p className="text-gray-400 text-sm mb-4">
                    Take your gambling further with our highly customisable settings for both single play and auto-betting.
                  </p>
                  <p className="text-gray-400 text-sm mb-4">
                    With so many different configurations available, you can be assured that Dice caters for any type of crypto casino player!
                  </p>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Unlike other dice games such as Craps or Sic Bo, Dice on Stake.com is a virtual throw of a 100-sided dice and is very easy to pick up.
              </p>
              <p className="text-gray-400 text-sm mb-4">
                With betting games like dice online, the concept is simple and the possibilities are endless with a variety of betting options available to players to help manage their bankroll and implement dice betting strategies to their gameplay.
              </p>
              <p className="text-gray-400 text-sm mb-4">
                Similar to other Stake Original games such as Plinko , HiLo , Crash , Wheel and Limbo , players can control how volatile betting volatility and payouts are as well as auto betting options to manage adjustments based on profit and loss. Every Stake Original game is provably fair, ensuring that our most popular game is Dice is a fun and fair online gambling experience with a 99% Return to Player (RTP) and only a 1% House Edge!
              </p>
              <h3 className="text-white-smoke text-lg font-bold mb-4">Guide to Betting Dice Online on Stake.com</h3>
              <p className="text-gray-400 text-sm mb-4">
                Dice is a foundational game on the <span className="text-white-smoke">Stake online casino betting platform</span> since 2017. With a virtual 100-side dice to roll, players can set the Roll Over/Roll Under amount which acts as a target for players to hit and win a round - controlling the Multiplier and Win Chance during a virtual roll of the dice in a betting round.
              </p>
              <p className="text-gray-400 text-sm mb-4">
                As the name implies, if players are in Roll Over mode, the aim is for the dice to hit the value higher than the Roll Over amount. For Roll Under it is vice versa - the game aims to roll a winning number lower than the Roll Under amount.
              </p>
            </div>
          </div>
        </div>
      );
    }
    
    export default StakeOriginals;
