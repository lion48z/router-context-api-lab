import React from 'react';

const MovieItem = ({ title, plot, imgUrl }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{plot}</p>
      <img src={imgUrl} alt={title} />
    </div>
  );
}

export default MovieItem;

