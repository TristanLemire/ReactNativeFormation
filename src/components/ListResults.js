import React from "react";
import { View, StyleSheet, Text, FlatList, Dimensions } from "react-native";
import { Card } from "./Card";

export default class ListResults extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {this.props.movies != [{}] && (
          <FlatList
            data={this.props.movies}
            keyExtractor={(key) => key.id.toString()}
            renderItem={({ item, key }) => <Card key={key} movie={item}/>}
            onEndReachedThreshold={0.8}
            onEndReached={this.props.onReached}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
});
