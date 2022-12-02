import React from 'react'
import Cards from './Cards'
import Title from './Title'

const About = () => {
  return (
    <div id='about' className='py-5 md:py-20 flex flex-col justify-center items-center'>
        <Title title="ABOUT ME" />
        <Cards/>
{/* 
        <div className='absolute top-[60rem] right-12 bg-cyan-100 w-[300px] h-[200px] blur-3xl -z-10'></div>

        <div className='absolute top-[50rem] left-12 bg-cyan-50 w-[300px] h-[200px] blur-3xl -z-10'></div> */}
    </div>
  )
}

export default About