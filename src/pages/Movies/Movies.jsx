import { getSearchMovie } from 'API/fetchMovies';
import ListMovies from 'components/ListMovie/LiestMovie';
import SearchForm from 'components/SearchForm/SearchForm';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState('');
  const [data, setData] = useState([]);

  const filterParam = searchParams.get('query') ?? '';

  useEffect(() => {
    if (filterParam === '') {
      return;
    }

    const getMovies = async filterParam => {
      try {
        const response = await getSearchMovie(filterParam);

        const data = response.results;

        setData(data);
      } catch (error) {
        throw new Error(error.message);
      }
    };

    getMovies(filterParam);
  }, [filterParam]);

  const handleChangeInput = value => {
    setQuery(value);
  };

  const nandleSubmit = () => {
    setSearchParams(query !== '' ? { query } : {});
  };

  return (
    <>
      <SearchForm
        handleChangeInput={handleChangeInput}
        nandleSubmit={nandleSubmit}
      />
      <ListMovies movies={data} />
    </>
  );
};

export default Movies;
