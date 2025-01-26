import React from 'react';
    import './index.css'
    function HomePage() {
      return (
        <div className="font-sans">
        {/* Hero Section */}
          <section className="container mx-auto mt-12 px-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h1 className="text-5xl font-extrabold text-almond mb-4">
                  Master the Game  Win the Rewards
                    Play chess like never before—where skill meets crypto rewards.

                </h1>
                <p className="text-xl text-almond mb-8">
                 Experience the thrill of competitive chess with real stakes. Bet with cryptocurrency and win big!
                </p>
                <div className="flex items-center space-x-4">
                  <button className="bg-walnut-brown hover:bg-khaki text-white font-bold py-3 px-6 rounded">
                    Play and Earn Now
                  </button>
                  <a href="/" className="text-blue-500 hover:text-blue-700 font-semibold flex items-center">
                    Learn More 
                  </a>
                </div>
              </div>
              <div>
                {/* Spline Animation */}
                <div className="w-full  h-80 rounded-lg z-index =-1">
                <iframe src='https://my.spline.design/chibiknightanimation-0964268b1a0fb4b14fbb7c5f5220a6db/?embed=true' frameBorder='0' width='100%' height='100%'></iframe>
                </div>
              </div>
            </div>
          </section>
    
          {/* "The world is going multi-chain" Section */}
          <section className="container mx-auto mt-24 px-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                {/* Placeholder for the Multi-Chain Image */}
                <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
                  Placeholder Image
                </div>
              </div>
              <div>
                <h2 className="text-4xl font-extrabold text-almond mb-4">
                The Ultimate Chess Arena
                </h2>
                <p className="text-lg text-almond mb-8">
                 "Secure, Fast, Crypto-Powered."
                </p>
                <div className="flex items-center space-x-8">
                  <div>
                    <div className="text-3xl font-bold text-almond">59B+</div>
                    <div className="text-gray-600">IBC Market Cap</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-almond">230K</div>
                    <div className="text-gray-600">IBC DAU</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
    
          {/* Logos Section */}
          <section className="container mx-auto mt-16 px-5">
            <div className="overflow-hidden my-12 py-8 border-t border-b border-gray-300 relative" style={{ height: '12rem' }}>
              <div className="flex items-center justify-around whitespace-nowrap animate-scroll-logos absolute left-0 top-0" style={{ gap: '2rem' }}>
                {/* Placeholder Logos */}
                <div className="h-32 w-64 bg-gray-200 rounded-xl flex flex-col items-center justify-center text-gray-500"><div className="mb-2">Logo 1</div><div className="text-sm font-bold mt-2 text-center">Devdock</div></div>
                <div className="h-32 w-64 bg-gray-200 rounded-xl flex flex-col items-center justify-center text-gray-500"><div className="mb-2">Logo 2</div><div className="text-sm font-bold mt-2 text-center">Aptos</div></div>
                <div className="h-32 w-64 bg-gray-200 rounded-xl flex flex-col items-center justify-center text-gray-500"><div className="mb-2">Logo 3</div><div className="text-sm font-bold mt-2 text-center">Educhain</div></div>
                <div className="h-32 w-64 bg-gray-200 rounded-xl flex flex-col items-center justify-center text-gray-500"><div className="mb-2">Logo 4</div><div className="text-sm font-bold mt-2 text-center">LNMHackes</div></div>
                <div className="h-32 w-64 bg-gray-200 rounded-xl flex flex-col items-center justify-center text-gray-500"><div className="mb-2">Logo 1</div><div className="text-sm font-bold mt-2 text-center">Devdock</div></div>
                <div className="h-32 w-64 bg-gray-200 rounded-xl flex flex-col items-center justify-center text-gray-500"><div className="mb-2">Logo 2</div><div className="text-sm font-bold mt-2 text-center">Aptos</div></div>
                <div className="h-32 w-64 bg-gray-200 rounded-xl flex flex-col items-center justify-center text-gray-500"><div className="mb-2">Logo 3</div><div className="text-sm font-bold mt-2 text-center">Educhain</div></div>
                <div className="h-32 w-64 bg-gray-200 rounded-xl flex flex-col items-center justify-center text-gray-500"><div className="mb-2">Logo 4</div><div className="text-sm font-bold mt-2 text-center">LNMHackes</div></div>
              </div>
            </div>
          </section>
    
          {/* "Empowering Seamless Interactions" Section */}
          <section className="container mx-auto mt-24 px-5">
            <h2 className="text-4xl font-extrabold text-almond mb-8 text-center">
              Empowering Seamless Interactions and Advanced Development
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* For Users */}
              <div className="bg-white rounded-lg shadow-md p-6 flex flex-col">
                {/* Placeholder for the User Image */}
                <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 mb-4">
                  Placeholder Image
                </div>
                <h3 className="text-2xl font-semibold text-almond mb-2 mt-4">For Players</h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  Experience the thrill of competitive chess in a modern, blockchain-powered ecosystem. Compete, win, and earn crypto rewards in a secure and seamless environment.
                </p>
                <a href="/" className="text-blue-500 hover:text-blue-700 font-semibold flex items-center mt-auto">
                  Learn more 
                </a>
              </div>
    
              {/* For Developers */}
              <div className="bg-white rounded-lg shadow-md p-6 flex flex-col">
                <div className="flex justify-end">
                  <div className="w-1/2 h-1 bg-gray-200 rounded-full"></div>
                </div>
    
                {/* Placeholder for the Developer Image */}
                <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 mb-4">
                  Placeholder Image
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">For Developers</h3>
                <p className="text-gray-600 mb-4">
                  Unlock the potential of blockchain gaming. Build next-gen chess tournaments, automate payouts, and engage players with smart contract technology.
                </p>
                <a href="/" className="text-blue-500 hover:text-blue-700 font-semibold flex items-center mt-auto">
                  Learn more 
                </a>
              </div>
            </div>
          </section>
    
          {/* Key Orchestration Features Section */}
          <section className="container mx-auto mt-24 px-5">
            <h2 className="text-4xl font-extrabold text-almond mb-8">Key Features for Chess Champions
</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-khaki">
              {/* Async & Multi-Block */}
              <div className="bg-white rounded-lg shadow-md p-6">
                {/* Placeholder for the Async Image */}
                <div className="h-48 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 mb-4">
                  Placeholder Image
                </div>
                <h3 className="text-2xl font-semibold text-almond mb-2">Secure Transactions</h3>
                <p className="text-gray-600 mb-4">
                  Play with confidence. Your crypto assets are securely handled with blockchain-backed technology ensuring safe, instant payouts.
                </p>
              </div>
    
              {/* Timers */}
              <div className="bg-white rounded-lg shadow-md p-6">
                {/* Placeholder for the Timers Image */}
                <div className="h-48 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 mb-4">
                  Placeholder Image
                </div>
                <h3 className="text-2xl font-semibold text-almond mb-2">Skill-Based Gameplay</h3>
                <p className="text-gray-600 mb-4">
                  Prove your skills in high-stakes chess matches. Every game is fair, transparent, and rewarding for the best players.
                </p>
              </div>
    
              {/* Interoperability */}
              <div className="bg-white rounded-lg shadow-md p-6">
                {/* Placeholder for the Interoperability Image */}
                <div className="h-48 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 mb-4">
                  Placeholder Image
                </div>
                <h3 className="text-2xl font-semibold text-almond mb-2">Global Connectivity</h3>
                <p className="text-gray-600 mb-4">
                 Compete with chess enthusiasts from around the globe. The blockchain ecosystem connects players across borders seamlessly.
                </p>
              </div>
            </div>
          </section>
    
          {/* Apply for Early Access Section */}
          <section className="container mx-auto mt-24 px-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-4xl font-extrabold text-almond mb-4">
                 Apply for the Early Access Program
                </h2>
                <p className="text-gray-600 mb-4">
                  Be among the first to experience chess redefined. Exclusive benefits include early access tournaments, personalized support, and exciting rewards
                </p>
                <button className="bg-walnut-brown hover:bg-khaki text-white font-bold py-3 px-6 rounded">
                  Apply Today
                </button>
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-xl font-semibold text-almond mb-2"></h3>
                <ul className="list-disc list-inside text-gray-600">
                  
                </ul>
    
              </div>
            </div>
          </section>
    
          {/* Roadmap & Progress Section */}
          <section className="container mx-auto mt-24 px-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col justify-center">
                <h2 className="text-4xl font-extrabold text-almond mb-4">Roadmap & Progress</h2>
                <a href="/" className="text-blue-500 hover:text-blue-700 font-semibold flex items-center">
                 Join us on this journey to revolutionize competitive chess. From secure blockchain implementation to advanced chess features, the future of gaming is here.
                </a>
              </div>
              <div>
                <ul className="text-gray-600">
                </ul>
              </div>
            </div>
          </section>
    
          {/* Join the Community Section */}
          <section className="py-12 mt-24">
            <div className="container mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Join the community</h2>
              <p className="text-white">Join our active community of builders and partners</p>
              {/* Social Media Icons Placeholder */}
              <div className="mt-4">
                <a href="/" className="text-white hover:text-gray-200 mx-2">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="/" className="text-white hover:text-gray-200 mx-2">
                  <i className="fab fa-telegram"></i>
                </a>
                <a href="/" className="text-white hover:text-gray-200 mx-2">
                  <i className="fab fa-discord"></i>
                </a>
                <a href="/" className="text-white hover:text-gray-200 mx-2">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="/" className="text-white hover:text-gray-200 mx-2">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </section>
    
          {/* Subscribe to our newsletter */}
          <section className="container mx-auto mt-16 px-5">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-left">
                <h2 className="text-2xl font-bold text-almond mb-4"></h2>
                <input type="email" placeholder="Email address" className="border border-gray-300 rounded-md px-4 py-2 text-gray-700 mr-4"/>
                <button className="bg-walnut-brown hover:bg-khaki text-white font-bold py-2 px-4 rounded"></button>
              </div>
              <div className="text-right hidden md:flex space-x-8">
                <div>
                  <h4 className="text-almond font-semibold">BUILD</h4>
                  <ul className="text-gray-600">
                    <li>Developers</li>
                    <li>Validators</li>
                    <li>Documentation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-almond font-semibold">ENGAGE</h4>
                  <ul className="text-gray-600">
                    <li>Wallets</li>
                    <li>Vote</li>
                    <li>Explorer</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-almond font-semibold">RESOURCES</h4>
                  <ul className="text-gray-600">
                    <li>Economy</li>
                    <li>Tech</li>
                    <li>Security</li>
                    <li>Whitepaper</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-almond font-semibold">COMPANY</h4>
                  <ul className="text-gray-600">
                    <li>Team</li>
                    <li>Careers</li>
                    <li>Media Kit</li>
                    <li>Contact</li>
                    <li>Terms</li>
                    <li>Privacy Policy</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
    
          {/* Footer */}
          <footer className="bg-black text-white py-8">
            <div className="container mx-auto text-center">
              <div className="flex justify-between items-center">
                <div className="text-left">
                  <p>&copy; {new Date().getFullYear()} Agoric Systems Operating Company. All Rights Reserved.</p>
                  <p>info@agoric.com  (650) 747-2332</p>
                </div>
                <div className="text-right">
                  <p>Made with ❤️ for chess lovers and crypto enthusiasts</p>
                </div>
              </div>
            </div>
          </footer>
        </div>
      );
    }
    
    export default HomePage;
