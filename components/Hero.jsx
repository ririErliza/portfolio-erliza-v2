import Image from 'next/image'
import React from 'react'
import HeroImage from '../public/assets/images/Hero.png'
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io5";
import { DiJavascript1 } from "react-icons/di";
import { GrNode } from "react-icons/gr";
import { HiDatabase } from "react-icons/hi";

import {FaLinkedinIn, FaGithub} from 'react-icons/fa'
import {AiOutlineMail, AiOutlinePhone} from 'react-icons/ai'


const Hero = () => {
  return (
    <div className='py-10 flex flex-col justify-center items-center'>


        <div className="flex justify-center justify-items-center relative">
          <div className='relative text-[#6db8dd] animate-spin-slow'>
                            <div className='absolute top-1 left-1'><AiFillHtml5 className='animate-spin-slow' size={30}/></div>
                            <div className='absolute  top-10 right-8'><IoLogoCss3 className='animate-spin-slow ' size={30}/></div>
                            <div className='absolute top-11 left-11'><DiJavascript1 className='animate-spin-slow' size={30} /></div>
                            <div className='absolute  top-[7rem] right-4'><GrNode className='animate-spin-slow' size={30}/></div>
                            <div className='absolute top-[7rem] left-9'><HiDatabase className='animate-spin-slow' size={30} /></div>

          </div>
          <div>
            <Image src={HeroImage} alt='/' objectFit='cover' height={150} width={250} />
          </div>
        </div>


        <h1 className='mt-5 py-4 text-gray-700 text-center text-3xl xl:text-5xl'>Hello, I am <span className='text-[#3a98c8]'>Erliza</span></h1>
                <h1 className='py-2 text-gray-700 text-center text-lg xl:text-2xl'>Full-Stack Developer</h1>
          
                <div className='text-[#3a98c8]  flex items-center justify-between m-auto py-4'>
                            <div className='rounded-full mr-2 shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <FaLinkedinIn size={20}/>
                            </div>

                            <div className='rounded-full mr-2 shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <FaGithub size={20}/>
                            </div>

                            <div className=' rounded-full mr-2 shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <AiOutlineMail size={20}/>
                            </div>

                            <div className=' rounded-full mr-2 shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <AiOutlinePhone size={20}/>
                            </div>

                </div>
      

    </div>
  )
}

export default Hero