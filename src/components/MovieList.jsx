import { Row, Col } from 'reactstrap';
import MovieCard from './MovieCard';

function MovieList({ movies, onDelete }) {
  if (movies.length === 0) {
    return (
      <div className="text-center text-muted py-5">
        <h5>No movies found</h5>
      </div>
    );
  }

  return (
    <Row>
      {movies.map((movie) => (
        <Col key={movie.id} xs="12" sm="6" md="4" lg="3" className="mb-4">
          <MovieCard movie={movie} onDelete={onDelete} />
        </Col>
      ))}
    </Row>
  );
}

export default MovieList;
