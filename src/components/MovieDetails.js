import React, { useState, useEffect } from 'react';
import { Link, useParams, useLocation, Outlet } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();

  const [movie, setMovie] = useState({});
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=118bde756ee111f8e66b14be4b4bb007`
        );
        const data = await response.json();
        setMovie(data);
        setGenres(data.genres);
        // console.log(data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchData();
  }, [movieId]);

  const yearCount = () => {
    if (!movie.release_date) {
      return;
    }
    return movie.release_date.slice(0, 4);
  };

  return (
    <div>
      <Link to={location.state?.from ?? '/'}>
        <button>← Go back</button>
      </Link>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}?api_key=118bde756ee111f8e66b14be4b4bb007`}
          alt="movie poster"
        />
        <div>
          <h2>
            {movie.title} ({yearCount()})
          </h2>
          <p>User score: {movie.vote_average}%</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h4>Genres</h4>
          <div>
            {genres.map(item => (
              <ul key={item.id}>
                <li>{item.name}</li>
              </ul>
            ))}
          </div>
        </div>
      </div>
      <div>
        <h4>Additional information</h4>
        <ul>
          <li>
            <Link to={`/movies/${movieId}/cast`}>CAST</Link>
          </li>
          <li>
            <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
