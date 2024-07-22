import React from 'react';
import { ReactComponent as InstagramIcon } from '../assets/icons/instagram.svg';
import { ReactComponent as FacebookIcon } from '../assets/icons/facebook.svg';
import { ReactComponent as TwitterIcon } from '../assets/icons/twitter.svg';
import { ReactComponent as PinterestIcon } from '../assets/icons/pinterest.svg';
import { ReactComponent as EquipppLogo } from '../assets/images/logo.svg';

const Contact: React.FC = () => {
  return (
    <footer className="bg-white py-6 border-t border-gray-300 font-sans">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <EquipppLogo className="w-[82px] h-[82px] mt-10 mb-10 lg:ml-20" />
        </div>
        <div className="flex items-center mb-4 md:mb-0">
          <button className="bg-white border border-gray-300 rounded-full px-8 py-3 text-gray-700 hover:bg-gray-100 lg:mr-16">
            Contact us
          </button>
        </div>
      </div>
      <footer className="bg-white py-6 border-t border-gray-300 font-sans mt-[20px]"></footer>
      <div className="max-w-7xl mx-auto px-4 mb-8 flex flex-col md:flex-row items-center justify-between">
        <div className="text-md text-gray-500 ml-20">
          Copyright © EQUIPPP Social Impact Technologies | Powered by <span className="font-bold text-gray-700">EQUIPPP</span>
        </div>
        <div className="flex space-x-4 mr-16 mt-4 md:mt-0">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <InstagramIcon className="h-6 w-6 text-gray-500 hover:text-gray-700" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FacebookIcon className="h-6 w-6 text-blue-500 hover:text-blue-700" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <TwitterIcon className="h-6 w-6 text-blue-400 hover:text-blue-600" />
          </a>
          <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
            <PinterestIcon className="h-6 w-6 text-red-600 hover:text-red-800" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
