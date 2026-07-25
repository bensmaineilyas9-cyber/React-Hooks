import { Row, Col, Input, Label } from 'reactstrap';

function Filter({ title, onTitleChange, rating, onRatingChange }) {
  return (
    <Row className="mb-4 g-3 align-items-end">
      <Col md="6">
        <Label for="titleFilter" className="form-label fw-semibold">Search by Title</Label>
        <Input
          id="titleFilter"
          type="text"
          placeholder="Type a movie title..."
          value={title}
          onChange={(e) => onTitleChange(e.target.value)}
        />
      </Col>
      <Col md="6">
        <Label for="ratingFilter" className="form-label fw-semibold">Minimum Rating</Label>
        <Input
          id="ratingFilter"
          type="select"
          value={rating}
          onChange={(e) => onRatingChange(Number(e.target.value))}
        >
          <option value={0}>All Ratings</option>
          <option value={1}>1 & up</option>
          <option value={2}>2 & up</option>
          <option value={3}>3 & up</option>
          <option value={4}>4 & up</option>
          <option value={5}>5 only</option>
        </Input>
      </Col>
    </Row>
  );
}

export default Filter;
