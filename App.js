
import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Wallet from './src/screens/WalletScreen/Wallet';
import NewsFeed from './src/screens/NewsFeedScreen/NewsFeed';


const App = () => {

  return (
    // <NewsFeed />
    <Wallet />
  )
};

const styles = StyleSheet.create({

});

export default App;
