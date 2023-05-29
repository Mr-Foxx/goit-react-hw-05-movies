import { ThemeProvider } from 'styled-components';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import { theme } from '../theme/theme';
import { lazy } from 'react';

const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const Cast = lazy(() => import('./Cast/Cast'));
const Rewiews = lazy(() => import('./Rewiews/Rewiews'));

export const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="/movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Rewiews />} />
            </Route>
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  );
};
