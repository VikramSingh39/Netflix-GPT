import React from 'react'
import MovieList from './MovieList'
import SecondaryShimmer from './ShimmerUI/SecondaryShimmer'
import { useSelector } from 'react-redux'
import Footer from './Footer'

const SecondaryContainer = () => {
      const movies = useSelector(store => store.movies)
        if (
        !movies?.nowPlayingMovies ||
        !movies?.topRatedMovie ||
        !movies?.popularMovie ||
        !movies?.upcomingMovie
      ){return (<SecondaryShimmer />) }
      else{
  return (
      <div className='bg-black'>
      <div className='mt-0 md:-mt-40 relative z-1000 bg-transparent'>
       <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies}/>

       <MovieList title={"Top Rated"} movies={movies?.topRatedMovie}/>

       <MovieList title={"Popular"} movies={movies?.popularMovie}/>

       <MovieList title={"Upcoming Movies"} movies={movies?.upcomingMovie}/>
       </div>
       <Footer></Footer>
     </div>
  )
      }

}

export default SecondaryContainer 