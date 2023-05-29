import { getTrendingMovies } from 'API/fetchMovies';
import ListMovies from 'components/ListMovie/LiestMovie';
import { useEffect } from 'react';
import { useState } from 'react';
import { H1 } from './Home.styled';

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
      <H1>Trending today</H1>
      <ListMovies movies={movies} />
    </>
  );
};

export default Home;
