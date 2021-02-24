import { TouchableHighlight, View } from "react-native";

import React from "react";
import { Text, StyleSheet, Image } from "react-native";
import { Icon } from "react-native-elements";
import { Rating, AirbnbRating } from "react-native-elements";

export const Card = ({ movie }) => {
  return (
    <TouchableHighlight
      onPress={() => alert("pressed!")}
      activeOpacity={0.6}
      underlayColor={"#fff"}
    >
      <View style={styles.main_container}>
        <View style={styles.image}>
          {movie.poster_path ? (
            <Image
              style={styles.movieImage}
              resizeMode={"contain"}
              source={{
                uri: `https://image.tmdb.org/t/p/original${movie.poster_path}`,
              }}
            ></Image>
          ) : (
            <Image
              style={styles.movieImage}
              resizeMode={"contain"}
              source={{
                uri: `http://cvestavayer.ch/wp-content/uploads/2020/01/CLUB_No_picture_available.png`,
              }}
            ></Image>
          )}
        </View>
        <View style={styles.desc}>
          <Text style={styles.movieTitle}>{movie.original_title}</Text>
          <Text style={styles.releaseDate}>{movie.release_date}</Text>
          <Rating
            type="heart"
            readonly={true}
            ratingCount={5}
            startingValue={movie.vote_average / 2}
            imageSize={25}
            style={{ paddingVertical: 5 }}
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
});
