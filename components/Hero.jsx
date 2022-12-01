import Image from 'next/image'
import React from 'react'
import HeroImage from '../public/assets/images/Hero.png'
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io5";
import { DiJavascript1 } from "react-icons/di";
import { GrNode } from "react-icons/gr";
import { HiDatabase } from "react-icons/hi";


import Link from 'next/link';


const Hero = () => {
  return (
    <div className='py-10 mb-5 flex flex-col justify-center items-center'>


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


        <h1 className='mt-5 py-4 text-gray-700 text-center text-3xl xl:text-5xl'>Hello, I am <span className='text-[#234e99]'>Erliza</span></h1>
                <h1 className='py-2 text-gray-700 text-center text-lg xl:text-2xl'>Front-End Developer</h1>
                <p className="py-4 text-gray-600 max-w-[30%] text-center">I am a Front-End Developer with basic understanding of Back-End Development and UI/UX Design.</p>
          
                <div className=' flex items-center justify-between m-auto py-4'>
                            <div className=' text-[#1a3870] font-bold text-center rounded-full shadow-lg shadow-gray-400 p-3 w-[10rem] cursor-pointer hover:scale-110 ease-in duration-300'>
                                
                                <Link href='/#contact'>
                                  <p className=' animate-pulse'>Contact Me</p>
                                </Link>
                            </div>

                            

                </div>


                <div className='absolute top-60 bg-gradient-to-r from-[#b6ccfc] to-[#63c4f4] w-[380px] h-[200px] blur-3xl -z-10'></div>
      

    </div>
  )
}

export default Hero