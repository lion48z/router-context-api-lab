import { Container, Row  } from "react-bootstrap";
const MovieItem = ({ title, plot, imgUrl }) => {
  return (
    <Container>
     {/*} <Row>
        {movies.map((movie) => (
          <MovieItem
            key={movie.id}
            title={movie.title}
            plot={movie.plot}
            imgUrl={movie.imgUrl}
          />
        ))}
        </Row>*/}
    </Container>
  );
};

