import { lang } from './utils/langConstant';
import { useSelector } from 'react-redux';

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang)

  return (
    <>
    <form className='pt-[10%] flex justify-center'>
        <input type="text" className='px-4 py-[15px] border-[1px] border-black border-r-0  w-3/10 outline-0 bg-white rounded-full rounded-r-none' placeholder={lang[langKey].gptSearchPlaceholder} />

        <button className='px-8 font-bold py-[15px] bg-red-600 text-white rounded-full cursor-pointer border-[1px] border-l-0 border-black rounded-l-none'><i className="ri-search-line font-extrabold"></i> {lang[langKey].search}</button>
    </form>
    </>
  )
}

export default GptSearchBar;