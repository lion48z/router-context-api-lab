import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieById } from '../services/api';

const MovieDetailsPage = () => {
  const { imdbId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        const details = await fetchMovieById(imdbId);
        //console.log(details);
       setMovieDetails(details);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    }
    fetchMovieDetails();
  }, [imdbId]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Movie Details</h2>
      <div>
        <h3>{movieDetails.Title} ({movieDetails.Year}) {movieDetails.Rated}</h3>
        <img src={movieDetails.Poster} alt={movieDetails.Title} />
        <p>{movieDetails.Plot} </p>
        <p>Actors:{movieDetails.Actors}</p>
      </div>
    </div>
  );
};

export default MovieDetailsPage;

