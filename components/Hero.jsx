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


import Link from 'next/link';


const Hero = () => {
  return (
    <div className='py-5 mb-5 flex flex-col justify-center items-center'>


        <div className="flex justify-center justify-items-center relative">
          <div className='relative text-[#6db8dd] animate-spin-slow'>
                            <div className='absolute top-1 left-1'><AiFillHtml5 className='animate-spin-slow' size={30}/></div>
                            <div className='absolute  top-10 right-8'><IoLogoCss3 className='animate-spin-med ' size={30}/></div>
                            <div className='absolute top-11 left-11'><DiJavascript1 className='animate-spin-med' size={30} /></div>
                            <div className='absolute  top-[7rem] right-4'><GrNode className='animate-spin-med' size={30}/></div>
                            <div className='absolute top-[7rem] left-9'><HiDatabase className='animate-spin-slow' size={30} /></div>

          </div>
          <div>
            <Image src={HeroImage} alt='/' objectFit='cover' height={150} width={250} />
          </div>
        </div>


        <h1 className='mt-5 py-2 text-gray-700 text-center text-3xl xl:text-5xl'>Hello, I am <span className='text-[#234e99]'>Erliza</span></h1>
                <h1 className='py-2 text-gray-700 text-center text-lg xl:text-2xl'>Front-End Developer</h1>
                <p className="py-2 text-gray-600 md:max-w-[35%] text-center">I am a Front-End Developer with basic understanding of Back-End Development and UI/UX Design.</p>
          
    

                <div className='text-[#234e99]  flex items-center justify-between max-w-[330px] m-auto py-2 gap-2'>
                            <Link href='https://www.linkedin.com/in/erliza-erbaryanti89/'>
                              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                  <FaLinkedinIn/>
                              </div>
                            </Link>

                            <Link href='https://github.com/ririErliza'>
                              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                  <FaGithub/>
                              </div>
                            </Link>

                            <Link href='mailto:erliza.erb@gmail.com'>
                              <div className=' rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                  <AiOutlineMail/>
                              </div>
                            </Link>

                            {/* <div className=' rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <AiOutlinePhone/>
                            </div> */}
                </div>


                <div className='absolute top-[12rem] bg-[#8cbbd6] w-[380px]  xl:h-[200px] h-[100px] blur-3xl -z-10'></div>
      

    </div>
  )
}

export default Hero