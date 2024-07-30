import React from 'react'
import { motion } from 'framer-motion';


type Props = {
    directionLeft?: boolean;
}

function Skill({directionLeft}: Props) {
  return (
    <div className=' group relative flex cursor-pointer'>
        <motion.img
        initial = {{
            x:directionLeft ? -200:200,
            opacity:0
        }}
        transition={{
            duration:1
        }}
        whileInView={{opacity:1,x:0}}
        src='/sanity_logo.png'
        className=' h-24 w-24 rounded-full border border-gray-500 object-cover filter group-hover:grayscale
         transition duration-300 ease-in-out'
        />
    </div>
  )
}

export default Skill