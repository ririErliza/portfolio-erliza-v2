import Image from 'next/image'
import Introduce from '../public/assets/images/Hero.png'

const Cards = () => {
  return (
    <div className="flex flex-col items-center bg-white border rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <Image className='w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg' src={Introduce} alt='/' objectFit='cover' />
        <div className='flex flex-col justify-between p-4 leading-normal'>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        </div>
    </div>
  )
}

export default Cards