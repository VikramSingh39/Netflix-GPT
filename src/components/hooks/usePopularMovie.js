import { API_options } from '../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { addPopularMovie } from '../utils/movieSlice';
import { useEffect } from 'react';

const usePopularMovie = () => {
    const dispatch = useDispatch();
const popularMovies = useSelector(store => store.movies.popularMovie);
        const getPopularMovie = async () => {
        try {
            const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_options);
            const json = await data.json();
            dispatch(addPopularMovie(json.results));
        } catch (error) {
            console.error('Failed to fetch now playing movies:', error);
        }
      };

    useEffect(() => {
       if(!popularMovies) getPopularMovie();
    }, []);
    return null;
}

export default usePopularMovie;