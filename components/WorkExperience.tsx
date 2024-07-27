import React from 'react';
import ExperienceCards from './ExperienceCards';

type Props = {};

function WorkExperience({}: Props) {
  return (
    <div className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-4 md:px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-10 md:top-10 uppercase tracking-[10px] md:tracking-[20px] text-gray-500 text-xl md:text-2xl mb-10 md:mb-20'>Experience</h3>

      <div className='w-full flex space-x-5 overflow-x-scroll p-4 md:p-10 snap-x snap-mandatory mt-16 md:mt-20'>
        <ExperienceCards />
        <ExperienceCards />
        <ExperienceCards />
      </div>
    </div>
  );
}

export default WorkExperience;