import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];

  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full mx-auto justify-evenly items-center z-0">
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100 mt-20">
        {/* Added mt-20 to add margin on top */}
        {projects.map((project, index) => (
          <div
            key={index}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 h-full"
          >
            <motion.img
              src="/Travel_France_Home.png"
              alt="Travel France"
              className="w-[300px] h-auto object-contain mt-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
            <div className="space-y-5 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                Go Travel France
              </h4>
              <p className="text-lg text-center">
                Enjoy the Trip with Good Moments. Explore France: Where Every Corner Tells a Story.
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
    </div>
  );
}

export default Projects;