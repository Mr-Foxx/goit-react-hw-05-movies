import { getMovieById } from 'API/fetchMovies';
import BackButton from 'components/BackButton/BackButton';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import {
  Li,
  P,
  Ul,
  Img,
  Container,
  ContainerText,
  NavLinkBtn,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovies] = useState(null);

  const location = useLocation();
  const defaultBackLink = location.state?.from ?? '/movies';
  const backLink = useRef(defaultBackLink);

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
      <Container>
        <div>
          <BackButton type="button" location={backLink.current} />
          <Img src={img} alt={title} width="600px" />
        </div>

        <ContainerText>
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
        </ContainerText>
      </Container>

      <div>
        <P>Additional information</P>

        <div>
          <Ul>
            <Li>
              <NavLinkBtn to={'cast'}>Cast</NavLinkBtn>
            </Li>
            <Li>
              <NavLinkBtn to={'reviews'}>Reviews</NavLinkBtn>
            </Li>
          </Ul>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
