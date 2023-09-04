import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Cast() {
  const [actors, setActors] = useState([]);
  const { movieId } = useParams();

  const baseApiUrl = 'https://image.tmdb.org/t/p/w500';
  const apiKey = '118bde756ee111f8e66b14be4b4bb007';

  useEffect(() => {
    const fetchCastData = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`
        );
        const data = await response.json();
        setActors(data.cast);
      } catch (error) {
        console.error('Error fetching cast data:', error);
      }
    };

    fetchCastData();
  }, [movieId]);

  return (
    <>
      <p>CAST</p>
      <ul>
        {actors.map(actor => (
          <li key={actor.id}>
            <img
              src={`${baseApiUrl}${actor.profile_path}?api_key=${apiKey}`}
              alt={actor.name}
            />
            <p>{actor.name}</p>
            <p>Character: {actor.character}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Cast;
