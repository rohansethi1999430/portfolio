import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];

  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full mx-auto justify-evenly items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100 mt-20">
        {projects.map((project, index) => (
          <div
            key={index}
            className="w-screen flex-shrink-0 snap-center flex flex-row items-center justify-center p-20 h-full space-x-10"
          >
            {/* Left Side Content */}
            <div className="hidden md:block w-1/4 text-center text-white">
              <p>The ultimate travel companion 
                app designed to enhance your tourism experience in France. 
                With our innovative Scavenger Hunt feature, AI-driven recommendations, and comprehensive travel tools, 
                we aim to make your visit to France more enjoyable and culturally enriching.
            </p>
            </div>

            {/* Main Image and Content */}
            <div className="flex flex-col items-center justify-center">
              <motion.img
                src="/Travel_France_Home.png"
                alt="Travel France"
                className="w-[300px] h-auto object-contain mt-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              />
              <div className="space-y-5 px-0 md:px-10 max-w-6xl">
                <h4 className="text-4xl font-semibold text-center">
                  Go Travel France
                </h4>
                {/* <p className="text-lg text-center">
                  Enjoy the Trip with Good Moments. Explore France: Where Every Corner Tells a Story.
                </p> */}
              </div>
            </div>

            {/* Right Side Content */}
            <div className="hidden md:block w-1/4 text-center text-white">
              <p></p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
    </div>
  );
}

export default Projects;