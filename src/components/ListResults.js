import React, {useEffect} from 'react';
import {View, StyleSheet, Text, FlatList} from "react-native";
import { Card } from "./Card";
import data from '../helpers/filmDatas'

export default class ListResults extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <FlatList 
                    data={this.props.newData}
                    keyExtractor={key => key.id.toString()} 
                    renderItem={({item, key}) => 
                        <Card key={key} movie={item}/>
                    }
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
})
