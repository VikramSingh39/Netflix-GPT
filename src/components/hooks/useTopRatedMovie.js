import { API_options } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addTopRatedMovie } from '../utils/movieSlice';
import { useEffect } from 'react';

const useTopRatedMovie = () => {
    const dispatch = useDispatch();

        const getTopRatedMovie = async () => {
        try {
            const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_options);
            const json = await data.json();
            dispatch(addTopRatedMovie(json.results));
        } catch (error) {
            console.error('Failed to fetch now playing movies:', error);
        }
      };

    useEffect(() => {
        getTopRatedMovie();
    }, []);
    return null;
}

export default useTopRatedMovie;