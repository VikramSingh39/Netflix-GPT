import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {


  return (
    <>
    
    <div className='px-6 py-3'>
        <h1 className='text-2xl md:4xl pb-3 pt-5 text-white'>{title}</h1>

        <div className='overflow-x-auto'>
         <div className='w-28 md:w-40 flex gap-6'>
              {movies?.map((mov, index) => (
              <MovieCard key={index} poster_path={mov?.poster_path} id={mov.id}/>
            ))}
        </div>
        </div>

        </div>
    </>     
  )
}

export default MovieList