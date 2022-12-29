import { Box } from 'components/Box';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { StyledItem, StyledLink } from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <Box as={'ul'} ml="24px">
      {movies.map(({ id, title, release_date }) => (
        <StyledItem key={id}>
          <StyledLink to={`/movies/${id}`} state={{ from: location }}>
            {title} {release_date && `(${release_date.slice(0, 4)})`}
          </StyledLink>
        </StyledItem>
      ))}
    </Box>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      release_date: PropTypes.string,
    })
  ),
};
