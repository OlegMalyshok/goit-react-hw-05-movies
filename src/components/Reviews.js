import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=118bde756ee111f8e66b14be4b4bb007`
        );
        const data = await response.json();
        setReviews(data.results);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, [movieId]);

  return (
    <>
      {reviews.length === 0 && <p>There are no reviews found</p>}

      {reviews.map(review => (
        <ul key={review.id}>
          <li>
            <h2>Author: {review.author}</h2>
            <p>{review.content}</p>
          </li>
        </ul>
      ))}
    </>
  );
};

export default Reviews;
