import React from 'react'
import MovieCard from '../MovieCard'

function TmdbMovieSuggestion({data}) {;
  const movieResults = data.results;

  return (
    <>
      <div className='px-6 py-3'>
        <h1 className='text-4xl px-6 py-3  text-white bg-black opacity-85 rounded w-fit'>Hindi Movies</h1>

        <div className='overflow-x-auto bg-black opacity-85 my-4 py-8 rounded'>
         <div className='w-50 h-50 flex gap-6 '>
              {movieResults?.map((mov, index) => (
              <MovieCard key={index} poster_path={mov?.poster_path} id={mov.id}/>
            ))}
        </div>
        </div>

        </div>


    </>
    
  )
}

export default TmdbMovieSuggestion
