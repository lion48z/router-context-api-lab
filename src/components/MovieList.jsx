import{ useContext } from 'react'
import MovieContext from '../context/MovieContext';
import MovieItem from './MovieItem';
import {Container,Row} from 'react-bootstrap';


const MovieList = () => {
  const { state } = useContext(MovieContext);
  const movies = state.movies || [];
  return (
    <Container>
    <Row>
       {movies.map((movie) => (
         <MovieItem
           key={movie.id}
           title={movie.title}
           plot={movie.plot}
           imgUrl={movie.imgUrl}
         />
       ))}
       </Row>
   </Container>
  )
}

export default MovieList
