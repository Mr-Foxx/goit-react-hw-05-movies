import { getTrendingMovies } from 'API/fetchMovies';
import ListMovies from 'components/ListMovie/LiestMovie';
import { useEffect } from 'react';
import { useState } from 'react';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await getTrendingMovies();
        const data = response.data.results;
        setMovies(data);
      } catch (error) {
        throw new Error(error.message);
      }
    };
    getMovies();
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <ListMovies movies={movies} />
    </>
  );
};

export default Home;
