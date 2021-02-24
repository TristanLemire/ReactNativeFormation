import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import { Card } from "./Card";

export default class ListResults extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {this.props.newData != [{}] && (
          <FlatList
            data={this.props.newData}
            keyExtractor={(key) => key.id.toString()}
            renderItem={({ item, key }) => <Card key={key} movie={item} />}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
