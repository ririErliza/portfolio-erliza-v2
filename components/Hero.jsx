import Image from 'next/image'
import React from 'react'
import HeroImage from '../public/assets/images/Hero.png'
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io5";
import { DiJavascript1 } from "react-icons/di";
import { GrNode } from "react-icons/gr";
import { HiDatabase } from "react-icons/hi";


const Hero = () => {
  return (
    <div className='py-10 flex flex-col justify-center items-center'>


        <div className="flex justify-center justify-items-center relative">
          
          
          <div className='relative text-[#3a98c8]'>
                            <div className='absolute animate-spin top-1 left-1'><AiFillHtml5 size={30}/></div>
                            <div className='absolute animate-spin top-10 right-8'><IoLogoCss3 size={30}/></div>
                            <div className='absolute animate-spin top-11 left-11'><DiJavascript1 size={30} /></div>
                            <div className='absolute animate-spin top-[7rem] right-4'><GrNode size={30}/></div>
                            <div className='absolute animate-spin top-[7rem] left-9'><HiDatabase size={30} /></div>

          </div>
          <div>
            <Image src={HeroImage} alt='/' objectFit='cover' height={150} width={250} />
          </div>
        </div>
      

    </div>
  )
}

export default Hero