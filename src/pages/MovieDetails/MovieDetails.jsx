import { useState, useEffect, useRef } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import { getFilmsDetailsById } from 'components/MoviesAPI/MoviesAPI';
import { Link } from 'components/Link/Link';
import { DetailsTitle } from 'components/PageTitle/PageTitle';
import { Description } from 'components/Description/Description';
import { Additional } from 'components/Additional/Additional';

const MovieDetails = () => {
  const [filmDetails, setFilmDetails] = useState(null);
  const { movieId } = useParams();
  const location = useRef(useLocation());

  useEffect(() => {
    getFilmsDetailsById(Number(movieId))
      .then(setFilmDetails)
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <main>
      <Link
        to={location.current.state?.from ?? '/'}
        text={'Go back'}
        icon={<BiArrowBack />}
      />

      {filmDetails ? (
        <Description movie={filmDetails} />
      ) : (
        <DetailsTitle>
          We don't have any information about this movie
        </DetailsTitle>
      )}

      <Additional />
    </main>
  );
};

export default MovieDetails;
