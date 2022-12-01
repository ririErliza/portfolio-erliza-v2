import React from 'react'
import Cards from './Cards'
import Title from './Title'

const About = () => {
  return (
    <div id='about' className='py-20 flex flex-col justify-center items-center'>
        <Title title="ABOUT ME" />
        <Cards/>
    </div>
  )
}

export default About