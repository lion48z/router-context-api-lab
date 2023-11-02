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
            key={movie.id}
            title={movie.title}
            plot={movie.plot}
            imgUrl={movie.imgUrl}
            //onClick={() => navigateToMovieDetails(movie.id)}
          />
        ))}
      </Row>
    </Container>
  );
}

