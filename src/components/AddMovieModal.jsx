import { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Input, Label, FormGroup, Form } from 'reactstrap';

const initialState = { title: '', description: '', posterURL: '', rating: '', trailerURL: '' };

function AddMovieModal({ isOpen, toggle, onAdd }) {
  const [form, setForm] = useState(initialState);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.title.trim() || !form.rating) return;
    onAdd({
      ...form,
      rating: Number(form.rating),
    });
    setForm(initialState);
    toggle();
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Add New Movie</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label for="title">Title *</Label>
            <Input
              id="title"
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Movie title"
            />
          </FormGroup>
          <FormGroup>
            <Label for="description">Description</Label>
            <Input
              id="description"
              name="description"
              type="textarea"
              rows="3"
              value={form.description}
              onChange={handleChange}
              placeholder="Brief description"
            />
          </FormGroup>
          <FormGroup>
            <Label for="posterURL">Poster URL</Label>
            <Input
              id="posterURL"
              name="posterURL"
              value={form.posterURL}
              onChange={handleChange}
              placeholder="https://..."
            />
          </FormGroup>
          <FormGroup>
            <Label for="trailerURL">Trailer URL (embed link)</Label>
            <Input
              id="trailerURL"
              name="trailerURL"
              value={form.trailerURL}
              onChange={handleChange}
              placeholder="https://www.youtube.com/embed/..."
            />
          </FormGroup>
          <FormGroup>
            <Label for="rating">Rating *</Label>
            <Input
              id="rating"
              name="rating"
              type="select"
              value={form.rating}
              onChange={handleChange}
            >
              <option value="">Select rating</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </Input>
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={toggle}>Cancel</Button>
        <Button
          color="primary"
          onClick={handleSubmit}
          disabled={!form.title.trim() || !form.rating}
        >
          Add Movie
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default AddMovieModal;
