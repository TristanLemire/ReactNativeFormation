import React, { useState, useEffect } from "react";
import ListResults from "../components/ListResults";
import Search from "../components/Search";
import { Text, StyleSheet, StatusBar, SafeAreaView } from "react-native";
import {
  getSearchedMoviesByTitle,
  getTopRatedMovies,
} from "../services/network";

export const SearchScreen = ({ navigation }) => {
  const [searchMovieTitle, setSearchMovieTitle] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [currPage, setCurrPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    if (searchMovieTitle !== "") {
      getSearchedMoviesByTitle(searchMovieTitle, 1).then((response) => {
        setMovies(response.results);
        setTotalPage(response.total_pages);
      });
    } else {
      resetMovies();
      fetchMovies(1, true);
    }
  }, [searchMovieTitle]);

  const resetMovies = () => {
    setMovies([]);
    setCurrPage(1);
  };

  const fetchMovies = (currPage, shouldResetMovies) => {
    setIsloading(true);
    getTopRatedMovies(currPage).then((response) => {
      setMovies(
        shouldResetMovies ? response.results : [...movies, ...response.results]
      );
      setTotalPage(response.total_pages);
      setIsloading(false);
    });
  };

  const onReachedEnd = () => {
    const incrementedPage = currPage + 1;
    setCurrPage(incrementedPage);

    if (incrementedPage <= totalPage) {
      fetchMovies(incrementedPage);
    }
  };

  return (
    <>
      <SafeAreaView style={{ flex: 0, backgroundColor: "#FD6E58" }} />
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle={"light-content"} />
        <Search setSearchMovieTitle={setSearchMovieTitle} />
        {error === null ? (
          <ListResults movies={movies} onReached={onReachedEnd} itemClicked={(id) => navigation.navigate('Details', {id : id})} isLoading={isLoading} />
        ) : (
          <Text style={styles.error}>{error}</Text>
        )}
      </SafeAreaView>
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
