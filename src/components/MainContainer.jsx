import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import TrailerVideo from './ShimmerUI/TrailerVideo'

const MainContainer = () => {
   const movies = useSelector(store => store.movies?.nowPlayingMovies)
    
   const mainMovie = movies?.[2] || {};
   const {original_title, overview, id} = mainMovie;

   if(!movies){
    return (<TrailerVideo/>)
   }else{
    return (<div><VideoTitle title={original_title}
       overview={overview}/>
        <VideoBackground movieId={id}/></div>)
   }
  
}

export default MainContainer