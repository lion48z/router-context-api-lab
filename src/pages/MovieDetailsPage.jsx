import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { MovieContext } from '../MovieContext';

const MovieDetailsPage = () => {
  const { state } = useContext(MovieContext);
  const { imdbId } = useParams();
  console.log('IMDb ID from URL:', imdbId);
  console.log('Movies from context:', state.movies);
  // Find the movie with the matching IMDb ID from the context
  const movie = state.movies.find((m) => m.imdbID === imdbId);
  console.log('Matching Movie:', movie);
  if (!movie) {
    return <p>Movie not found</p>;
  }

  return (
    <div>
      <h2>{movie.Title}</h2>
      <p>{movie.Plot}</p>
      <img src={movie.Poster} alt={movie.Title} />
      <p>IMDb ID: {movie.imdbID}</p>
    </div>
  );
};



export default MovieDetailsPage

