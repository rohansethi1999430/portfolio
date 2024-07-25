import React from 'react'
import { motion } from "framer-motion"
type Props = {}

function ExperienceCards({}: Props) {
  return (
    <article>
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
        className=' h-60 w-60 rounded-full xl:w-[200px] xl:h-[200px]'
        src="/Dell_Logo.png" alt="" />

    </article>
  )
}

export default ExperienceCards