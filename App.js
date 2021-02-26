import React, { useState, useEffect } from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";
import Search from "./src/components/Search";
import ListResults from "./src/components/ListResults";
import { API_KEY, BASE_URL } from "./src/variables";

export default function App() {
  const [searchMovieTitle, setSearchMovieTitle] = useState("");
  const [newData, setNewData] = useState([]);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const getMovies = () => {
    return fetch(
      `${BASE_URL}?api_key=${API_KEY}&query=${searchMovieTitle}&language=fr-FR&include_adult=false&page=${currentPage}`
    )
      .then((response) => response.json())
      .then((json) => {
        setNewData(json);
      })
      .catch((error) => {
        setError(error.error);
      });
  };

  useEffect(() => {
    searchMovieTitle != "" ? getMovies() : setNewData([{}]);
  }, [searchMovieTitle]);

  return (
    <>
      <SafeAreaView style={{ flex: 0, backgroundColor: "#FD6E58" }} />
      <SafeAreaView style={{ flex: 1 }}>
        <Search setSearchMovieTitle={setSearchMovieTitle} />
        {error === null ? (
          <ListResults newData={newData.results} />
        ) : (
          <Text style={styles.error}>{error}</Text>
        )}
        <Pagings />
      </SafeAreaView>
    </>
  );
}

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
