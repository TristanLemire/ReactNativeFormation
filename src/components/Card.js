import React from "react";
import { Text, StyleSheet, Image, TouchableHighlight, View } from "react-native";
import { Rating } from "react-native-elements";

export const Card = ({ movie, itemClicked }) => {
  return (
    <TouchableHighlight
      onPress={() => itemClicked(movie.id)}
      activeOpacity={0.6}
      underlayColor={"#fff"}
    >
      <View style={styles.main_container}>
        <View style={styles.image}>
          {
            movie.poster_path ? (
              <Image
                style={styles.movieImage}
                resizeMode={"contain"}
                source={{ uri: `https://image.tmdb.org/t/p/original${movie.poster_path}` }}
              />
            ) : (
              <Image
                style={styles.movieImage}
                resizeMode={"contain"}
                source={{ uri: `http://cvestavayer.ch/wp-content/uploads/2020/01/CLUB_No_picture_available.png` }}
              />
          )}
        </View>
        <View style={styles.desc}>
          <Text style={styles.movieTitle}>{movie.title}</Text>
          <Text style={styles.releaseDate}>{movie.release_date}</Text>
          <Text style={styles.releaseDate}>Rating: {movie.vote_average}</Text>
          <Rating
            type='heart'
            imageSize={25}
            readonly
            startingValue={movie.vote_average / 2}
            style={styles.rating}
          />
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 20,
    paddingTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#CBCBCB",
  },
  image: {
    width: 75,
    height: 75,
    marginRight: 10,
  },
  movieImage: {
    flex: 1,
  },
  desc: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
  },
  movieTitle: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 7,
  },
  releaseDate: {
    fontWeight: "300",
    color: "grey",
    fontSize: 18,
  },
  iconStar: {
    color: "#fff",
    marginTop: 7,
  },
  rating: {
    flex: 1,
    marginTop: 8,
  },
});
