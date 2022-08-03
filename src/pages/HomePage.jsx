import { fetchTrendsMovie } from 'Api/FetchApi';
import { MovieList } from 'components/MovieList/MovieList';
import { useState, useEffect } from 'react';

export const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendsMovie()
      .then(res => {
        setMovies(res.data.results);
      })
      .catch(error => console.log(error));
  }, []);

  return <MovieList arrayOfFilms={movies} />;
};
