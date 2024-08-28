import React from 'react';
import { FaApple, FaGooglePlay } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 md:py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Get to Know Us</h3>
        </div>
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Connect with Us</h3>
        </div>
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Make Money with Us</h3>
        </div>
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Let Us Help You</h3>
        </div>
      </div>
      {/* App Download Links */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8 my-6 md:my-8">
        <button className="flex items-center bg-white text-black px-4 py-2 rounded-full hover:bg-slate-200">
          <FaApple className="w-10 h-10 md:w-12 md:h-12 mr-2" />
          <p className="text-md font-bold">
            Download on the <span className="block text-xl md:text-3xl">App Store</span>
          </p>
        </button>
        <button className="flex items-center rounded-full bg-white text-black px-4 py-2 hover:bg-slate-200">
          <FaGooglePlay className="w-8 h-8 md:w-10 md:h-10 mr-2" />
          <p className="text-md font-bold">
            Get it on <span className="block text-xl md:text-3xl">Google Play</span>
          </p>
        </button>
      </div>
      {/* Copyright Section */}
      <div className="text-center bg-white text-black py-2">
        <p className="text-lg md:text-3xl font-bold">
          Copyright © 2024 | Powered by markletechandmedia.com
        </p>
      </div>
    </footer>
  );
};

export default Footer;
