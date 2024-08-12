import React from 'react'

type Props = {}

function Projects({}: Props) {
  return (
    <div className=' h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full 
    mx-auto justify-evenly items-center z-0'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>
        <div></div>
    </div>
  )
}

export default Projects