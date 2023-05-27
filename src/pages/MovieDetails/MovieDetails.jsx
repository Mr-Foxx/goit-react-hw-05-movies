import { getMovieById } from 'API/fetchMovies';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, NavLink, Outlet, useParams } from 'react-router-dom';

const MovieDetails = () => {
  <div>MovieDetails</div>;

  const { movieId } = useParams();
  const [movie, setMovies] = useState(null);

  useEffect(() => {
    const getMovie = async movieId => {
      try {
        const response = await getMovieById(movieId);
        const data = response.data;

        setMovies(data);
      } catch (error) {
        throw new Error(error.message);
      }
    };

    getMovie(Number(movieId));
  }, [movieId]);

  if (movie === null) {
    return;
  }

  const { backdrop_path, genres, title, release_date, overview, vote_average } =
    movie;

  const releaseDate = release_date?.split('-');

  let img = backdrop_path
    ? `https://image.tmdb.org/t/p/w500${backdrop_path}`
    : 'There is no poster';

  return (
    <div>
      <div>
        <img src={img} alt={title} width="600px" />
      </div>

      <div>
        <h1>
          {title}
          <span>({releaseDate[0]})</span>
        </h1>
        <h3>
          Score: <span>{vote_average.toFixed(1)}</span>
        </h3>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genres.map(item => item.name).join(', ')}</p>
      </div>

      <p>Additional information</p>

      <div>
        <ul>
          <li>
            <NavLink to={'cast'}>Cast</NavLink>
          </li>
          <li>
            <NavLink to={'reviews'}>Reviews</NavLink>
          </li>

          {/* <li>
            <Link to={`/movies/${movieId}/cast`}>Cast</Link>
          </li>
          <li>
            <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
          </li> */}
        </ul>
        <Outlet />
      </div>
    </div>
  );
};

export default MovieDetails;
