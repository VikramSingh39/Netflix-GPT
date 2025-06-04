import { useDispatch } from "react-redux";
import { API_options } from '../utils/constant';
import { addTrailerVideo } from '../utils/movieSlice';
import { useEffect } from "react";

const useFetchTrailer = (movieId)=>{
    const dispatch = useDispatch();

    const getMovieTrailer = async()=>{
      const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_options)

      const json = await data.json();
      const filterTrailer = json.results.filter((video)=> video.type == "Trailer");
      const trailer =filterTrailer.length ? filterTrailer[0] : json.results[0];

      dispatch(addTrailerVideo(trailer));
    }; 
 
    useEffect(()=>{
      getMovieTrailer();
    }, []);

}

export default useFetchTrailer;