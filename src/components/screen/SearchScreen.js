import React, { useState, useEffect } from "react";
import ListResults from "../ListResults";
import Search from "../Search";
import { Text, StyleSheet, StatusBar } from "react-native";

export const API_KEY = "026890b0945cbc402813edbeb90f0223";
export const BASE_URL = "https://api.themoviedb.org/3/";

const SearchScreen = () => {
  const [searchMovieTitle, setSearchMovieTitle] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [currPage, setCurrPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    searchMovieTitle != "" ? getSearchedMoviesByTitle() : getTopRatedMovies();
  }, [setSearchMovieTitle]);

  const getSearchedMoviesByTitle = () => {
    fetch(
      `${BASE_URL}search/movie?api_key=${API_KEY}&query=${searchMovieTitle}&language=fr-FR&include_adult=false&page=1`
    )
      .then((response) => response.json())
      .then((json) => {
        setMovies(json.results);
      })
      .catch((error) => {
        setError(error.error);
      });
  };

  const getTopRatedMovies = () => {
    fetch(
      `${BASE_URL}movie/top_rated?api_key=${API_KEY}&language=fr-FR&page=${currPage}`
    )
      .then((response) => response.json())
      .then((json) => {
        setMovies([...movies, ...json.results]);
        setTotalPage(json.total_pages);
        console.log(movies);
      })
      .catch((error) => {
        setError(error.error);
      });
  };

  const onReachedEnd = () => {
    const incrementedPage = currPage + 1;
    setCurrPage(incrementedPage);

    if (incrementedPage <= totalPage) {
      getTopRatedMovies();
    }
  };

  return (
    <>
      <StatusBar barStyle={"light-content"}></StatusBar>
      <Search setSearchMovieTitle={setSearchMovieTitle} />
      {error === null ? (
        <ListResults movies={movies} onReached={onReachedEnd} />
      ) : (
        <Text style={styles.error}>{error}</Text>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  error: {
    color: "red",
    flex: 1,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
    marginTop: 20,
  },
});

export default SearchScreen;
