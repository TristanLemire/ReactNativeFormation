import React, { useState, useEffect } from "react";
import ListResults from "../ListResults";
import Search from "../Search";
import { Text, StyleSheet, StatusBar } from "react-native";
import {
  getSearchedMoviesByTitle,
  getTopRatedMovies,
} from "../../services/network";

const SearchScreen = () => {
  const [searchMovieTitle, setSearchMovieTitle] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [currPage, setCurrPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    if (searchMovieTitle !== "") {
      getSearchedMoviesByTitle(searchMovieTitle, currPage).then((response) => {
        setMovies(response.results);
        setTotalPage(response.total_pages);
      });
    } else {
      fetchMovies(currPage);
    }
  }, [setSearchMovieTitle]);

  const fetchMovies = (currPage) => {
    getTopRatedMovies(currPage).then((response) => {
      console.log(response);
      setMovies([...movies, ...response.results]);
      setTotalPage(response.total_pages);
    });
  };

  const onReachedEnd = () => {
    const incrementedPage = currPage + 1;
    setCurrPage(incrementedPage);
    console.log("hello");

    if (incrementedPage <= totalPage) {
      fetchMovies(incrementedPage);
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
