import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Dimensions, Button, ScrollView, FlatList } from 'react-native';
import WalletBackup from '../../compnents/WalletComponents/WalletBackup';
import WallteBalance from '../../compnents/WalletComponents/WalletBalance';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Card from '../../compnents/WalletComponents/Card';
import { data } from '../../StaticData/data'


function WalletScreen() {
    const { Width, Height } = Dimensions.get("screen")


    const renderItem = ({ item }) => {
        return (
            <View style={{ margin: 2, }}>
                <Card
                    name={item.name}
                    value={item.value}
                />
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <WallteBalance />
            <WalletBackup />

            <View style={styles.editCurrency}>
                <Text style={{ fontSize: 18, fontWeight: "bold", top: 5, right: 45, color: "black" }}>CURRENCIES</Text>
                <TouchableOpacity style={styles.button}>
                    <FontAwesome name="edit" size={20} color="#B9817B" />
                    <Text style={{ fontSize: 17, color: "#B9817B" }}>Edit</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                style={{ marginVertical: 35, top: "5%" }}
                data={data}
                renderItem={renderItem}
            />
        </SafeAreaView>
    )
}

export default WalletScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
    },

    button: {
        justifyContent: "space-evenly",
        left: "14%",
        width: "30%",
        // backgroundColor: '#68a0cf',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#B9817B',
        height: 35,
        alignItems: "center",
        flexDirection: "row",
    },

    card: {
        width: "95%",
        height: "80%",
        backgroundColor: "grey",
        flexDirection: "row",
        justifyContent: "space-evenly",
        borderRadius: 5
    },
    editCurrency: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: "95%",
        top: "15%"
    }

})