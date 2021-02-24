import React from "react";
import { TextInput, View, StyleSheet, Button } from "react-native";
import { Icon } from "react-native-elements";

export default class Search extends React.Component {
  render() {
    return (
      <View style={styles.main_container}>
        <View style={styles.searchContent}>
          <Icon name="search" />
          <TextInput
            style={styles.textinput}
            placeholder="Titre du film"
            onChangeText={(text) =>
              text.length >= 3
                ? this.props.setSearchMovieTitle(text)
                : this.props.setSearchMovieTitle("")
            }
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
    padding: 10,
    paddingBottom: 30,
    backgroundColor: "#FD6E58",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  textinput: {
    backgroundColor: "#fff",
    borderRadius: 50,
    height: 50,
    borderColor: "#fff",
    borderWidth: 1,
    paddingLeft: 15,
    flex: 1,
  },
  searchContent: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#ffffff",
    borderWidth: 1,
    backgroundColor: "white",
    borderRadius: 50,
    paddingHorizontal: 10,
  },
});
