import { getCredits } from 'API/fetchMovies';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Ul, Img, Li } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    const getCast = async movieId => {
      try {
        const response = await getCredits(movieId);
        // console.log('Cast =>> response', response);
        const data = response.data.cast;
        // console.log('Cast =>> data', data);
        setCast(data);
      } catch (error) {
        throw new Error(error.message);
      }
    };
    getCast(movieId);
  }, [movieId]);

  if (cast === null) {
    return;
  }

  return (
    <Ul>
      {cast.length > 0 ? (
        cast.map(({ id, original_name, profile_path }) => {
          let image = profile_path
            ? `https://image.tmdb.org/t/p/w500${profile_path}`
            : 'There is no image';

          return (
            <Li key={id}>
              <Img src={image} alt={original_name} />
              <p>{original_name}</p>
            </Li>
          );
        })
      ) : (
        <p>No Cast</p>
      )}
    </Ul>
  );
};

export default Cast;
