import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { API_options } from '../utils/constant';

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetail = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?language=en-US`,API_options);
      const data = await res.json();
      setMovie(data);
    };

    fetchMovieDetail();
  }, [id]);

  if (!movie) return <div className="text-white p-6">Loading...</div>;

  return (
    <div className="text-white p-8">
      <button onClick={() => navigate(-1)} className="text-red-400 mb-4">← Back</button>
      <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="w-60 rounded mb-4"
      />
      <p className="mb-2"><strong>Overview:</strong> {movie.overview}</p>
      <p className="mb-2"><strong>Release Date:</strong> {movie.release_date}</p>
      <p><strong>Rating:</strong> {movie.vote_average}</p>
    </div>
  );
};

export default MovieDetails;