import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  StyledRewiev,
  StyledRewievTitle,
  RewievItem,
} from './Reviews.styled';
import { getMovieRewievsById } from 'components/MoviesAPI/MoviesAPI';
import { Title } from 'components/PageTitle/PageTitle';

const Reviews = () => {
  const [rewievs, setRewievs] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieRewievsById(Number(movieId))
      .then(({ results }) => setRewievs(results))
      .catch(error => console.log(error));
  }, [movieId]);

  if (rewievs.length === 0) {
    return <Title text={"We don't have any rewievs for this movie"} />;
  }

  return (
    <ul>
      {rewievs.map(({ id, author, content }) => (
        <RewievItem key={id}>
          <StyledRewievTitle>Author name: {author} </StyledRewievTitle>
          <StyledRewiev>{content}</StyledRewiev>
        </RewievItem>
      ))}
    </ul>
  );
};

export default Reviews;
