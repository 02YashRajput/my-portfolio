import React from 'react'

const Hero = ({homeRef}) => {
  return (
    <div ref={homeRef} className='flex  items-center flex-wrap  justify-center gap-20 px-10 '>
      <div className='max-w-[600px] flex flex-col gap-5'>
      <h1 className='text-5xl font-bold '>
        Yash Rajput
      </h1>
      <h3 className='text-2xl lg:text-3xl text-gray-500'>Software Devloper</h3>
      <p className='lg:text-xl'>
      A versatile software developer skilled in React, Node.js, Python, Java, and C++, with a passion for building dynamic and efficient applications.


      </p>
      </div>
        <div>

        </div>

    </div>
  )
}

export default Hero