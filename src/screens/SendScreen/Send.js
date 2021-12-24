import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Foundation from 'react-native-vector-icons/Foundation'
import { TextInput } from 'react-native-paper';
import Header from '../../compnents/SendScreenComponents/Header';
import Percentage from '../../compnents/SendScreenComponents/Percentage';
import Button from '../../compnents/SendScreenComponents/Button';
import Feather from 'react-native-vector-icons/Feather'

const { Width, Hieght } = Dimensions.get("screen")

function Send() {

    const [store, setStore] = useState('')

    const number = (value) => {
        setStore(store + value)
    }
    const del = () => {
        setStore(store.substring(0, (store.length - 1)))
    }


    return (
        <View style={styles.container}>
            <Header />
            <Button />

            <TextInput
                style={{ top: 20, width: "95%", alignSelf: "center" }}
                label='Amount'
                activeOutlineColor="#64211A"
                mode='outlined'
                showSoftInputOnFocus={false}
                keyboardType='numeric'
                outlineColor=''

            > <Text>{store}</Text></TextInput>

            <View style={{ flexDirection: "row", alignSelf: "center", top: 40 }}>
                <Foundation name='dollar' size={26} color="#5D160F" style={{ top: 2, right: 5 }} />
                <Text style={{ fontSize: 20, color: "#5D160F" }}>0.00ZWL</Text>
            </View>

            <Percentage />

            {/* custom keypad  start*/}
            <View style={{ flexDirection: "column", height: "40%", justifyContent: "space-evenly", top: 50 }}>

                {/* column number 1 start */}
                <View style={styles.row}>
                    <TouchableOpacity style={styles.touchopacity} onPress={() => number("1")}>
                        <Text style={styles.text}>1</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.touchopacity} onPress={() => number("2")}>
                        <Text style={styles.text}>2</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.touchopacity} onPress={() => number("3")}>
                        <Text style={styles.text}>3</Text>
                    </TouchableOpacity>
                </View>
                {/* column number 1 end */}


                {/* column number 2 start */}
                <View style={styles.row}>
                    <TouchableOpacity style={styles.touchopacity} onPress={() => number("4")}>
                        <Text style={styles.text}>4</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.touchopacity} onPress={() => number("5")}>
                        <Text style={styles.text}>5</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.touchopacity} onPress={() => number("6")}>
                        <Text style={styles.text}>6</Text>
                    </TouchableOpacity>
                </View>
                {/* column number 2 end */}


                {/* column number 3 start */}
                <View style={styles.row}>
                    <TouchableOpacity style={styles.touchopacity} onPress={() => number("7")}>
                        <Text style={styles.text}>7</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.touchopacity} onPress={() => number("8")}>
                        <Text style={styles.text}>8</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.touchopacity} onPress={() => number("9")}>
                        <Text style={styles.text}>9</Text>
                    </TouchableOpacity>
                </View>
                {/* column number 3 end */}


                {/* column number 4 start */}
                <View style={[styles.row, { left: 10 }]}>
                    <TouchableOpacity style={styles.touchopacity} onPress={() => del()}>
                        <Feather name='delete' color="#52140D" size={25} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.touchopacity} onPress={() => number("0")}>
                        <Text style={[styles.text, { right: 0 }]}>0</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ width: 80, height: 50, borderRadius: 5, backgroundColor: "#52140D", justifyContent: "center" }} onPress={() => alert("Next Page")}>

                        <Text style={{ alignSelf: "center", color: "white", fontWeight: "bold" }}>NEXT</Text>
                    </TouchableOpacity>
                </View>
                {/* column number 4 ends */}



            </View>
            {/* custom keypad ends */}

        </View >
    )
}

export default Send;

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        flex: 1
    },
    headerText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "grey",
        position: "absolute"
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
    row: {
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    text: {
        fontSize: 25,
        fontWeight: "bold",
        color: "black"
    },
    touchopacity: {
        width: 60,
        alignItems: "center",
        height: 35,
    }

})
