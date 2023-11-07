import React from 'react';
import { Link } from 'react-router-dom';
import { Card, ListGroup } from 'react-bootstrap';

function MovieList({ movies }) {
  const customPosterStyle = {
    width: '300px',
    height: '400px', 
  };

  return (
    <div>
      <h3>Search Results</h3>
      <ListGroup>
        {movies.map((movie) => (
          <ListGroup.Item key={movie.imdbID}>
            <Link to={`/movie/${movie.imdbID}`}>
              <Card>
                <Card.Img
                  variant="top"
                  src={movie.Poster}
                  alt={movie.Title}
                  style={customPosterStyle} 
                />
                <Card.Body>
                  <Card.Title>{movie.Title}</Card.Title>
                  <Card.Text>({movie.Year})</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default MovieList;


