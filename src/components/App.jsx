import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Home } from 'pages/Home/Home';
import { Movies } from 'pages/Movies/Movies';
import { Posters } from './Posters/Posters';
import { Loader } from './Loader/Loader';
import { NotFoundPage } from 'pages/NotFoundPage/NotFoundPage';

const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));

const Cast = lazy(() => import('./Cast/Cast'));

const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route
            path="/movies/:movieId"
            element={
              <Suspense fallback={<Loader />}>
                <MovieDetails />
              </Suspense>
            }
          >
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="posters" element={<Posters />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
