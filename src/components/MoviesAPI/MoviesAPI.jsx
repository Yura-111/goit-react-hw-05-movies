import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const API_KEY = 'e862719ae3fd0863df1748cb2452c82b';

export const getTrandings = async () => {
  const response = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);

  return response.data;
};

export const getFilmsByKeywords = async query => {
  const response = await axios.get(
    `/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
  );

  return response.data;
};

export const getFilmsDetailsById = async filmId => {
  const response = await axios.get(
    `/movie/${filmId}?api_key=${API_KEY}&language=en-US`
  );

  return response.data;
};

export const getMovieCreditsById = async filmId => {
  const response = await axios.get(
    `/movie/${filmId}/credits?api_key=${API_KEY}&language=en-US`
  );

  return response.data;
};

export const getMovieRewievsById = async filmId => {
  const response = await axios.get(
    `/movie/${filmId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );

  return response.data;
};

export const getFilmPostersById = async filmId => {
  const response = await axios.get(
    `/movie/${filmId}/images?api_key=${API_KEY}&include_image_language=null,en-US`
  );

  return response.data;
};
