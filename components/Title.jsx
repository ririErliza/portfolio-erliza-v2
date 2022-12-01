import React from 'react'

const Title = ({title}) => {
  return (
    <div className='py-10 flex justify-center'>
      <h1 className='uppercase tracking-widest text-[#234e99]'>{title} </h1>
      {/* <div className='bg-[#1d7dad] w-[5rem] h-[2rem] absolute blur-xl -z-10'></div> */}
    </div>
  )
}

export default Title