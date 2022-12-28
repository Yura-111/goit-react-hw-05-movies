import { Title } from 'components/PageTitle/PageTitle';
import { getFilmPostersById } from 'components//MoviesAPI/MoviesAPI';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ImageItem, ImagesList } from './Posters.styled';

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';

export const Posters = () => {
  const [images, setImages] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getFilmPostersById(Number(movieId))
      .then(({ backdrops }) => setImages(backdrops))
      .catch(error => console.log(error));
  }, [movieId]);

  if (images.length === 0) {
    return <Title text="No posters for this movie" />;
  }

  return (
    <ImagesList>
      {images.map(({ file_path }) => (
        <ImageItem key={file_path}>
          <img
            src={`${BASE_IMG_URL}${file_path}`}
            alt="Movie poster"
            width="320px"
            height="190px"
            loading="lazy"
          ></img>
        </ImageItem>
      ))}
    </ImagesList>
  );
};
