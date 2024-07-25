import React from 'react'
import ExperienceCards from './ExperienceCards'

type Props = {}

function WorkExperience({}: Props) {
  return (
    <div className=' h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>

      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Experience</h3>

      <div>
        <ExperienceCards/>
        <ExperienceCards/>
        <ExperienceCards/>
      </div>
    </div>
  )
}

export default WorkExperience