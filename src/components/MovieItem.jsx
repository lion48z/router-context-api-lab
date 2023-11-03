import { Link } from 'react-router-dom';

const MovieItem = ({ title, plot, imgUrl, imdbID }) => {
  return (
    <div>
      <Link to={`/movie/${imdbID}`}>
        <h1>{title}</h1>
        <p>{plot}</p>
        <img src={imgUrl} alt={title} />
      </Link>
    </div>
  );
}

export default MovieItem;