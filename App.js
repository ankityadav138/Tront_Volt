
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
import Send from './src/screens/SendScreen/Send';

const App = () => {

  return (
    // <NewsFeed />
    // <Wallet />
    <Send />
  )
};

const styles = StyleSheet.create({

});

export default App;
