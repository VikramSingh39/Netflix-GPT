import { API_options } from '../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { addUpcomingMovie } from '../utils/movieSlice';
import { useEffect } from 'react';

const useUpcomingMovie = () => {
    const dispatch = useDispatch();
const upcomingMovie = useSelector(store => store.movies.upcomingMovie);
        const getUpcomingMovie = async () => {
        try {
            const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_options);
            const json = await data.json();
            dispatch(addUpcomingMovie(json.results));
        } catch (error) {
            console.error('Failed to fetch now playing movies:', error);
        }
      };

    useEffect(() => {
       if(!upcomingMovie) getUpcomingMovie();
    }, []);
    return null;
}

export default useUpcomingMovie;