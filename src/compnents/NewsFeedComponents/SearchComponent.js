import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

function SearchComponent() {

    const [inputHandler, setInputHandler] = useState("")
    console.log(inputHandler)


    return (
        <View style={styles.container}>

            <View style={styles.searchBox}>
                <FontAwesome style={styles.icon} name="search" size={20} color="grey" />
                <TextInput
                    placeholder='Add Cryptocurrencies or tokens...'
                    onChangeText={(e) => setInputHandler(e)}
                />

            </View>

        </View>
    )
}

export default SearchComponent;

const styles = StyleSheet.create({
    container: {
        width: 380,
        height: 100,
        backgroundColor: "#F5EEED",
        alignItems: "center",
        justifyContent: "center"
    },
    searchBox: {
        width: "85%",
        height: "50%",
        backgroundColor: "white",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#000"
    },
    icon: {
        marginHorizontal: 10,
        right: "70%"
    }
})
