import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieById } from '../services/api'; 

const MovieDetailsPage = () => {
  const { imdbID } = useParams(); 
  console.log("imdbID:", imdbID);
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    
    fetchMovieById(imdbID)
      .then((data) => {
        setMovieDetails(data);
      })
      .catch((error) => {
        console.error('Error fetching movie details', error);
      });
  }, [imdbID]);

  return (
    <div>
      <h3>Movie Details</h3>
      {movieDetails ? (
        <div>
          <h1>{movieDetails.Title}</h1>
          <p>{movieDetails.Plot}</p>
          <img src={movieDetails.Poster} alt={movieDetails.Title} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MovieDetailsPage;

