import React from 'react';
import { ReactComponent as EquipppLogo } from '../assets/images/logo.svg';

const Contact: React.FC = () => {
  return (
    <footer className="bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between py-6 border-t border-gray-300">
        <div className="flex items-center md:mb-0">
          <EquipppLogo className="w-[91px] h-[93px] mb-10" />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-end w-full ">
          <div className="text-center md:text-left mb-4 md:mb-0 md:ml-10 lg:mr-20">
            <h3 className="font-bold mb-4">About Us</h3>
            <ul className="space-y-4 text-gray-700">
              <li><a href="/talk-to-us" className="hover:underline">Talk to us</a></li>
              <li><a href="/mission" className="hover:underline">Mission</a></li>
              <li><a href="/vision" className="hover:underline">Vision</a></li>
              <li><a href="/terms-and-conditions" className="hover:underline">Terms & Conditions</a></li>
            </ul>
          </div>
          <div className="text-center md:text-left mb-4 md:mb-0 md:ml-10 md:mr-10">
            <h3 className="font-bold mb-4">Social Links</h3>
            <ul className="space-y-4 text-gray-700">
              <li><a href="https://linkedin.com" className="hover:underline">Linkedin</a></li>
              <li><a href="https://facebook.com" className="hover:underline">Facebook</a></li>
              <li><a href="https://instagram.com" className="hover:underline">Instagram</a></li>
              <li><a href="https://twitter.com" className="hover:underline">Twitter (X)</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mt-[-44px] mx-auto px-4 mb-14">
        <div className="text-md text-gray-500 text-center md:text-left">
          Copyright © EQUIPPP Social Impact Technologies | Powered by <span className="font-bold text-gray-700">EQUIPPP</span>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
