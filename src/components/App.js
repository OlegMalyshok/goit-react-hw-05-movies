import Home from '../pages/Home';
import Movies from '../pages/Movies';
import MovieDetails from './MovieDetails';
import Cast from './Cast';
import Reviews from './Reviews';
import { Routes, Route } from 'react-router-dom';

import { SharedLayout } from './SharedLayout';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="/movies/:movieId/cast" element={<Cast />} />
            <Route path="/movies/:movieId/reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
