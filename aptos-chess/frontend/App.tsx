
//     export default App;
import React, { useState } from 'react';
import { useWallet } from "@aptos-labs/wallet-adapter-react";
// Internal Components
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { WalletDetails } from "@/components/WalletDetails";
import { NetworkInfo } from "@/components/NetworkInfo";
import { AccountInfo } from "@/components/AccountInfo";
import { TransferAPT } from "@/components/TransferAPT";
import { MessageBoard } from "@/components/MessageBoard";
    import { Menu, Home, Star, Clock, Trophy, Gamepad2, Tv2, Rocket, Car as Cards, Dice1 as Dice, ChevronUp, ChevronDown, RotateCcw, Settings, RefreshCcw, X, Eye, EyeOff, Facebook, MessageSquare, Twitch, Circle, ChevronLeft, Calendar } from 'lucide-react';
    import './index.css';
    import HomePage from './HomePage';
    import ChallengesPage from './ChallengesPage';
    import StakeOriginals from './StakeOriginals';
    import LiveCasino from './LiveCasino';
    
    function App() {
      const { connected } = useWallet();
      const [betAmount, setBetAmount] = useState('0.00000000');
      const [profitAmount, setProfitAmount] = useState('0.00000000');
      const [isSidebarOpen, setIsSidebarOpen] = useState(true);
      const [isAutoMode, setIsAutoMode] = useState(false);
      const [numberOfBets, setNumberOfBets] = useState('0');
      const [increaseOnWin, setIncreaseOnWin] = useState('0');
      const [increaseOnLoss, setIncreaseOnLoss] = useState('0');
      const [stopOnProfit, setStopOnProfit] = useState('0.00000000');
      const [stopOnLoss, setStopOnLoss] = useState('0.00000000');
      const [isSignInOpen, setIsSignInOpen] = useState(false);
      const [isRegisterOpen, setIsRegisterOpen] = useState(false);
      const [passwordVisible, setPasswordVisible] = useState(false);
      const [registerStep, setRegisterStep] = useState(1);
      const [termsAgreed, setTermsAgreed] = useState(false);
      const [showPhoneInput, setShowPhoneInput] = useState(false);
      const [showCodeInput, setShowCodeInput] = useState(false);
      const [showDatePicker, setShowDatePicker] = useState(false);
      const [emailInput, setEmailInput] = useState('');
      const [usernameInput, setUsernameInput] = useState('');
      const [passwordInput, setPasswordInput] = useState('');
      const [dateOfBirthInput, setDateOfBirthInput] = useState('');
      const [emailAsterisk, setEmailAsterisk] = useState(true);
      const [usernameAsterisk, setUsernameAsterisk] = useState(true);
      const [passwordAsterisk, setPasswordAsterisk] = useState(true);
      const [dateOfBirthAsterisk, setDateOfBirthAsterisk] = useState(true);
      const [signInEmailAsterisk, setSignInEmailAsterisk] = useState(true);
      const [signInPasswordAsterisk, setSignInPasswordAsterisk] = useState(true);
      const [isHomePageActive, setIsHomePageActive] = useState(true);
      const [isStakeOriginalsActive, setIsStakeOriginalsActive] = useState(false);
      const [isLiveCasinoActive, setIsLiveCasinoActive] = useState(false);
      const [isSignedIn, setIsSignedIn] = useState(false);
    
      const toggleMode = () => {
        setIsAutoMode(!isAutoMode);
      };
    
      const resetAutoBetSettings = () => {
        setNumberOfBets('0');
        setIncreaseOnWin('0');
        setIncreaseOnLoss('0');
        setStopOnProfit('0.00000000');
        setStopOnLoss('0.00000000');
      };
    
      const openSignIn = () => {
        setIsSignInOpen(true);
      };
    
      const closeSignIn = () => {
        setIsSignInOpen(false);
      };
    
      const handleSignIn = () => {
        setIsSignedIn(true);
        closeSignIn();
      };
    
      const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
      };
    
      const openRegister = () => {
        setIsRegisterOpen(true);
        setRegisterStep(1);
      };
    
      const closeRegister = () => {
        setIsRegisterOpen(false);
      };
    
      const nextRegisterStep = () => {
        setRegisterStep(registerStep + 1);
      };
    
      const prevRegisterStep = () => {
        setRegisterStep(registerStep - 1);
      };
    
      const handleTermsAgreement = () => {
        setTermsAgreed(!termsAgreed);
      };
    
      const handleRegisterToSignIn = () => {
        closeRegister();
        openSignIn();
      };
    
      const togglePhoneInput = () => {
        setShowPhoneInput(!showPhoneInput);
      };
    
      const toggleCodeInput = () => {
        setShowCodeInput(!showCodeInput);
      };
    
      const handleBetAmountFocus = () => {
        if (betAmount === '0.00000000') {
          setBetAmount('');
        }
      };
    
      const handleBetAmountBlur = () => {
        if (betAmount === '') {
          setBetAmount('0.00000000');
        }
      };
    
      const handleProfitAmountFocus = () => {
        if (profitAmount === '0.00000000') {
          setProfitAmount('');
        }
      };
    
      const handleProfitAmountBlur = () => {
        if (profitAmount === '') {
          setProfitAmount('0.00000000');
        }
      };
    
      const handleStopOnProfitFocus = () => {
        if (stopOnProfit === '0.00000000') {
          setStopOnProfit('');
        }
      };
    
      const handleStopOnProfitBlur = () => {
        if (stopOnProfit === '') {
          setStopOnProfit('0.00000000');
        }
      };
    
      const handleStopOnLossFocus = () => {
        if (stopOnLoss === '0.00000000') {
          setStopOnLoss('');
        }
      };
    
      const handleStopOnLossBlur = () => {
        if (stopOnLoss === '') {
          setStopOnLoss('0.00000000');
        }
      };
    
      const handleNumberOfBetsFocus = () => {
        if (numberOfBets === '0') {
          setNumberOfBets('');
        }
      };
    
      const handleNumberOfBetsBlur = () => {
        if (numberOfBets === '') {
          setNumberOfBets('0');
        }
      };
    
      const handleIncreaseOnWinFocus = () => {
        if (increaseOnWin === '0') {
          setIncreaseOnWin('');
        }
      };
    
      const handleIncreaseOnWinBlur = () => {
        if (increaseOnWin === '') {
          setIncreaseOnWin('0');
        }
      };
    
      const handleIncreaseOnLossFocus = () => {
        if (increaseOnLoss === '0') {
          setIncreaseOnLoss('');
        }
      };
    
      const handleIncreaseOnLossBlur = () => {
        if (increaseOnLoss === '') {
          setIncreaseOnLoss('0');
        }
      };
    
      const resetIncreaseOnWin = () => {
        setIncreaseOnWin('0');
      };
    
      const resetIncreaseOnLoss = () => {
        setIncreaseOnLoss('0');
      };
    
      const handleHalfBetAmount = () => {
        setBetAmount((parseFloat(betAmount) / 2).toFixed(8));
      };
    
      const handleDoubleBetAmount = () => {
        setBetAmount((parseFloat(betAmount) * 2).toFixed(8));
      };
    
      const toggleDatePicker = () => {
        setShowDatePicker(!showDatePicker);
      };
    
      const handleDateSelect = (day, month, year) => {
        setSelectedDay(day);
        setSelectedMonth(month);
        setSelectedYear(year);
        setShowDatePicker(false);
      };
    
      const handleEmailChange = (e) => {
        setEmailInput(e.target.value);
        setEmailAsterisk(false);
      };
    
      const handleUsernameChange = (e) => {
        setUsernameInput(e.target.value);
        setUsernameAsterisk(false);
      };
    
      const handlePasswordChange = (e) => {
        setPasswordInput(e.target.value);
        setPasswordAsterisk(false);
      };
    
      const handleDateOfBirthChange = (e) => {
        setDateOfBirthInput(e.target.value);
        setDateOfBirthAsterisk(false);
      };
    
      const handleSignInEmailChange = (e) => {
        setSignInEmailAsterisk(false);
      };
    
      const handleSignInPasswordChange = (e) => {
        setSignInPasswordAsterisk(false);
      };
    
      const handleHomeClick = () => {
        setIsHomePageActive(true);
        setIsStakeOriginalsActive(false);
        setIsLiveCasinoActive(false);
        setIsRegisterOpen(false);
        setIsSignInOpen(false);
      };
    
      const handleOtherPageClick = () => {
        setIsHomePageActive(false);
      };
    
      const handleChallengesClick = () => {
        setIsHomePageActive(false);
        setIsStakeOriginalsActive(false);
        setIsLiveCasinoActive(false);
        setIsRegisterOpen(false);
        setIsSignInOpen(false);
      };
    
      const handleStakeOriginalsClick = () => {
        setIsHomePageActive(false);
        setIsStakeOriginalsActive(true);
        setIsLiveCasinoActive(false);
        setIsRegisterOpen(false);
        setIsSignInOpen(false);
      };
    
      const handleLiveCasinoClick = () => {
        setIsHomePageActive(false);
        setIsStakeOriginalsActive(false);
        setIsLiveCasinoActive(true);
        setIsRegisterOpen(false);
        setIsSignInOpen(false);
      };
    
      const handlePlayClick = () => {
        setIsHomePageActive(false);
        setIsStakeOriginalsActive(true);
        setIsLiveCasinoActive(false);
        setIsRegisterOpen(false);
        setIsSignInOpen(false);
      };
    
      const days = Array.from({ length: 31 }, (_, i) => String(i + 1).padStart(2, '0'));
      const months = Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, '0'));
      const years = Array.from({ length: 100 }, (_, i) => String(new Date().getFullYear() - i));
    
      
      return (
        <div className="min-h-screen bg-black text-white-smoke">
          {/* Header */}
          <header className="bg-gunmetal border-b border-walnut-brown h-16 flex items-center px-4 justify-between">
            <div className="flex items-center space-x-4">
              <Menu 
                size={24} 
                className="text-gray-400 cursor-pointer hover:text-white-smoke transition-colors" 
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              />
              <div className="flex space-x-2">
                <span className="bg-beaver px-4 py-1.5 rounded text-white-smoke">CASINO</span>
               
              </div>
            </div>
            <div className="flex items-center space-x-4">
            <Header />
 <span className="flex items-center justify-center flex-col">
   {connected ? (
     <Card>
    <CardContent className="bg-customBeaver px-4 py-1.5 rounded text-white-smoke">
      <WalletDetails />
        <NetworkInfo />
        <AccountInfo />
         <TransferAPT />
         <MessageBoard />
       </CardContent>
     </Card>
   ) : (
     <CardHeader></CardHeader>
   )}
 </span>
              {!isSignedIn ? (
                <>
                   
                  <button className="px-4 py-1.5 text-gray-300" onClick={openSignIn}>Signin</button>
                  <button className="bg-beaver px-4 py-1.5 rounded text-white-smoke transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-[#00640033]" onClick={openRegister}>Register</button>
                </>
              ) : (
                <span className="text-white-smoke">SignedIn</span>
              )}
            </div>
          </header>
    
          <div className="flex">
            {/* Sidebar */}
            <div className={`${isSidebarOpen ? 'w-64' : 'w-0'} bg-gunmetal min-h-[calc(100vh-4rem)] overflow-hidden transition-all duration-300`}>
              <div className="p-4 space-y-4">
                <div className="flex items-center space-x-2 p-2 hover:bg-black rounded cursor-pointer" onClick={handleHomeClick}>
                  <Home size={20} className="text-gray-400" />
                  <span>Home</span>
                </div>
               
                <div className="flex items-center space-x-2 p-2 hover:bg-black rounded cursor-pointer" onClick={handleChallengesClick}>
                  <Trophy size={20} className="text-gray-400" />
                  <span>Challenges</span>
                </div>
                
                <div className="pt-4 pb-2">
                  <h3 className="text-gray-500 text-sm">Games</h3>
                </div>
                
                <div className="flex items-center space-x-2 p-2 hover:bg-black rounded cursor-pointer" onClick={handleStakeOriginalsClick}>
                  <Gamepad2 size={20} className="text-gray-400" />
                  <span>Bet And Play Now</span>
                </div>
                <div className="flex items-center space-x-2 p-2 hover:bg-black rounded cursor-pointer" onClick={handleLiveCasinoClick}>
                  <Tv2 size={20} className="text-gray-400" />
                  <span>Live Casino</span>
                </div>
                <div className="flex items-center space-x-2 p-2 hover:bg-black rounded cursor-pointer">
                  
                 
                </div>
              </div>
            </div>
    
            {/* Main Content */}
            <div className="flex-1 flex flex-col">
              {/* Game Screen Area */}
              <div className="flex-1 bg-black p-6">
                {isHomePageActive ? (
                  <HomePage />
                ) : isStakeOriginalsActive ? (
                  <StakeOriginals 
                    betAmount={betAmount}
                    setBetAmount={setBetAmount}
                    profitAmount={profitAmount}
                    setProfitAmount={setProfitAmount}
                    isAutoMode={isAutoMode}
                    toggleMode={toggleMode}
                    numberOfBets={numberOfBets}
                    setNumberOfBets={setNumberOfBets}
                    increaseOnWin={increaseOnWin}
                    setIncreaseOnWin={setIncreaseOnWin}
                    increaseOnLoss={increaseOnLoss}
                    setIncreaseOnLoss={setIncreaseOnLoss}
                    stopOnProfit={stopOnProfit}
                    setStopOnProfit={setStopOnProfit}
                    stopOnLoss={stopOnLoss}
                    setStopOnLoss={setStopOnLoss}
                    handleBetAmountFocus={handleBetAmountFocus}
                    handleBetAmountBlur={handleBetAmountBlur}
                    handleProfitAmountFocus={handleProfitAmountFocus}
                    handleProfitAmountBlur={handleProfitAmountBlur}
                    handleStopOnProfitFocus={handleStopOnProfitFocus}
                    handleStopOnProfitBlur={handleStopOnProfitBlur}
                    handleStopOnLossFocus={handleStopOnLossFocus}
                    handleStopOnLossBlur={handleStopOnLossBlur}
                    handleNumberOfBetsFocus={handleNumberOfBetsFocus}
                    handleNumberOfBetsBlur={handleNumberOfBetsBlur}
                    handleIncreaseOnWinFocus={handleIncreaseOnWinFocus}
                    handleIncreaseOnWinBlur={handleIncreaseOnWinBlur}
                    handleIncreaseOnLossFocus={handleIncreaseOnLossFocus}
                    handleIncreaseOnLossBlur={handleIncreaseOnLossBlur}
                    resetAutoBetSettings={resetAutoBetSettings}
                    resetIncreaseOnWin={resetIncreaseOnWin}
                    resetIncreaseOnLoss={resetIncreaseOnLoss}
                    handleHalfBetAmount={handleHalfBetAmount}
                    handleDoubleBetAmount={handleDoubleBetAmount}
                  />
                ) : isLiveCasinoActive ? (
                  <LiveCasino />
                ) : (
                  <ChallengesPage onPlayClick={handlePlayClick} />
                )}
              </div>
    
              {/* Footer Stats */}
              <div className="bg-gunmetal p-4 border-t border-walnut-brown flex justify-between items-center">
                <div className="flex space-x-6">
                  <button className="text-gray-400 hover:text-white-smoke">
                    <Settings size={20} />
                  </button>
                  <button className="text-gray-400 hover:text-white-smoke">
                    <RotateCcw size={20} />
                  </button>
                  <button className="text-gray-400 hover:text-white-smoke">
                    <Dice size={20} />
                  </button>
                </div>
                <div className="text-gray-400">
                  Fairness
                </div>
              </div>
            </div>
          </div>
    
          {/* Sign In Popup */}
          {isSignInOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center backdrop-blur-md">
              <div className="bg-gunmetal rounded-lg p-8 w-[600px] max-h-[80vh] overflow-y-auto">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-white-smoke text-2xl font-bold">Sign In</h2>
                  <button onClick={closeSignIn} className="text-gray-400 hover:text-white-smoke">
                    <X size={20} />
                  </button>
                </div>
                <div className="mb-4">
                  <label className={`block text-gray-400 mb-2 ${signInEmailAsterisk ? 'after:content-["*"] after:text-red-500' : ''}`}>Email or Username</label>
                  <input type="text" className="w-full bg-black rounded p-3 text-white-smoke" onChange={handleSignInEmailChange} />
                </div>
                <div className="mb-6 relative">
                  <label className={`block text-gray-400 mb-2 ${signInPasswordAsterisk ? 'after:content-["*"] after:text-red-500' : ''}`}>Password</label>
                  <input type={passwordVisible ? "text" : "password"} className="w-full bg-black rounded p-3 text-white-smoke pr-10" onChange={handleSignInPasswordChange} />
                </div>
                <button onClick={handleSignIn} className="w-full bg-beaver px-4 py-2 rounded text-white-smoke mb-6 transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-[#00640033]">Sign In</button>
                <div className="text-center text-gray-400 mb-6">
                  <span className="block">OR</span>
                  <div className="flex justify-center space-x-4 mt-4">
                    <button className="bg-[#3b5998] rounded p-2 hover:bg-[#4c6ba1] transition-colors">
                      <Facebook size={20} className="text-white-smoke" />
                    </button>
                    <button className="bg-[#db4437] rounded p-2 hover:bg-[#e36055] transition-colors">
                      <Circle size={20} className="text-white-smoke" />
                    </button>
                    <button className="bg-[#25d366] rounded p-2 hover:bg-[#30e072] transition-colors">
                      <MessageSquare size={20} className="text-white-smoke" />
                    </button>
                    <button className="bg-[#9147ff] rounded p-2 hover:bg-[#a260ff] transition-colors">
                      <Twitch size={20} className="text-white-smoke" />
                    </button>
                  </div>
                </div>
                <div className="text-center text-gray-400">
                  <button className="hover:underline">Forgot Password</button>
                </div>
                <div className="text-center text-gray-400 mt-2">
                  Don't have an account? <button onClick={openRegister} className="text-white-smoke hover:underline">Register an Account</button>
                </div>
              </div>
            </div>
          )}
    
          {/* Register Popup */}
          {isRegisterOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center backdrop-blur-md">
              <div className="bg-gunmetal rounded-lg p-8 w-[600px] max-h-[80vh] overflow-y-auto">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-white-smoke text-2xl font-bold">Create an account</h2>
                  <button onClick={closeRegister} className="text-gray-400 hover:text-white-smoke">
                    <X size={20} />
                  </button>
                </div>
                {registerStep === 1 && (
                  <>
                    <div className="mb-4">
                      <label className={`block text-gray-400 mb-2 ${emailAsterisk ? 'after:content-["*"] after:text-red-500' : ''}`}>Email </label>
                      <input type="text" className="w-full bg-black rounded p-3 text-white-smoke" onChange={handleEmailChange} />
                    </div>
                    <div className="mb-4">
                      <label className={`block text-gray-400 mb-2 ${usernameAsterisk ? 'after:content-["*"] after:text-red-500' : ''}`}>Username</label>
                      <input type="text" className="w-full bg-black rounded p-3 text-white-smoke" onChange={handleUsernameChange} />
                      <p className="text-gray-500 text-sm mt-1">Your username must be 3-14 characters long.</p>
                    </div>
                    <div className="mb-4 relative">
                      <label className={`block text-gray-400 mb-2 ${passwordAsterisk ? 'after:content-["*"] after:text-red-500' : ''}`}>Password </label>
                      <input type={passwordVisible ? "text" : "password"} className="w-full bg-black rounded p-3 text-white-smoke pr-10" onChange={handlePasswordChange} />
                    </div>
                    <div className="mb-4 relative">
                      <label className={`block text-gray-400 mb-2 ${dateOfBirthAsterisk ? 'after:content-["*"] after:text-red-500' : ''}`}>Date of Birth </label>
                      <input type="text" placeholder="dd-mm-yyyy" className="w-full bg-black rounded p-3 text-white-smoke pr-10" onChange={handleDateOfBirthChange} />
                    </div>
                    <div className="mb-4 flex items-center">
                      <input type="checkbox" className="mr-2" onChange={togglePhoneInput} />
                      <label className="text-gray-400">Phone (Optional)</label>
                    </div>
                    {showPhoneInput && (
                      <div className="mb-4">
                        <input type="text" placeholder="Phone Number" className="w-full bg-black rounded p-3 text-white-smoke" />
                      </div>
                    )}
                    <div className="mb-6 flex items-center">
                      <input type="checkbox" className="mr-2" onChange={toggleCodeInput} />
                      <label className="text-gray-400">Code (Optional)</label>
                    </div>
                    {showCodeInput && (
                      <div className="mb-6">
                        <input type="text" placeholder="Code" className="w-full bg-black rounded p-3 text-white-smoke" />
                      </div>
                    )}
                    <button onClick={nextRegisterStep} className="w-full bg-beaver px-4 py-2 rounded text-white-smoke mb-6 transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-[#00640033]">Continue</button>
                  </>
                )}
                {registerStep === 2 && (
                  <>
                    <div className="mb-6">
                      <h3 className="text-white-smoke text-lg font-bold mb-4">Terms and Conditions</h3>
                      <div className="bg-black rounded p-4 text-gray-400 max-h-[300px] overflow-y-auto">
                        <p>
                          <b>1. STAKE.COM</b>
                          <br />
                          1.1 Stake.com is owned and operated by Medium Rare, N.V. (hereinafter "Stake", "We" or "Us"), a company with head office at Korporaalweg 10, Willemstad, Curaçao. Medium Rare N.V. is authorised to offer it's services in accordance with the Certificate of Operation (Application no. OGL/2024/1451/0918) issued by the Curaçao Gaming Control Board. Some credit card payment processing are handled by its wholly owned subsidiary, Medium Rare Limited.
                          <br /><br />
                          <b>2. IMPORTANT NOTICE</b>
                          <br />
                          2.1 By registering on www.stake.com (the “Website”), you enter into a contract with Medium Rare N.V., and agree to be bound by (i) these Terms and Conditions; (ii) our Privacy Policy; (iii) our Cookies Policy and (iv) the rules applicable to our betting or gaming products as further referenced in these Terms and Conditions (“Terms and Conditions” or “Agreement”).
                        </p>
                      </div>
                    </div>
                    <div className="mb-6 flex items-center">
                      <input type="checkbox" className="mr-2" checked={termsAgreed} onChange={handleTermsAgreement} />
                      <label className="text-gray-400">I have read and agree to the terms and conditions</label>
                    </div>
                    <button onClick={handleRegisterToSignIn} className={`w-full bg-beaver px-4 py-2 rounded text-white-smoke mb-6 transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-[#00640033] ${!termsAgreed ? 'opacity-50 shadow-md' : ''}`} disabled={!termsAgreed}>Create an account</button>
                  </>
                )}
                <div className="text-center text-gray-400 mb-6">
                  <span className="block">OR</span>
                  <div className="flex justify-center space-x-4 mt-4">
                    <button className="bg-[#3b5998] rounded p-2 hover:bg-[#4c6ba1] transition-colors">
                      <Facebook size={20} className="text-white-smoke" />
                    </button>
                    <button className="bg-[#db4437] rounded p-2 hover:bg-[#e36055] transition-colors">
                      <Circle size={20} className="text-white-smoke" />
                    </button>
                    <button className="bg-[#25d366] rounded p-2 hover:bg-[#30e072] transition-colors">
                      <MessageSquare size={20} className="text-white-smoke" />
                    </button>
                    <button className="bg-[#9147ff] rounded p-2 hover:bg-[#a260ff] transition-colors">
                      <Twitch size={20} className="text-white-smoke" />
                    </button>
                  </div>
                </div>
                <div className="text-center text-gray-400 mt-2">
                  Already have an account? <button onClick={handleRegisterToSignIn} className="text-white-smoke hover:underline">Sign in</button>
                </div>
              </div>
            </div>
          )}
        </div>
      );
    }
    
    export default App;

