import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Title from './Title'
import phone from '../public/assets/images/contact.png'
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'

const Contact = () => {
  return (
    <div id='contact' className='py-20'>
      <Title title='Contact Me'/>


            <div className='flex items-center justify-center'>
              

                <div className="col-span-3 w-full md:w-[70%] h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
                    <div className="p-4">

                        <form>
                            <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                                <div className="flex flex-col">
                                    <label className='uppercase text-sm py-2' >Name</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" />
                                </div>
                                <div className="flex flex-col">
                                    <label className='uppercase text-sm py-2' >Phone Number</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" />
                                </div>
                            </div>

                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Email</label>
                                <input className='border-2 rounded-lg p-3 flex border-gray-300' type="email" />
                            </div>

                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Subject</label>
                                <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" />
                            </div>

                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Message</label>
                                <textarea className='border-2 rounded-lg p-3 flex border-gray-300' rows='10' />
                            </div>

                            <div className='w-full text-center'>
                              <button className='w-50 p-4 text-gray-100 mt-4'>Send Message</button>
                            </div>
                           
                        </form>
                    </div>

                </div>

            </div>

         
    </div>
  )
}

export default Contact