import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { StyledBtn, StyledInput, SearchBar } from './Movies.styled';
import { getFilmsByKeywords } from 'components/MoviesAPI/MoviesAPI';

export const Movies = () => {
  const [filmList, setFilmList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const searchQry = searchParams.get('query');

  useEffect(() => {
    if (!searchQry) {
      return;
    }
    getFilmsByKeywords(searchQry)
      .then(({ results }) => setFilmList(results))
      .catch(error => console.log(error));
  }, [searchQry]);

  const onSearchFilm = evt => {
    evt.preventDefault();

    const seacrhQry = evt.target.elements.search.value;
    setSearchParams(seacrhQry !== '' ? { query: seacrhQry.trim() } : {});

    evt.target.reset();
  };

  return (
    <main>
      <SearchBar onSubmit={onSearchFilm}>
        <StyledInput name="search" autoComplete="off" />
        <StyledBtn type="submit">Search</StyledBtn>
      </SearchBar>
      {filmList.length > 0 && <MoviesList movies={filmList} />}
    </main>
  );
};
