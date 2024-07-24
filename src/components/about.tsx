import React from 'react';
import { ReactComponent as LocateIcon } from '../assets/icons/icons8-location-96 1.svg';
import { ReactComponent as InitiateIcon } from '../assets/icons/icons8-flag-60 1.svg';
import { ReactComponent as MotivateIcon } from '../assets/icons/icons8-megaphone-device,-general-election-campaigning-and-influencing-96 1.svg';
import { ReactComponent as ParticipateIcon } from '../assets/icons/icons8-hand-90 1.svg';
import discuss from '../assets/images/Image(1).png';
import bridge from '../assets/images/Rectangle 3129.png';
import map from '../assets/images/Image-1.png';

const About: React.FC = () => {
  return (
    <section className="py-8 md:py-16 px-4 md:px-8 lg:px-12 font-sans">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">ABOUT US</h2>

      <p className="font-semibold text-md md:text-base text-center mb-12 max-w-4xl mx-auto px-4 leading-relaxed lg:text-sm">
        EquiPPP™ is a collaborative platform that vitalizes crowd participation in public-private projects and connects corporates, citizens, domain experts, NGOs, and philanthropists with the government to initiate and participate together in socially relevant projects.
      </p>
      <div className="flex flex-col md:flex-row gap-6 px-4 md:px-8 lg:px-40">
        <div className="md:w-1/2">
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-white rounded-lg p-6 flex items-start transition-shadow duration-300 hover:shadow-opacity-30 hover:shadow-md">
              <div className="w-14 h-14  md:p-4 bg-red-500 bg-opacity-20 rounded-full flex items-center justify-center mr-6">
                <LocateIcon className="w-6 h-6" />
              </div>
              <div className="max-w-[350px]">
                <h3 className="text-lg md:text-xl font-bold mb-3">STEP : 1 - LOCATE</h3>
                <p className="opacity-75 lg:text-sm md:text-base">
                  EquiPPP™ has a database of projects selected across sectors and geographies started by individuals and organizations.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 flex items-start transition-shadow duration-300 hover:shadow-opacity-30 hover:shadow-md">
              <div className="w-14 h-14  md:p-4 bg-green-500 bg-opacity-20 rounded-full flex items-center justify-center mr-6">
                <InitiateIcon className="w-6 h-6" />
              </div>
              <div className="max-w-[350px]">
                <h3 className="text-lg md:text-xl font-bold mb-3">STEP : 2 - INITIATE</h3>
                <p className="opacity-75 lg:text-sm md:text-base">
                  EquiPPP™ enables individuals and organizations to initiate projects based on innovative solutions for socio-economic problems.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 flex items-start transition-shadow duration-300 hover:shadow-opacity-30 hover:shadow-md">
              <div className="w-14 h-14  md:p-4 bg-blue-500 bg-opacity-20 rounded-full flex items-center justify-center mr-6">
                <MotivateIcon className="w-6 h-6" />
              </div>
              <div className="max-w-[350px]">
                <h3 className="text-lg md:text-xl font-bold mb-3">STEP : 3 - MOTIVATE</h3>
                <p className="opacity-75 lg:text-sm md:text-base">
                  EquiPPP™ intends to motivate individuals and organizations through its network of projects to collaborate, initiate, and/or participate.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 flex items-start transition-shadow duration-300 hover:shadow-opacity-10 hover:shadow-md">
              <div className="w-14 h-14 md:p-4 bg-purple-500 bg-opacity-20 rounded-full flex items-center justify-center mr-6">
                <ParticipateIcon className="w-6 h-6" />
              </div>
              <div className="max-w-[350px]">
                <h3 className="text-lg md:text-xl font-bold mb-3">STEP : 4 - PARTICIPATE</h3>
                <p className="opacity-75 lg:text-sm md:text-base">
                  The EquiPPP™ ecosystem through the collaborative work of individuals and organizations encourages participation in projects through expressions of interest on the platform.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Images */}
        <div className="md:w-1/2">
          <div className="grid gap-6">
            <img src={discuss} alt="Public and Private Projects" className="w-full h-full rounded-lg object-cover" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img src={bridge} alt="Infrastructure" className="w-full h-full rounded-lg object-cover" />
            <img src={map} alt="Geographic Data" className="w-full h-full rounded-lg object-cover" />
            </div> 
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
