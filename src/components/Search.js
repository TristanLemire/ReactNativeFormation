import React from 'react';
import {TextInput, View, StyleSheet, Button} from "react-native";

export default class Search extends React.Component {
    render() {
        return (
            <View style={styles.main_container}>
                <TextInput style={styles.textinput} placeholder='Titre du film' onChangeText={text => this.props.setSearchMovieTitle(text)}/>
                {/* <Button title='Rechercher' onPress={() => {}}/> */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        padding: 10,
        paddingBottom: 30,
        backgroundColor: '#FD6E58',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },
    textinput: {
        backgroundColor: '#fff',
        borderRadius: 50,
        height: 50,
        borderColor: '#fff',
        borderWidth: 1,
        paddingLeft: 15,
    }
})
