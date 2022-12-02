import Image from 'next/image'
import React from 'react'
import Title from './Title'
import Skillspict from '../public/skillspict.json';

const Skills = () => {
  return (
    <div id='skills' className='py-5 md:py-20'>
      <Title title='Skills'/>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-20  justify-center items-center px-10">

      {Skillspict.map((skill) => (
                        <div className="hover:scale-110 ease-in duration-300 flex flex-col justify-center items-center" key={skill.id}>
                            <Image className='rounded-full' src={skill.image} alt='' width='123' height='50'/>
                            <div className='w-20 text-center'>
                                <p>{skill.name}</p>
                            </div>
                        </div>
                    ))}


      </div>
    </div>
  )
}

export default Skills