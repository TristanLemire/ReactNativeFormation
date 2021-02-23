import { TouchableHighlight, View } from "react-native"

import React from 'react';
import {Text, StyleSheet, Image} from "react-native";

export const Card = ({movieTitle, releaseDate}) => {
    return(
        <TouchableHighlight onPress={() => alert('pressed!')} activeOpacity={0.6} underlayColor={'#fff'}>
            <View style={styles.main_container}>
                <View style={styles.image}>
                    <Image style={styles.movieImage} resizeMode={'contain'} source={{uri : 'https://images-na.ssl-images-amazon.com/images/I/71c-O3GaxLL._AC_SL1200_.jpg'}}></Image>
                </View>
                <View style={styles.desc}>
                    <Text style={styles.movieTitle}>{movieTitle}</Text>
                    <Text style={styles.releaseDate}>{releaseDate}</Text>
                </View>
            </View>
        </TouchableHighlight>
    )
}


const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        flexDirection: 'row',
        paddingBottom: 20,
        paddingTop: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#CBCBCB',
    }, 
    image: {
        width: 100,
        marginRight: 10,
    },
    movieImage: {
        flex: 1,
    }, 
    desc: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    movieTitle: {
        fontWeight: 'bold',
        fontSize: 18,
    }, 
    releaseDate: {
        fontWeight: "300",
        color: "grey",
        fontSize: 18,
    },

})