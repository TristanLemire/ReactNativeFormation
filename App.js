import React, { useState, useEffect } from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";
import Search from "./src/components/Search";
import ListResults from "./src/components/ListResults";

export const API_KEY = "026890b0945cbc402813edbeb90f0223";
export const BASE_URL = "https://api.themoviedb.org/3/search/movie";

export default function App() {
  const [searchMovieTitle, setSearchMovieTitle] = useState("");
  const [newData, setNewData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    searchMovieTitle != ""
      ? fetch(
          `${BASE_URL}?api_key=${API_KEY}&query=${searchMovieTitle}&language=fr-FR&include_adult=false&page=1`
        )
          .then((response) => response.json())
          .then((json) => {
            setNewData(json);
          })
          .catch((error) => {
            setError(error.error);
          })
      : setNewData([{}]);
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
