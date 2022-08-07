import React, { useCallback, useEffect, useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';
import AddMovie from './components/AddMovie';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    setIsloading(true);
    setError(null);
    try {
      const response = await fetch('https://react-http-a3c85-default-rtdb.firebaseio.com/movie.json');

      const data = await response.json();
      console.log(data);

      const loadedMovies = [];

      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate
        })
      }

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      setMovies(loadedMovies);
    } catch (error) {
      setError(error.message);
    }
    setIsloading(false);
  }, []);

  console.log(fetchMoviesHandler);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler])

  async function addMovieHandler(movie) {
    console.log(movie);
    const response = await fetch('https://react-http-a3c85-default-rtdb.firebaseio.com/movie.json', {
      method: 'POST',
      body: JSON.stringify(movie),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    console.log(data);
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler}></AddMovie>
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && <p>Found no movies.</p>}
        {isLoading && <p>Loading</p>}
        {!isLoading && error && <p>error</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
