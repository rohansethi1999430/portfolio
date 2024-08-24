import React from 'react'
import { motion } from 'framer-motion';

type Props = {}

function Projects({}: Props) {
    const projects = [1,2,3,4,5]
  return (
    <div className=' h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full 
    mx-auto justify-evenly items-center z-0'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>


        <div className=' relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
            {projects.map((projects)=>(
                <div className=' w-screen snap-center'>
                    <img src="/Travel_France_Home.png" alt="" className=' mt-20' />
                    <div>
                        <h4>Go Travel France</h4>
                    </div>
                </div>
            ))}

        </div>

        <div className=' w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 
        h-[500px] -skew-y-12'>
        </div>
    </div>
  )
}

export default Projects