import React, { useState } from 'react';
import {ReactComponent as Logo} from '../assets/images/logo.svg'

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative flex items-center justify-between h-24 w-full px-4 md:px-16 bg-white z-50 font-sans">
      <div className="flex items-center">
        < Logo className="h-16 w-16" />
      </div>
      <div className="flex items-center flex-1">
        <div className="hidden md:flex md:justify-center md:flex-1 space-x-6 mt-4 ">
          <button className="bg-transparent border-none text-base font-semibold py-2 px-8">Home</button>
          <button className="bg-transparent border-none text-base font-semibold py-2 px-8">About</button>
          <button className="bg-transparent border-none text-base font-semibold py-2 px-8">FAQ</button>
        </div>
        <button 
          className="absolute right-4 md:hidden text-2xl bg-transparent border-none cursor-pointer z-10"
          onClick={toggleMenu}
        >
          ☰
        </button>
        <button className="hidden font-semibold md:block bg-white text-black mt-3 py-3 px-9 rounded-full text-base" style={{ border: '2px solid rgba(239, 239, 240)' }}>
          Login
        </button>
        {isOpen && (
          <div className="md:hidden absolute top-24 right-0 w-full bg-white shadow-md py-4">
            <div className="flex flex-col items-center space-y-2 mt-2">
              <button className="bg-transparent border-none text-base font-semibold py-2 px-5">Home</button>
              <button className="bg-transparent border-none text-base font-semibold py-2 px-5">About</button>
              <button className="bg-transparent border-none text-base font-semibold py-2 px-5">FAQ</button>
              <button className="bg-white font-semibold text-black border border-gray border-opacity-15 py-2 px-5 rounded-full text-base mt-2 w-[121px] h-[45px] mx-auto">
               Login 
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
