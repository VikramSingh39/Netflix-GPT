import Header   from './Header';
import useNowPlaying from './hooks/useNowPlaying';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = ()=>{
   useNowPlaying();

    return(
        <>
        <Header />
        <MainContainer/>
        <SecondaryContainer/>
        </>
    )
};

export default Browse; 