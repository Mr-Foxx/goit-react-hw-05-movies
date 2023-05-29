import { useLocation } from 'react-router-dom';
import { Ul, Li, LinkItem } from './LiestMovie.styled';

const ListMovies = ({ movies }) => {
  const location = useLocation();

  return (
    <Ul>
      {movies.map(movie => (
        <Li key={movie.id}>
          <LinkItem to={`/movies/${movie.id}`} state={{ from: location }}>
            {movie.title}
          </LinkItem>
        </Li>
      ))}
    </Ul>
  );
};

export default ListMovies;
