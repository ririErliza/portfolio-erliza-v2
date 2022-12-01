import Image from 'next/image'
import Introduce from '../public/assets/images/Introduce.png'
import Education from '../public/assets/images/Education.png'
import Hobby from '../public/assets/images/Hobby.png'

const Cards = () => {
  return (
    <>
    <div className="mb-10 flex flex-col items-center bg-gray-100 rounded-lg shadow-lg md:flex-row md:max-w-3xl hover:bg-white dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <Image className='hover:opacity-50 w-full rounded-t-lg h-full md:h-auto md:w-48 md:rounded-none md:rounded-l-lg' src={Introduce} alt='/' objectFit='fill' />
        <div className='flex flex-col justify-between p-4 leading-normal'>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        </div>
    </div>

    <div className="mb-10 flex flex-col-reverse items-center bg-gray-100 rounded-lg shadow-lg md:flex-row md:max-w-3xl hover:bg-white dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    
        <div className='flex flex-col justify-between p-4 leading-normal'>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        </div>

        <Image className='hover:opacity-50 w-full rounded-b-lg h-full md:h-auto md:w-48 md:rounded-none md:rounded-r-lg' src={Education} alt='/' objectFit='fill' />
        
    </div>

    {/* <div className="flex flex-col items-center bg-gray-100 rounded-lg shadow-lg md:flex-row md:max-w-3xl hover:bg-white dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <Image className='w-full rounded-t-lg h-full md:h-auto md:w-48 md:rounded-none md:rounded-l-lg' src={Hobby} alt='/' objectFit='fill' />
        <div className='flex flex-col justify-between p-4 leading-normal'>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        </div>
    </div> */}
    </>
  )
}

export default Cards