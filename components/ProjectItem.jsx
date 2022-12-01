import Image from 'next/image'
import Link from 'next/link'


const ProjectItem = ({title,desc,bgImg, projectUrl, codeUrl}) => {
  return (
    <>
        <div className='group relative flex flex-col md:flex-row items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 hover:bg-gradient-to-r from-[#6db8dd] to-[#709dff]'>
                    <Image className='rounded-xl group-hover:opacity-10' src={bgImg} alt='/'/>
                    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                        <h3 className='text-2xl text-white tracking-wider text-center'>{title}</h3>
                        <p className='pb-4 pt-2 text-white text-center'>{desc}</p>
                       
                        <Link href={projectUrl}>
                            <p className='text-center py-2 rounded-lg bg-white text-gray-700 font-bold mb-3'>Link</p>
                        </Link>
                        <Link href={codeUrl}>
                            <p className='text-center py-2 rounded-lg bg-white text-gray-700 font-bold'>Code</p>
                        </Link>
                        
                    </div>

                    <div className='md:hidden mt-2 w-[5rem]'>
                    <Link href={projectUrl}>
                                                <p className='text-center py-2 rounded-lg  text-gray-700 font-bold underline mb-3'>Link</p>
                                            </Link>
                                            <Link href={codeUrl}>
                                                <p className='text-center py-2 rounded-lg  text-gray-700 font-bold underline'>Code</p>
                                            </Link>

                    </div>
                        
        </div>
    </>
  )
}

export default ProjectItem