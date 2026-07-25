import { Card, CardBody, CardTitle, CardText, Button, Badge } from 'reactstrap';

function MovieCard({ movie, onDelete }) {
  return (
    <Card className="mb-3 shadow-sm h-100">
      <img
        src={movie.posterURL || 'https://via.placeholder.com/300x450?text=No+Poster'}
        alt={movie.title}
        style={{ width: '100%', height: '250px', objectFit: 'cover' }}
      />
      <CardBody className="d-flex flex-column">
        <CardTitle tag="h5" className="d-flex justify-content-between align-items-start">
          {movie.title}
          <Badge color="warning" pill>{movie.rating}/5</Badge>
        </CardTitle>
        <CardText className="text-muted small flex-grow-1">
          {movie.description}
        </CardText>
        <Button color="danger" size="sm" onClick={() => onDelete(movie.id)}>
          Delete
        </Button>
      </CardBody>
    </Card>
  );
}

export default MovieCard;
