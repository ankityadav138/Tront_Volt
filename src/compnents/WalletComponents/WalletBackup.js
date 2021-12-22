import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Button } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'


function WalletBackup() {
    return (
        <View style={styles.container}>
            <View style={styles.icon}>
                <MaterialIcons name="backup" size={54} color="#6F1C13" />
            </View>

            <View style={styles.subContainer}>
                <Text style={{ fontWeight: "bold", fontSize: 17, color: "black" }}>This wallet is not backed up</Text>
                <View style={{ marginVertical: 10 }}>
                    <Text style={{ fontSize: 14, color: "black" }}>If you lose this device you will loge</Text>
                    <Text style={{ fontSize: 14, color: "black" }}>your accont and all fund forevere</Text>
                </View>

                <TouchableOpacity style={styles.button}>
                    <Text style={{ fontSize: 20, color: "#B9817B" }}>Back up</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default WalletBackup;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: "#F5EEED",
        backgroundGradientTop: "#333333",
        width: 350,
        height: 130,
        borderRadius: 10,
        top: "12%"
    },
    subContainer: {
        flexDirection: "column",
        left: "30%",
        justifyContent: "flex-start",
        paddingVertical: 10,
    },
    button: {
        justifyContent: "center",
        right: "1%",
        width: "50%",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#B9817B',
        height: 35,
        alignItems: "center",
        bottom: 5
    },
    icon: {
        left: "20%",
        marginVertical: "3%"
    }

})
