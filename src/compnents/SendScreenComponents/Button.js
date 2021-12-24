import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

function Button() {



    const [changColor, setChangeColor] = useState(0)

    const changeButtonColor = (id) => {
        setChangeColor(id)
    }

    return (

        <View style={styles.container}>

            <View style={{ flexDirection: "column", }}>
                <TouchableOpacity style={changColor === 1 ? styles.redButton : styles.whiteButton} onPress={() => changeButtonColor(1)}>
                    <Text style={[styles.headerText, { alignSelf: "center", top: 25 }]}>PL</Text>
                </TouchableOpacity>
                <Text style={styles.text}>Polygon</Text>
            </View>

            <View style={{ flexDirection: "column", }}>
                <TouchableOpacity style={changColor === 2 ? styles.redButton : styles.whiteButton} onPress={() => changeButtonColor(2)}>
                    <Text style={[styles.headerText, { alignSelf: "center", top: 25 }]}>AL</Text>
                </TouchableOpacity>
                <Text style={[styles.text, { left: 28 }]}>Adam</Text>
            </View>

            <View style={{ flexDirection: "column", }}>
                <TouchableOpacity style={changColor === 3 ? styles.redButton : styles.whiteButton} onPress={() => changeButtonColor(3)}>
                    <Text style={[styles.headerText, { alignSelf: "center", top: 25 }]}>UL</Text>
                </TouchableOpacity>
                <Text style={[styles.text, { left: 35 }]}>Luis</Text>
            </View>

        </View>
    )
}

export default Button

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: "100%",
    },
    headerText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "grey",
        position: "absolute"
    },
    whiteButton: {
        marginHorizontal: 12,
        backgroundColor: '#FFEFEE',
        width: 80,
        height: 75,
        borderRadius: 10,
    },
    redButton: {
        marginHorizontal: 12,
        backgroundColor: '#52140D',
        width: 80,
        height: 75,
        borderRadius: 10,
    },
    text:
    {
        fontSize: 15,
        color: "black",
        left: 20,
        top: 10
    },
})
