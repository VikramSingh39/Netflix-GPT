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
    return(
        <>
        <Header />
        <MainContainer/>
        <SecondaryContainer/>
        </>
    )
};

export default Browse; 