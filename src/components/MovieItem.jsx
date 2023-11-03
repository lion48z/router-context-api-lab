import { Link } from 'react-router-dom';

const MovieItem = ({ title, plot, imgUrl, imdbID }) => {
  return (
    <div>
      <Link to={`/movie/${imdbID}`}>
        <img src={imgUrl} alt={title} />
      </Link>
      <div>
        <h1>
          <Link to={`/movie/${imdbID}`}>{title}</Link>
        </h1>
        <p>{plot}</p>
      </div>
    </div>
  );
}

export default MovieItem;