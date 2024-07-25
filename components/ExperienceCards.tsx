import React from 'react'
import { motion } from "framer-motion"
type Props = {}

function ExperienceCards({}: Props) {
  return (
    <article className=' flex flex-col rounded-l items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px]'>
        <motion.img
        initial={{
            y: -100,
            opacity :0,
        }}
        transition={{
            duration:1.2
        }}
        whileInView={{
            opacity:1,
            y:0,
        }}
        viewport={{
            once:true
        }}
        className=' h-32 w-32 rounded-full xl:w-[200px] xl:h-[200px]'
        src="/Dell_logo1.png" alt="" />

        <div className=' px-0 md:px-10 '>
            <h4 className=' text-4xl'>Software Engineer</h4>
            <p className=' font-bold text-2xl mt-1'>Dell Technologies</p>
            <div  className=' flex space-x-2 my-2'>
                {/* Tech used */}
                {/* Tech used */}
                {/* Tech used */}
            </div>
            <p className=' uppercase py-5 text-gray-300'>Started working ... - Ended working...</p>
            <ul className=' list-disc space-y-4 ml-5 text-lg'>
                <li>Summary Points</li>
                <li>Summary Points</li>
                <li>Summary Points</li>
                <li>Summary Points</li>
                <li>Summary Points</li>
            </ul>
        </div>

    </article>
    
  )
}

export default ExperienceCards