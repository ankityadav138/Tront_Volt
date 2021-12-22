import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

function WallteBalance() {


    const [totalBalance, setTotalBalance] = useState("$0.00")

    return (
        <View style={styles.container}>

            <View style={styles.subContainer}>

                <View style={{ flexDirection: "column", top: 20, left: "11%" }}>
                    <Text style={{ fontSize: 20, fontWeight: "bold", color: "white", alignSelf: "center" }}>{totalBalance}</Text>
                    <Text style={{ color: "white", fontSize: 18 }}>Total Balance</Text>
                </View>

                <MaterialCommunityIcons name="qrcode-scan" size={40} color="white" style={{ left: 80, top: 15 }} />
            </View>

        </View>
    )
}

export default WallteBalance;

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        backgroundColor: "#6C1B13",
        height: 140,
        width: 350,
        justifyContent: "space-evenly",
        top: "4%"
    },
    subContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        bottom: "6%"
    }
})
