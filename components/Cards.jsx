import Image from 'next/image'
import Introduce from '../public/assets/images/Introduce.png'
import Education from '../public/assets/images/Education.png'
import Hobby from '../public/assets/images/Hobby.png'

const Cards = () => {
  return (
    <>


      <div className="mb-10 flex flex-col-reverse items-center bg-gray-100 rounded-lg shadow-lg md:flex-row md:max-w-3xl hover:bg-white dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          
          <div className='flex flex-col justify-between p-4 leading-normal'>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Speaking about my background in a brief, I graduated from Metallurgy and Materials Engineering. Being an Engineer was an exciting phase for me, however after some years being absent from the Industry, my life evolved. Then, there comes the period of questioning myself &quot;What do I really want to do for the rest of my life? Something that sparks joy but also match to my life goal?&quot;

</p>
          </div>

          <Image className='hover:opacity-50 w-full rounded-b-lg h-full md:h-auto md:w-48 md:rounded-none md:rounded-r-lg' src={Education} alt='/' objectFit='fill' />
          
      </div>

      <div className="mb-10 flex flex-col items-center bg-gray-100 rounded-lg shadow-lg md:flex-row md:max-w-3xl hover:bg-white dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <Image className='hover:opacity-50 w-full rounded-t-lg h-full md:h-auto md:w-48 md:rounded-none md:rounded-l-lg' src={Introduce} alt='/' objectFit='fill' />
          <div className='flex flex-col justify-between p-4 leading-normal'>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">After some thinking and researching, finally I decided to make a career change into Web Development. At first I did self-study but after joining a coding school in 2021, with good guidance I progressed much better. In 2022 I completed my training in Web Development, and to this time I keep working to improve my skills while enjoying my new role as a web developer.</p>
          </div>
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