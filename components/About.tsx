import React from 'react'
import { motion } from "framer-motion"

type Props = {}

function About({}: Props) {
  return (
    <motion.div 
    
    initial = {{
        opacity:0
    }}
    whileInView={{
        opacity:1
    }}
    transition={{
        duration:1.5
    }}
    
    className=' h-screen flex  flex-col relative text-center md:text-left 
    md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center' >
        
        <h3 className=' absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            About
        </h3>

        <motion.img 
        src="/rohan_image.jpeg"
        initial={{
            x: -200,
            opacity:0,
          }}
          whileInView={{
            x: 0,
            opacity:1
          }}
          transition={{
            duration:1.2
          }}
          viewport={{
            once: true,
          }}

          className=' -mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 
          md:h-96 xl:w-[500px] xl:h-[600px] xl:rounded-lg'
        />

        <div className=' space-y-10 px-0 md:px-10'>
            <h4 className=' text-4xl font-semibold '>
                Here is a <span className=' underline decoration-[#F7AB0A]/50 '>little</span> background 
            </h4>
            <p className=' text-base'>
            I am a dedicated software engineer with over two years of experience specializing in Java Full Stack development. I am currently pursuing a Master's in Applied Computing at the University of Windsor. My technical expertise includes Java, Spring Boot, JavaScript, ReactJS, and React Native. At Dell Technologies, I led an innovation team that developed a virtual assistant for employees and a UI for error logging, significantly enhancing operational efficiency. My background also includes a Full Stack Developer internship at Cognizant, where I honed my skills in HTML, CSS, JavaScript, and Bootstrap. I have successfully developed personal projects such as "Go Travel France," a React Native app designed to enhance tourism experiences. My academic achievements include presenting at the 25th International Conference on Interactive Collaborative Learning in Vienna. I am actively seeking co-op opportunities to leverage my skills and contribute to a leading technology firm.
            </p>
        </div>


        </motion.div>
  )
}

export default About