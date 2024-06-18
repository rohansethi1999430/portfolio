import React from 'react'
import { SocialIcon } from 'react-social-icons'



type Props = {}

function Header({}: Props) {
  return (
    <header className=' sticky top-0 flex items-start  p-5 justify-between max-w-7xl mx-auto'>
<div className='flex flex-row items-center'>
          {/* social icons */}
          {/* <SocialIcon url="http://twitter.com/jaketrent" 
          fgColor='gray' 
          bgColor=' transparent'/>
          <SocialIcon url="http://facebook.com/jaketrent"
           fgColor='gray' 
           bgColor=' transparent' /> */}
          <SocialIcon url="https://www.linkedin.com/in/rohan-sethi-a27107178/" 
           fgColor='gray' 
           bgColor=' transparent'/>
          <SocialIcon url="https://github.com/rohansethi1999430"
           fgColor='gray' 
           bgColor=' transparent' />
        </div>
        <div className=' flex flex-row items-center text-gray-300 cursor-pointers'>
            <SocialIcon
            className=' cursor-pointer'
            network='email'
            fgColor='gray'
            bgColor='transparent'
            />
            <p className=' uppercase hidden md:inline-flex text-sm text-gray-400'>
            Get In Touch
           </p>
           </div>

    </header>
  )
}

export default Header