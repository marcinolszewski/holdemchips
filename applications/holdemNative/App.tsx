import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const App: React.VFC = () => (
  <View style={styles.container}>
    <Text>One day holem chips app will be here, now it is not</Text>
    <Text>Why, who knows</Text>
    <StatusBar />
  </View>
);

export default App;
