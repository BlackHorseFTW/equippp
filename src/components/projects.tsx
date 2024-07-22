import React from 'react';
import { ReactComponent as Power } from '../assets/icons/Transmission_Tower.svg';
import { ReactComponent as Roads } from '../assets/icons/25 De Abril Bridge.svg';
import { ReactComponent as Bridges } from '../assets/icons/Highway.svg';
import { ReactComponent as Healthcare } from '../assets/icons/Mental Health.svg';
import { ReactComponent as Agriculture } from '../assets/icons/Organic Food.svg';
import { ReactComponent as Education } from '../assets/icons/Student Center.svg';
import { ReactComponent as Justice } from '../assets/icons/Scales.svg';
import { ReactComponent as Technologies } from '../assets/icons/Electronics.svg';
import { ReactComponent as Community } from '../assets/icons/People Working Together.svg';
import { ReactComponent as Housing } from '../assets/icons/Downtown.svg';
import { ReactComponent as Farming } from '../assets/icons/Tractor.svg';
import { ReactComponent as WaterSanitation } from '../assets/icons/Water Tower.svg';
import { ReactComponent as WasteManage } from '../assets/icons/Recycle.svg';

const Projects: React.FC = () => {
  const projects = [
    { icon: <Power />, label: 'POWER' },
    { icon: <Roads />, label: 'ROADS' },
    { icon: <Bridges />, label: 'BRIDGES' },
    { icon: <Healthcare />, label: 'HEALTH CARE' },
    { icon: <Agriculture />, label: 'AGRICULTURE' },
    { icon: <Education />, label: 'EDUCATION' },
    { icon: <Justice />, label: 'JUSTICE' },
    { icon: <Technologies />, label: 'TECHNOLOGIES' },
    { icon: <Community />, label: 'COMMUNITY' },
    { icon: <Housing />, label: 'HOUSING' },
    { icon: <Farming />, label: 'FARMING' },
    { icon: <WaterSanitation />, label: 'WATER AND SANITATION' },
    { icon: <WasteManage />, label: 'WASTE MANAGEMENT' },
  ];

  const firstLineProjects = projects.slice(0, 7);
  const secondLineProjects = projects.slice(7);

  // Duplicate the projects arrays to create the infinite effect
  const duplicatedFirstLineProjects = [...firstLineProjects, ...firstLineProjects];
  const duplicatedSecondLineProjects = [...secondLineProjects, ...secondLineProjects];

  return (
    <section className="bg-white py-16 px-4 md:px-20 text-center font-sans max-w-full mt-[-70px] relative">
      <p className="text-sm font-bold mb-4">Total 200,000 Core Projects</p>
      <h2 className="text-3xl md:text-5xl font-bold mb-12 md:mb-20 md:mt-10">
        PROJECTS IN THE <span style={{ backgroundColor: '#FFF0D9' }}>EQUIPPP</span> ECOSYSTEM
      </h2>
      <div className="space-y-8">
        <div className="relative overflow-hidden px-20">
          <div className="flex whitespace-nowrap animate-scroll space-x-4 mb-8">
            {duplicatedFirstLineProjects.map((project, index) => (
              <div key={index} className="flex items-center mx-4">
                <div className="flex-shrink-0">{project.icon}</div>
                <span className="text-lg md:text-xl p-2 md:p-6 font-bold">{project.label}</span>
              </div>
            ))}
          </div>
          <div className="absolute top-0 bottom-0 left-0 w-10 bg-gradient-to-r from-white to-transparent"></div>
          <div className="absolute top-0 bottom-0 right-0 w-10 bg-gradient-to-l from-white to-transparent"></div>
        </div>
        <div className="relative overflow-hidden px-10">
          <div className="flex whitespace-nowrap animate-scroll space-x-4">
            {duplicatedSecondLineProjects.map((project, index) => (
              <div key={index} className="flex items-center mx-4">
                <div className="flex-shrink-0">{project.icon}</div>
                <span className="text-lg md:text-xl p-2 md:p-6 font-bold">{project.label}</span>
              </div>
            ))}
          </div>
          <div className="absolute top-0 bottom-0 left-0 w-10 bg-gradient-to-r from-white to-transparent"></div>
          <div className="absolute top-0 bottom-0 right-0 w-10 bg-gradient-to-l from-white to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
