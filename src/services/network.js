export const API_KEY = "026890b0945cbc402813edbeb90f0223";
export const BASE_URL = "https://api.themoviedb.org/3/";

export const getSearchedMoviesByTitle = async (searchMovieTitle, currPage) => {
  try {
    const fetchMovies = await fetch(
      `${BASE_URL}search/movie?api_key=${API_KEY}&query=${searchMovieTitle}&language=fr-FR&include_adult=false&page=${currPage}`
    );
    return await fetchMovies.json();
  } catch (error) {
    console.log(error);
  }
};

export const getTopRatedMovies = async (currPage) => {
  try {
    const fetchTopRatedMovie = await fetch(
      `${BASE_URL}movie/top_rated?api_key=${API_KEY}&language=fr-FR&page=${currPage}`
    );
    return await fetchTopRatedMovie.json();
  } catch (error) {
    console.log(error);
  }
};
