import { useSelector } from 'react-redux';
import GptSearch from './GptSearch';
import Header   from './Header';
import useNowPlaying from './hooks/useNowPlaying';
import usePopularMovie from './hooks/usePopularMovie';
import useTopRatedMovie from './hooks/useTopRatedMovie';
import useUpcomingMovie from './hooks/useUpcomingMovie';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = ()=>{
   useNowPlaying();
   usePopularMovie();
   useTopRatedMovie();
   useUpcomingMovie();
   const showGptSearch = useSelector(store=> store.gpt.showGptSearch);
    return(
        <>
        <Header />
        {
        showGptSearch? (<GptSearch/>):(<>
        <MainContainer/>
        <SecondaryContainer/>
            </>)
        }
       

        </>

    )
};

export default Browse; 