import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
      const movies = useSelector(store => store.movies)
      if(!movies) return;

  return (
    <div className='bg-black'>
      <div className='mt-0 md:-mt-50 relative z-100 bg-transparent'>
      <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies}/>

      <MovieList title={"Top Rated"} movies={movies?.topRatedMovie}/>

      <MovieList title={"Popular"} movies={movies?.popularMovie}/>

      <MovieList title={"Upcoming Movies"} movies={movies?.upcomingMovie}/>
      </div>
    </div>
  )
}

export default SecondaryContainer 