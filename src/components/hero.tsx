import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-2 pb-12 px-4 md:px-8 lg:px-12 font-sans">
      <div className="relative bg-[url('https://i.postimg.cc/7YnMv54w/Frame.png')] bg-cover bg-center pt-[40px] md:pt-[60px] lg:pt-[80px] pb-[80px] md:pb-[120px] lg:pb-[150px] rounded-[20px] md:rounded-[25px] lg:rounded-[30px] max-w-[100vw] h-[800px] mx-auto">
        <div className="absolute inset-0 bg-[url('https://i.postimg.cc/7YnMv54w/Frame.png')] bg-center rounded-[20px] md:rounded-[25px] lg:rounded-[30px] z-[-1]"></div>
        <div className="relative container mx-auto flex flex-col items-center text-white pt-4 md:pt-8 lg:pt-[65px]">
          <h1 className="text-xl md:text-xl lg:text-[2.75rem] font-bold text-center max-w-[90%] md:max-w-3xl lg:max-w-7xl">
            SOCIAL PROJECTS EXECUTION MADE EASY THROUGH 
          </h1>
          <h1 className="text-lg md:text-lg lg:text-[2.75rem] font-bold mb-2 md:mb-4 lg:mb-4 text-center md:mt-4 ">
            CROSS SECTOR PARTNERSHIPS
          </h1>
          <p className="text-sm md:text-sm lg:text-base text-center max-w-[90%] md:max-w-3xl lg:max-w-6xl pt-2 md:pt-4 lg:pt-[14px]">
            EquiPPP™ is a collaborative platform that vitalizes crowd participation in Public-Private Projects and connects Corporates,
          </p>
          <p className="text-sm md:text-sm lg:text-base mb-6 md:mb-8 lg:mb-10 text-center max-w-[90%] md:max-w-3xl lg:max-w-6xl">
            Citizens, Domain Experts, NGOs and Philanthropists with the Government to Initiate and Participate together in socially relevant projects.
          </p>
          <button className="bg-white text-black font-semibold py-2 px-6 md:py-3 md:px-8 lg:py-3 lg:px-9 rounded-full hover:bg-opacity-90 transition duration-300 mb-12 md:mb-16 lg:mb-20 text-base md:text-lg lg:text-lg">
            View Projects
          </button>
        </div>
      </div>

      <div className="relative w-full mx-auto mt-[-440px] md:mt-[-320px] lg:mt-[-450px]">
        <img 
          src="https://equippp-assets.s3.ap-south-1.amazonaws.com/images/website-preview.png" 
          alt="EquiPPP Dashboard" 
          className="w-full h-auto rounded-lg"
        />
      </div>
    </section>
  );
};

export default Hero;
