import axios from 'axios';
const KEY = '170e63a9b5389fb34c65bea351cdb965';
export const fetchTrendsMovie = () => {
  return axios.get(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${KEY}`
  );
};

export const fetchSearchFilms = value => {
  return axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${value}&api_key=${KEY}&language=en-US&page=1&include_adult=false`
  );
};

export const fetchSearchId = id => {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}&language=en-US`
  );
};

export const fetchGetActors = id => {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${KEY}&language=en-US`
  );
};

export const fetchGetReviews = id => {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${KEY}&language=en-US`
  );
};
