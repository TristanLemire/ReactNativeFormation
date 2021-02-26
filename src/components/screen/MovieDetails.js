import { Icon } from "expo";
import React, { useEffect } from "react";
import { View, Image, StyleSheet, Text } from "react-native";

const MovieDetails = () => {
  return (
    <View style={styles.main_contianer}>
      <View style={styles.moviePicture}>
        <Image
          style={styles.moviePicture}
          style={styles.bgImg}
          resizeMode={"cover"}
          // source={{uri:}}
        ></Image>
        <TouchableOpacity style={styles.playBtn}>
          <Icon name="play" type="font-awesome" color="#fff"></Icon>
        </TouchableOpacity>
      </View>
      <View style={styles.overview}>
        <View style={styles.moviesCover}>
          <View style={styles.Desc}>
            <Text style={styles.title}></Text>
            <Text style={styles.subtitle}></Text>
          </View>
        </View>
      </View>
      <View style={styles.description}></View>
    </View>
  );
};

export default MovieDetails;

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
  },
  bgImg: {
    flex: 1,
  },
  playBtn: {
    flex: 1,
    position: "absolute",
    zIndex: 0,
    bottom: -30,
    right: 20,
    padding: 15,
    backgroundColor: "#F44802",
    borderRadius: 30,
    height: 50,
    width: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  overview: {
    flex: 1,
    paddingHorizontal: 10,
    flexDirection: "row",
  },
  moviesCovers: {
    width: 100,
    height: 120,
  },
  img: {
    flex: 2,
    width: 100,
    backgroundColor: "red",
    borderRadius: 20,
    borderWidth: 5,
    borderColor: "#fff",
    position: "absolute",
    height: 150,
    top: -30,
  },
  movieDesc: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
  },
  subtitle: {
    fontWeight: "300",
    fontSize: "20",
  },
});
