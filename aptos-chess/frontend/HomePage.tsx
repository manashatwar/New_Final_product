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
                  Orchestrating the Web3 Economy
                </h1>
                <p className="text-xl text-almond mb-8">
                  Build feature-rich applications that seamlessly manage assets and services across multiple blockchains.
                </p>
                <div className="flex items-center space-x-4">
                  <button className="bg-walnut-brown hover:bg-khaki text-white font-bold py-3 px-6 rounded">
                    Get Early Access
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
                  The world is going multi-chain
                </h2>
                <p className="text-lg text-almond mb-8">
                  Users are increasingly exploring multi-chain solutions to solve their problems. Orchestration gives
                  developers the platform to program those solutions, and access to the Total Reachable Value of the entire
                  interchain ecosystem.
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
                <h3 className="text-2xl font-semibold text-almond mb-2 mt-4">For Users</h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  Enjoy frictionless, one-click interactions across multiple chains, unlocking chain abstraction and
                  enhancing the Web3 user experience.
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
                  Leverage cross-chain programmability and multi-block execution to build next-gen applications that
                  transcend isolated blockchains.
                </p>
                <a href="/" className="text-blue-500 hover:text-blue-700 font-semibold flex items-center mt-auto">
                  Learn more 
                </a>
              </div>
            </div>
          </section>
    
          {/* Key Orchestration Features Section */}
          <section className="container mx-auto mt-24 px-5">
            <h2 className="text-4xl font-extrabold text-almond mb-8">Key Orchestration Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-khaki">
              {/* Async & Multi-Block */}
              <div className="bg-white rounded-lg shadow-md p-6">
                {/* Placeholder for the Async Image */}
                <div className="h-48 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 mb-4">
                  Placeholder Image
                </div>
                <h3 className="text-2xl font-semibold text-almond mb-2">Async & Multi-Block</h3>
                <p className="text-gray-600 mb-4">
                  Support for long-lived processes that operate across chains without immediate execution in the same block.
                </p>
              </div>
    
              {/* Timers */}
              <div className="bg-white rounded-lg shadow-md p-6">
                {/* Placeholder for the Timers Image */}
                <div className="h-48 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 mb-4">
                  Placeholder Image
                </div>
                <h3 className="text-2xl font-semibold text-almond mb-2">Timers</h3>
                <p className="text-gray-600 mb-4">
                  Enable autonomous future actions, fitting seamlessly into Agoric's asynchronous architecture.
                </p>
              </div>
    
              {/* Interoperability */}
              <div className="bg-white rounded-lg shadow-md p-6">
                {/* Placeholder for the Interoperability Image */}
                <div className="h-48 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 mb-4">
                  Placeholder Image
                </div>
                <h3 className="text-2xl font-semibold text-almond mb-2">Interoperability</h3>
                <p className="text-gray-600 mb-4">
                  Native IBC and Axelar GMP support, ensuring seamless liquidity and multi-chain applications.
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
                  Enjoy personalized, white-glove technical and marketing support designed to help you navigate and succeed
                  on our platform.
                </p>
                <button className="bg-walnut-brown hover:bg-khaki text-white font-bold py-3 px-6 rounded">
                  Apply Today
                </button>
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-xl font-semibold text-almond mb-2">How we support your developer journey:</h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>White-Glove Support</li>
                  <li>Financial Incentives</li>
                  <li>Early Preview</li>
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
                  View Complete Roadmap 
                </a>
              </div>
              <div>
                <ul className="text-gray-600">
                  <li>Q3 2021 - Security Audit Kickoff</li>
                  <li>Q1 2022 - Complete BLD Token Distribution</li>
                  <li>Q2 2022 - Mainnet-1 - Inter Protocol Preview Release</li>
                  <li>Q4 2022 - Beta Program</li>
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
                <h2 className="text-2xl font-bold text-almond mb-4">Subscribe to our newsletter for updates</h2>
                <input type="email" placeholder="Email address" className="border border-gray-300 rounded-md px-4 py-2 text-gray-700 mr-4"/>
                <button className="bg-walnut-brown hover:bg-khaki text-white font-bold py-2 px-4 rounded">Subscribe</button>
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
                  <p>Made with ❤️ by games</p>
                </div>
              </div>
            </div>
          </footer>
        </div>
      );
    }
    
    export default HomePage;
