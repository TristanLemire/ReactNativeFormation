import React from "react";
import { View, StyleSheet, FlatList, ActivityIndicator } from "react-native";
import { Card } from "./Card";

export default class ListResults extends React.Component {
  render() {
    const { itemClicked } = this.props;
    return (
      <View style={styles.container}>
        {this.props.movies != [{}] && (
          <FlatList
            ItemSeparatorComponent={(({ highlighted }) => (
              <View
                style={[
                  styles.separator,
                  highlighted && { marginLeft: 0 }
                ]}
              />
            ))}
            style={{flex: 1}}
            data={this.props.movies}
            keyExtractor={(key) => key.id.toString()}
            renderItem={({ item, key }) => <Card key={key} movie={item} itemClicked={itemClicked}/>}
            onEndReachedThreshold={0.8}
            onEndReached={this.props.onReached}
          >
          { this.props.isLoading ? <ActivityIndicator></ActivityIndicator> : null }

          </FlatList>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingHorizontal: 0
  },
  separator: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc'
   },
});
