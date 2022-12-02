import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Title from './Title'
import phone from '../public/assets/images/contact.png'
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'

const Contact = () => {
  return (
    <div id='contact' className='py-5 md:py-20'>
      <Title title='Contact Me'/>


            <div className='flex items-center justify-center'>
              

                <div className="col-span-3 w-full md:w-[70%] h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
                    <div className="p-4">

                        <form action="https://formsubmit.co/c99aed313b61b0779c785e5b960272d7" method="POST">
                            <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                                <div className="flex flex-col">
                                    <label className='uppercase text-sm py-2' >Name</label>
                                    <input className='border-2 rounded-lg p-2 flex border-gray-300' name="name" type="text" required/>
                                </div>
                                <div className="flex flex-col">
                                    <label className='uppercase text-sm py-2' >Phone Number</label>
                                    <input className='border-2 rounded-lg p-2 flex border-gray-300' name="phone" type="text" required/>
                                </div>
                            </div>

                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Email</label>
                                <input className='border-2 rounded-lg p-2 flex border-gray-300' name="email" type="email" required />
                            </div>

                            {/* <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Subject</label>
                                <input className='border-2 rounded-lg p-2 flex border-gray-300' name="subject" type="text" required/>
                            </div> */}

                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Message</label>
                                <textarea className='border-2 rounded-lg p-2 flex border-gray-300' name="message" rows='5' required />
                            </div>

                            <div className='w-full text-center'>
                              <button type="submit" className='w-50 p-3 text-white bg-gradient-to-r from-[#6db8dd] to-[#709dff]  mt-4 hover:scale-110'>Send Message</button>
                            </div>
                           
                        </form>
                    </div>

                </div>

            </div>

         
    </div>
  )
}

export default Contact