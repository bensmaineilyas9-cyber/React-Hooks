import { useState } from 'react';
import { Container, Button } from 'reactstrap';
import { Routes, Route } from 'react-router-dom';
import Filter from './components/Filter';
import MovieList from './components/MovieList';
import AddMovieModal from './components/AddMovieModal';
import MovieDetail from './components/MovieDetail';

const initialMovies = [
  {
    id: 1,
    title: 'Inception',
    description: 'A thief who steals corporate secrets through dream-sharing technology.',
    posterURL: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg',
    rating: 5,
    trailerURL: 'https://www.youtube.com/embed/YoHD9XEInc0',
  },
  {
    id: 2,
    title: 'The Dark Knight',
    description: 'Batman faces the Joker, a criminal mastermind who plunges Gotham into anarchy.',
    posterURL: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg',
    rating: 5,
    trailerURL: 'https://www.youtube.com/embed/EXeTwQWrcwY',
  },
  {
    id: 3,
    title: 'Interstellar',
    description: 'A team of explorers travel through a wormhole in space to ensure humanitys survival.',
    posterURL: 'https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_.jpg',
    rating: 4,
    trailerURL: 'https://www.youtube.com/embed/zSWdZVtXT7E',
  },
];

function App() {
  const [movies, setMovies] = useState(initialMovies);
  const [filterTitle, setFilterTitle] = useState('');
  const [filterRating, setFilterRating] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => setModalOpen(!modalOpen);

  const handleAdd = (newMovie) => {
    setMovies((prev) => [...prev, { ...newMovie, id: Date.now() }]);
  };

  const handleDelete = (id) => {
    setMovies((prev) => prev.filter((m) => m.id !== id));
  };

  const filteredMovies = movies.filter((m) => {
    const matchesTitle = m.title.toLowerCase().includes(filterTitle.toLowerCase());
    const matchesRating = m.rating >= filterRating;
    return matchesTitle && matchesRating;
  });

  const home = (
    <Container className="py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="mb-0">My Movie List</h2>
        <Button color="primary" onClick={toggleModal}>
          + Add Movie
        </Button>
      </div>

      <Filter
        title={filterTitle}
        onTitleChange={setFilterTitle}
        rating={filterRating}
        onRatingChange={setFilterRating}
      />

      <MovieList movies={filteredMovies} onDelete={handleDelete} />

      <AddMovieModal isOpen={modalOpen} toggle={toggleModal} onAdd={handleAdd} />
    </Container>
  );

  return (
    <Routes>
      <Route path="/" element={home} />
      <Route path="/movies/:id" element={<MovieDetail movies={movies} />} />
    </Routes>
  );
}

export default App;
