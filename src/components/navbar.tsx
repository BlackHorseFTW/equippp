import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center justify-between h-24 w-full px-4 md:px-16 bg-white relative z-50 font-sans">
      <div className="flex items-center">
        <img src="https://i.ibb.co/z7ybd7J/image.png" alt="Logo" className="h-16 w-16" />
      </div>
      <button 
        className="md:hidden text-2xl bg-transparent border-none cursor-pointer z-10" 
        onClick={toggleMenu}
      >
        ☰
      </button>
      <div className={`flex flex-col md:flex-row md:items-center pt-3 md:justify-center space-y-2 md:space-y-0 md:space-x-6 ${isOpen ? 'absolute top-full left-0 right-0 bg-white shadow-md py-4' : 'hidden'} md:relative md:flex`}>
        <button className="bg-transparent border-none text-base font-bold py-2 px-5">Home</button>
        <button className="bg-transparent border-none text-base font-bold py-2 px-5">About</button>
        <button className="bg-transparent border-none text-base font-bold py-2 px-5">Suggest Project</button>
        <button className="bg-transparent border-none text-base font-bold py-2 px-5">FAQ</button>
      </div>
      <button  className="hidden md:block bg-white text-black mt-3 py-3 px-9 rounded-full text-base"
  style={{ border: '2px solid rgba(239, 239, 240)' }}>Sign In</button>
      {isOpen && (
        <button className="md:hidden bg-white text-black border border-gray border-opacity-15 py-2 px-5 rounded-full text-base mt-2 w-[121px] h-[45px] mx-auto">
        Sign In
      </button>
      )}

      
    </nav>
  );
};

export default Navbar;