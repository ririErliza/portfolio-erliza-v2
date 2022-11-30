import {UilFacebook, UilWhatsapp, UilInstagram} from '@iconscout/react-unicons'
import Image from 'next/image'
import Logo from '../public/assets/images/Logo.png'

const Footer = () => {
  return (
    <div className='py-10 flex flex-col gap-12 mt-24 items-center justify-center'>
        <span className='font-bold'>ALL RIGHT RESERVED</span>

        <div className="social flex gap-4">
            <UilFacebook size={45}/>
            <UilWhatsapp size={45}/>
            <UilInstagram size={45}/>
        </div>

        <div className="flex justify-center justify-items-center gap-2">
            <Image src={Logo} alt="" width={50} height={50}/>
        </div>
    </div>
  )
}

export default Footer