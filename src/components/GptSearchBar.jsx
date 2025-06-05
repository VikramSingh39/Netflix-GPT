import { useRef } from 'react';
import { lang } from './utils/langConstant';
import { useSelector } from 'react-redux';
import openAi from './utils/openAi';
import OpenAI from 'openai';

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const query = searchText.current?.value || "";

  const gptQuery = "Act as a movie recommendation system and suggest some movies for the query: " + query   + ". only give me names of five movies, comma seperated like the example resulut given ahead. Example Result: Intersteller, Nadyia ke Par, Subedar Joginder Singh, Koi Mil Gaya, Traveller";
  
  const handleGptSearchClick = async()=>{
      const gptResults = await openAi.chat.completions.create({
    messages: [{ role: 'user', content: gptQuery }],
    model: 'gpt-3.5-turbo',
  });
  if(!gptResults.choices){
    alert("OpenAI API Limit Exceed");
  }
  const gptMovies = gptResults.choices?.[0]?.message?.content?.split(', ');
  };
  
  const searchMoivesTMDB = async(movie)

  return (
    <>
    <form className='pt-[10%] flex justify-center' onSubmit={(e)=>  e.preventDefault()}>
        <input
        ref={searchText}
        type="text" className='px-4 py-[15px] border-[1px] border-black border-r-0  w-3/10 outline-0 bg-white rounded-full rounded-r-none' placeholder={lang[langKey].gptSearchPlaceholder} />

        <button onClick={handleGptSearchClick} className='px-8 font-bold py-[15px] bg-red-600 text-white rounded-full cursor-pointer border-[1px] border-l-0 border-black rounded-l-none'><i className="ri-search-line font-extrabold"></i> {lang[langKey].search}</button>
    </form>

    <p>{gptMovies}</p>
    </>
  )
}

export default GptSearchBar;