import { useRef, useState } from 'react';
import { lang } from '../utils/langConstant';
import { useSelector } from 'react-redux';
import { API_options } from '../utils/constant';
// import { addTmdbMovieResult } from './utils/tmdbSlice';
import TmdbMovieSuggestion from './TmdbMovieSuggestion';

const TmdbSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  // const dispatch = useDispatch();
  const [movieSearch, setMovieSearch] = useState([]);

// =============== Search Movie in TMDB Database =====================

   const searchMovieTmdb = async()=>{
    const query = searchText.current?.value || "";
    try {
     const data = await fetch("https://api.themoviedb.org/3/search/movie?query=" + query + "&include_adult=false&page=1", API_options);
    
     const json = await data.json(); 
      setMovieSearch(json);
     } 
     catch (error) {
     console.error("TMDB fetch error:", error);
     }
   }; 

  return (
    <>
      <form className='pt-[10%] flex justify-center' onSubmit={(e) => e.preventDefault()}>
        <input
          ref={searchText}
          type="text"
          className='px-4 py-[15px]  border-black border-r-0 md:w-3/10 outline-0 bg-white rounded-full rounded-r-none'
          placeholder={lang[langKey].gptSearchPlaceholder}/>

        <button
          onClick={searchMovieTmdb}
          className=' font-bold bg-red-600 text-white rounded-full cursor-pointer    rounded-l-none px-6 md:px-6'>
          <i className="ri-search-line font-extrabold text-2xl"></i>
        </button>
      </form>
      {movieSearch?.results?.length > 0 && <TmdbMovieSuggestion data={movieSearch} />}
    </>
  );
};

export default TmdbSearchBar;