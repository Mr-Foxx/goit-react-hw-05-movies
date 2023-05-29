import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewsMovies } from 'API/fetchMovies';
import { P } from './Rewiews.styled';

const Rewiews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    const getReviews = async id => {
      try {
        const resp = await getReviewsMovies(id);
        const data = resp.data.results;
        setReviews(data);
      } catch (error) {}
    };

    getReviews(movieId);
  }, [movieId]);

  if (reviews === null) {
    return;
  }

  return (
    <>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(({ author, content, id }) => (
            <li key={id}>
              <h2>{author}</h2>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <P>No reviews</P>
      )}
    </>
  );
};

export default Rewiews;
