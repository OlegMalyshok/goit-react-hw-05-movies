import React, { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const HomePage = () => {
  const [trends, setTrends] = useState([]);
  const [, setParams] = useSearchParams();
  const location = useLocation();

  const UpdId = trendId => {
    setParams({ id: trendId });
  };

  useEffect(() => {
    const fetchTrends = async () => {
      try {
        const response = await fetch(
          'https://api.themoviedb.org/3/trending/all/day?language=en-US&api_key=118bde756ee111f8e66b14be4b4bb007'
        );
        const data = await response.json();
        setTrends(data.results);
      } catch (error) {
        console.error('Error fetching trends:', error);
      }
    };

    fetchTrends();
  }, []);

  console.log(location);

  return (
    <>
      <p>Trending Today</p>
      <ul>
        {trends.map(film =>
          film.title ? (
            <Link
              to={`/movies/${film.id}`}
              key={film.id}
              state={{ from: location }}
              onClick={() => UpdId(film.id)}
            >
              <li>{film.title}</li>
            </Link>
          ) : null
        )}
      </ul>
    </>
  );
};

export default HomePage;
