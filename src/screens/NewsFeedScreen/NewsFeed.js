import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, FlatList, SafeAreaView, Image } from 'react-native';
import NewsFeedCard from '../../compnents/NewsFeedComponents/NewsFeedCard';
import SearchComponent from '../../compnents/NewsFeedComponents/SearchComponent';
import { newsData } from '../../StaticData/data'

function NewsFeed() {


    const renderItem = ({ item }) => {
        return (
            <NewsFeedCard
                header={item.header}
                description={item.description}
            />
        )
    }


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.subContainer}>
                <SearchComponent />
                <FlatList
                    style={{ marginVertical: 50, bottom: 40 }}
                    data={newsData}
                    renderItem={renderItem}
                />
            </View>
        </SafeAreaView>
    )
}

export default NewsFeed;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    subContainer: {
        flexDirection: "column",
        flex: 1,
        top: 50
    }
})
