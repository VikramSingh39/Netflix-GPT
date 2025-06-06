import TmdbSearchBar from './TmdbSearchBar';
import { backgroundBanner } from '../utils/constant';

const TmdbSearch = () => {

  return (
   <>
   <div className='absolute -z-10'>
       <img className='w-screen  h-screen object-cover bg-center opacity-80' src={backgroundBanner}/>
   </div>
   <div className='z-100  pt-[50%] md:pt-0'>
   <TmdbSearchBar/>
   </div>
   </>
  )
}

export default TmdbSearch;