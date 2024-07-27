import React from 'react'
import { motion } from 'framer-motion';

type Props = {}

function Skills({}: Props) {
  return (
    <motion.div className=' text-center flex relative flex-col md:text-left xl:flex-row max-w-[2000px] 
    xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto  items-center'>
        <h3 className='absolute top-10 uppercase tracking-[20px] text-gray-500 text-2xl mb-20'>Skills</h3>
        <h3>Hover over a skill for proficiency</h3>
        
    </motion.div>
  )
}

export default Skills