import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {
 console.log("Here is movies list", movies); 
 console.log(typeof(movies));

  return (
    <>
    
    <div className='px-6 py-3'>
        <h1 className='text-4xl pb-3 pt-5 text-white'>{title}</h1>

        <div className='overflow-x-auto'>
         <div className='w-40 flex gap-6 '>
              {movies?.map((mov, index) => (
              <MovieCard key={index} poster_path={mov?.poster_path} />
            ))}
        </div>
        </div>

        </div>
    </>     
  )
}

export default MovieList