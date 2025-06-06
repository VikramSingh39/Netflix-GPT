import { useSelector } from 'react-redux';
import Header   from './Header';
import useNowPlaying from './hooks/useNowPlaying';
import usePopularMovie from './hooks/usePopularMovie';
import useTopRatedMovie from './hooks/useTopRatedMovie';
import useUpcomingMovie from './hooks/useUpcomingMovie';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import TmdbSearch from './TMDB_Search_Feature/TmdbSearch';

const Browse = ()=>{
   useNowPlaying();
   usePopularMovie();
   useTopRatedMovie();
   useUpcomingMovie();
   const showTmdbSearch = useSelector(store=> store.tmdb.showTmdbSearch);
    return(
        <>
        <Header />
        {
        showTmdbSearch? (<TmdbSearch/>):(<>
        <MainContainer/>
        <SecondaryContainer/>
            </>)
        }
       

        </>

    )
};

export default Browse; 