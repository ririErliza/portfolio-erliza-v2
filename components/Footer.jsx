
import Image from 'next/image'
import Logo from '../public/assets/images/Logo.png'
import {AiOutlineMail} from 'react-icons/ai'
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'
import Link from 'next/link'
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'

const Footer = () => {
  return (
    <div className='py-10 flex flex-col gap-12 mt-24 items-center text-[#234e99] justify-center'>
        <span className='font-bold'>ALL RIGHT RESERVED</span>

        <div className="social flex gap-4 ">
            <FaLinkedinIn size={45}/>
            <FaGithub size={45}/>
            <AiOutlineMail size={45}/>
        </div>

        <div className="flex justify-center justify-items-center gap-2">
            <Image src={Logo} alt="" width={100} height={60}/>
        </div>

        <Link href='/'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-4 hover:scale-110 ease-in duration-300'> 
                        <HiOutlineChevronDoubleUp className='text-[#234e99]' size={20}/>
                    </div>
        </Link>
    </div>
  )
}

export default Footer