import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import image from '../assets/coin.jpg'

function NewsFeedCard({ header, description }) {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={{ left: 30, top: 15 }}>
                <Image style={{ height: 100, width: 100, borderRadius: 10 }} source={image} />
            </View>

            <View style={styles.text}>
                <Text style={{ fontWeight: "bold", alignSelf: "center", fontSize: 14, left: 15, color: "black" }}>{header}</Text>
                <Text style={{ left: 18, marginHorizontal: 30, fontSize: 13, top: 10, color: "black" }}>{description}</Text>

            </View>
        </TouchableOpacity>
    )
}

export default NewsFeedCard;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: "90%",
        height: 125,
        borderRadius: 10,
        backgroundColor: "#F9F9F9",
        margin: 7,
        alignSelf: "center",
        justifyContent: "space-evenly"
    },
    text: {
        flexDirection: "column",
        marginVertical: 15,
        marginHorizontal: 15,
        left: 0
    }
})
