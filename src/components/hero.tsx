import React from 'react';
import framePng from '../assets/images/Frame.png';
import { ReactComponent as FrameSvg } from '../assets/images/frame.svg';
import { ReactComponent as Dashboard } from '../assets/images/image 1.svg';

const Hero: React.FC = () => {
  return (
    <section className="relative pb-12 px-4 md:px-8 lg:px-12 font-sans">
      <div className="relative bg-cover bg-center pt-[40px] pb-[80px] rounded-[20px] max-w-[100vw] mx-auto">
        <div className="absolute inset-0 bg-cover bg-center rounded-[20px] z-[-1]">
          <img 
            src={framePng} 
            alt="Background" 
            className="block lg:hidden w-full h-[600px] object-cover rounded-[25px]"
            style={{ 
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          <FrameSvg 
            className="hidden lg:block w-full lg:h-[800px] h-[600px] object-cover"
            style={{ 
              height: '800px',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
        </div>
        <div className="relative container mx-auto flex flex-col items-center text-white pt-4 lg:pt-[65px]">
          <h1 className="text-lg md:text-xl mt-[20px] lg:text-4xl font-bold text-center max-w-[90%] md:max-w-3xl lg:max-w-6xl mb-6">
            SOCIAL PROJECTS EXECUTION MADE EASY THROUGH CROSS SECTOR PARTNERSHIPS
          </h1>

          <p className="text-sm md:text-sm lg:text-base text-center max-w-[90%] md:max-w-3xl lg:max-w-6xl pt-2 md:pt-4 lg:pt-[14px]">
            EquiPPP™ is a collaborative platform that vitalizes crowd participation in Public-Private Projects and connects Corporates,
          </p>
          <p className="text-sm md:text-sm lg:text-base mb-6 md:mb-8 lg:mb-10 text-center max-w-[90%] md:max-w-3xl lg:max-w-6xl">
            Citizens, Domain Experts, NGOs and Philanthropists with the Government to Initiate and Participate together in socially relevant projects.
          </p>
          <div className="flex gap-4 mb-12 md:mb-16 lg:mb-20">
            <button className="bg-white text-black font-semibold py-2 px-6 md:py-3 md:px-8 lg:py-3 lg:px-9 rounded-full hover:bg-opacity-90 transition duration-300 text-base md:text-lg lg:text-lg">
              View Projects
            </button>
            <button className="bg-transparent border-2 border-white text-white font-semibold py-2 px-6 md:py-3 md:px-8 lg:py-3 lg:px-9 rounded-full hover:bg-opacity-10 transition duration-300 text-base md:text-lg lg:text-lg">
              Suggest Project
            </button>
          </div>
        </div>
      </div>

      <div className="relative w-full mx-auto mt-[-50px] sm:mt-[-150px] md:mt-[-250px] lg:mt-[-90px]">
        <Dashboard className="w-full h-auto rounded-lg" />
      </div>
    </section>
  );
};

export default Hero;
