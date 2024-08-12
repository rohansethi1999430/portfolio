import React from 'react'
import { motion } from 'framer-motion';

type Props = {}

function Projects({}: Props) {
  return (
    <div className=' h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full 
    mx-auto justify-evenly items-center z-0'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>
        <div className=' w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'></div>
    </div>
  )
}

export default Projects