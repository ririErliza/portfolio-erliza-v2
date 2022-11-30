
import Image from 'next/image'
import Logo from '../public/assets/images/Logo.png'
import {AiOutlineMail} from 'react-icons/ai'
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='py-10 flex flex-col gap-12 mt-24 items-center justify-center'>
        <span className='font-bold'>ALL RIGHT RESERVED</span>

        <div className="social flex gap-4 text-[#517de5]">
            <FaLinkedinIn size={45}/>
            <FaGithub size={45}/>
            <AiOutlineMail size={45}/>
        </div>

        <div className="flex justify-center justify-items-center gap-2">
            <Image src={Logo} alt="" width={100} height={60}/>
        </div>
    </div>
  )
}

export default Footer