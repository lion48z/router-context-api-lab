import{ useContext } from 'react'
import {MovieContext} from '../MovieContext';
import MovieItem from './MovieItem';
import { Container,Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
          <Link
            to={{
              pathname: `/movie/${movie.imdbID}`,
              state: { movie },
            }}
            key={movie.imdbID}
          >
           <MovieItem
          title={movie.Title}
          plot={movie.Plot}
          imgUrl={movie.Poster}
          imdbId={movie.imdbID}
          />
         
          </Link>
         
       
        ))}
     </Row>
          </Container>
  );
}

export default MovieList;