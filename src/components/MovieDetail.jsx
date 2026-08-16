import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button, Badge } from 'reactstrap';

function MovieDetail({ movies }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movies.find((m) => m.id === Number(id));

  if (!movie) {
    return (
      <Container className="py-5 text-center">
        <h4>Movie not found</h4>
        <Button color="primary" onClick={() => navigate('/')}>
          Back to Home
        </Button>
      </Container>
    );
  }

  return (
    <Container className="py-4">
      <Button color="secondary" onClick={() => navigate('/')} className="mb-4">
        &larr; Back to Home
      </Button>

      <Row>
        <Col md="4" className="mb-4 mb-md-0">
          <img
            src={movie.posterURL || 'https://via.placeholder.com/300x450?text=No+Poster'}
            alt={movie.title}
            style={{ width: '100%', borderRadius: '8px' }}
          />
        </Col>
        <Col md="8">
          <h2 className="d-flex justify-content-between align-items-start">
            {movie.title}
            <Badge color="warning" pill>{movie.rating}/5</Badge>
          </h2>
          <p className="text-muted">{movie.description}</p>

          {movie.trailerURL ? (
            <div className="ratio ratio-16x9">
              <iframe
                src={movie.trailerURL}
                title={`${movie.title} trailer`}
                allowFullScreen
              />
            </div>
          ) : (
            <p className="text-muted">No trailer available for this movie.</p>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default MovieDetail;
