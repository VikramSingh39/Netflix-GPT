import React from 'react'
import MovieCard from '../MovieCard'

function TmdbMovieSuggestion({data}) {;
  const movieResults = data.results;

  return (
    <>
      <div className=' py-3'>
        <h1 className='text-2xl px-4 py-1 mx-auto  text-white bg-black opacity-85 rounded w-fit'>Searched Result</h1>

        <div className='mt-6 bg-black w-full p-6'>
         <div className='flex flex-row flex-wrap  gap-6 '>
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
