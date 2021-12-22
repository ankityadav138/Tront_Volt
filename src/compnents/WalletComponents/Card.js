import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
// import { FontAwesome5 } from '@expo/vector-icons';

function Card({ name, value }) {
    return (
        <TouchableOpacity style={{ width: 350, backgroundColor: "#F9F9F9", height: 55, borderRadius: 5 }}>
            <View style={{ justifyContent: "space-between", flexDirection: "row", marginTop: "2%", padding: 10 }}>
                {/* <FontAwesome5 name="bitcoin" size={24} color="black" /> */}
                <Text style={{ fontWeight: "bold", fontSize: 16, marginRight: "40%", color: "black" }}>{name}</Text>
                <Text style={{ fontWeight: "bold", fontSize: 16, color: "black" }}>{value}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Card;

const styles = StyleSheet.create({
    container: {
        width: "95%",
        height: "80%",
        backgroundColor: "grey",
        flexDirection: "row",
        justifyContent: "space-evenly",
        borderRadius: 5
    }
})
