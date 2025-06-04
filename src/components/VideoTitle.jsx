import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-15 absolute z-10 text-white bg-gradient-to-r from-black opacity-50'>
        <h1 className='text-6xl'>{title}</h1>
        <p className='py-6 text-lg w-1/3'>{overview}</p>
        <div className='flex gap-4'>
            <button className='bg-white cursor-pointer text-2xl font-light rounded text-black px-5 py-1 hover:opacity-80'><i className="ri-play-fill "></i> Play</button>
            <button className='bg-gray-200 text-2xl font-light rounded text-black opacity-70 hover:opacity-80 px-5 py-1 cursor-pointer'> <i className="ri-information-line"></i> More Info</button>
        </div>
    </div>
  )
}
 
export default VideoTitle;