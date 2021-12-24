import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

function Header() {

    const [balance, setBalance] = useState("0.00")
    const [colorId, setColorId] = useState(0)

    const colorChange = (id) => {
        setColorId(id)
    }

    return (
        <View style={styles.header}>

            <View style={styles.subHeader}>


                <TouchableOpacity style={colorId === 1 ? styles.red : styles.button} onPress={() => colorChange(1)}>
                    <Text style={styles.headerText}>PL</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[colorId === 2 ? styles.red : styles.button, { right: 50 }]} onPress={() => colorChange(2)}>
                    <Text style={styles.headerText}>LINCH</Text>
                </TouchableOpacity>

                <View style={{ flexDirection: "column", }}>
                    <Text style={{ fontWeight: "bold", fontSize: 20, color: "white", }}>{balance}</Text>
                    <Text style={{ fontSize: 15, color: "white" }}>Balance</Text>
                </View>


            </View>

        </View>

    )
}

export default Header;

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        alignSelf: "center",

        marginVertical: 20,
        borderRadius: 10,
        backgroundColor: "#842117",
        paddingVertical: 0,
        width: "95%",
        height: 100
    },
    headerText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white",
        position: "absolute"
    },

    subHeader: {
        flexDirection: "row",
        width: "100%",
        height: "100%",
        justifyContent: "space-evenly",
        top: 20
    },

    red: {
        backgroundColor: '#52140D',
        alignItems: 'center',
        padding: 10,
        width: "23%",
        height: "80%",
        borderRadius: 10,
        bottom: 10,
        alignContent: "center",
        justifyContent: "center",
        right: 29
    },
    button: {
        bottom: 10,
        alignItems: 'center',
        // backgroundColor: '#DDDDDD',
        padding: 10,
        width: "23%",
        height: "80%",
        borderRadius: 10,
        justifyContent: "center",
        right: 25
    },
})
