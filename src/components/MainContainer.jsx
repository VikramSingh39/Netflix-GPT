import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground'
import TrailerShimmer from './ShimmerUI/TrailerShimmer'
import Footer from './Footer'

const MainContainer = () => {
   const movies = useSelector(store => store.movies?.nowPlayingMovies)
    
   const mainMovie = movies?.[2] || {};
   const {original_title, overview, id} = mainMovie;

   if(!movies){
    return (<TrailerShimmer/>)
   }else{
    return (<div>
        <VideoBackground movieId={id}/>
        </div>)
   }
  
}

export default MainContainer