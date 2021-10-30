import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import {styles} from './style.js';
import Main from './src/components/Main/'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#00FFC9"/>
      <Main/>
    </View>
  );
}
