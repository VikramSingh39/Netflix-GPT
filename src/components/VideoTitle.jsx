import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-4 md:px-15 absolute z-10 text-white bg-gradient-to-r from-black opacity-50'>
        <h1 className='text-xl md:text-4xl lg:text-6xl'>{title}</h1>
        <p className='py-6 lg:inline-block text-lg w-1/3 hidden'>{overview}</p>
        <div className='flex gap-4 mt-2 md:mt-4 lg:mt-0'>
            <button className='text-xl bg-white cursor-pointer md:text-2xl font-light rounded text-black px-2 md:px-5 md:py-1 hover:opacity-80'><i className="ri-play-fill "></i> Play</button>
            <button className='hidden md:inline-block bg-gray-200 text-2xl font-light rounded text-black opacity-70 hover:opacity-80 px-5 py-1 cursor-pointer'> <i className="ri-information-line"></i> More Info</button>
        </div>
    </div>
  )
}
 
export default VideoTitle;