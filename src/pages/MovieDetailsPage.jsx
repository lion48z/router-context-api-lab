import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { MovieContext } from '../MovieContext';
import { fetchMovieById } from '../services/api'; // Import the modified fetchMovieById function

const MovieDetailsPage = () => {
  const { state } = useContext(MovieContext);
  const { imdbID } = useParams();
  console.log('IMDb ID from URL:', imdbID);
  console.log('Movies from context:', state.movies);
  const jsonMovieData = []; // Replace with your JSON response data

  // Fetch movie details with the IMDb ID and the JSON response data
  const movie = fetchMovieById(imdbID, jsonMovieData);

  if (!movie) {
    return <p>Movie not found</p>;
  }

  return (
    <div>
      <h2>{movie.Title}</h2>
      <p>{movie.Plot}</p>
      <img src={movie.Poster} alt={movie.Title} />
      <p>IMDB ID: {movie.imdbID}</p>
    </div>
  );
};

export default MovieDetailsPage;
