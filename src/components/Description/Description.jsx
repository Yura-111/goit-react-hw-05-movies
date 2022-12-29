import PropTypes from 'prop-types';
import { DetailsTitle, MainTitle, Text } from 'components/PageTitle/PageTitle';
import { Poster, DescriptionStyled } from './Description.styled';
import { Box } from 'components/Box';

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';

export const Description = ({ movie }) => {
  const { poster_path, title, release_date, popularity, overview, genres } =
    movie;
  const genreList = [];

  genres.forEach(({ name }) => genreList.push(name));

  return (
    <DescriptionStyled>
      <Poster
        src={`${BASE_IMG_URL}${poster_path}`}
        alt={title}
        width="240px"
        height="auto"
      />
      <Box display="flex" justifyContent="space-around" flexDirection="column">
        <MainTitle text={`${title} (${release_date.slice(0, 4)})`} />
        <Text text={'User score:'}>
          <span>{Number.parseInt(popularity)}%</span>
        </Text>
        <DetailsTitle text={'Overview'} />
        <Text text={overview} />
        <DetailsTitle text={'Genres'} />
        <Text text={genreList.join(', ')} />
      </Box>
    </DescriptionStyled>
  );
};

Description.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    popularity: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.array,
  }),
};
