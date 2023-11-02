import { Link } from 'react-router-dom';

const MovieItem = ({ title, plot, imgUrl, movieId }) => {
  return (
    <div>
      <h1>
        <Link to={`/movie/${movieId}`}>{title}</Link>
      </h1>
      <p>{plot}</p>
      <img src={imgUrl} alt={title} />
    </div>
  );
}
export default MovieItem;

