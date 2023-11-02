import{ useContext } from 'react'
import {MovieContext} from '../MovieContext';
import MovieItem from './MovieItem';
import {Container,Row} from 'react-bootstrap';

const MovieList = () => {
  const { state } = useContext(MovieContext);
  const movies = state.movies || [];

  if (state.loading) {
    return <p>Loading...</p>;
  }

  if (movies.length === 0) {
    return null;
  }

  return (
    <Container>
      <Row>
        {movies.map((movie) => (
          <MovieItem
            key={movie.imdbID}
            title={movie.Title}
            plot={movie.Plot}
            imgUrl={movie.Poster}
            //onClick={() => navigateToMovieDetails(movie.id)}
          />
        ))}
      </Row>
    </Container>
  );
}

export default MovieList;