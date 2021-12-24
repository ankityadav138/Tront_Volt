import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'


function Percentage() {
    return (
        <View style={styles.container}>

            <TouchableOpacity style={styles.percentageBox}>
                <Text style={styles.percentText}>25%</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.percentageBox}>
                <Text style={styles.percentText}>50%</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.percentageBox}>
                <Text style={styles.percentText}>75%</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.percentageBox}>
                <Text style={styles.percentText}>100%</Text>
            </TouchableOpacity>

        </View>
    )
}

export default Percentage;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-evenly",
        top: 60
    },
    percentageBox: {
        width: 80,
        height: 50,
        backgroundColor: "#FFEFEE",
        marginHorizontal: 0,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    percentText: {
        fontWeight: "bold",
        color: "#842117"
    }

})
