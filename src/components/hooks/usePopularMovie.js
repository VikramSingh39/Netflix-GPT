import { API_options } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addPopularMovie } from '../utils/movieSlice';
import { useEffect } from 'react';

const usePopularMovie = () => {
    const dispatch = useDispatch();

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
        getPopularMovie();
    }, []);
    return null;
}

export default usePopularMovie;