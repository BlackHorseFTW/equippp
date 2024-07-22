import React from 'react';
import macbookview from '../assets/images/MacBook-Pro-16.png';

const Macbook: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden font-sans mt-[-40px]">
      <div className="relative md:h-[80%] md:w-[80%] lg:w-[70%] lg:h-[70%] flex items-center justify-center">
        <img 
          src={macbookview} 
          alt="Macbook View"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Macbook;
