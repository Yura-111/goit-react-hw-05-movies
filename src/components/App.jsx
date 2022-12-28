import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';
import { Home } from 'page/Home/Home';
import { Movies } from 'page/Movies/Movies';
import { Posters } from 'components/Posters/Posters';
import { Loader } from 'components/Loader/Loader';
import { NotFoundPage } from 'page/Error/NotFoundPage';

const MovieDetails = lazy(() => import('page/DetailsMovie/DetailsMovie'));
// const Home = lazy(() => import('page/Home/Home'));
const Cast = lazy(() => import('components/Cast/Cast'));
// const Movies = lazy(() => import('page/Movies/Movies'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));

export const App = () => {
  return (
    <>
      <Routes>
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
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};
