import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestion from './GptMovieSuggestion';
import { backgroundBanner } from './utils/constant';

const GptSearch = () => {
  return (
   <>
   <div className='absolute -z-10'>
    <img className='h-screen w-full bg-center opacity-70' src={backgroundBanner}/>
   </div>

   <GptSearchBar/>
   <GptMovieSuggestion/>
   </>
  )
}

export default GptSearch;