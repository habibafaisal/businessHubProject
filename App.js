import 'react-native-gesture-handler';
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppStack from './src/navigation/AppStack';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>

      <AppStack/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
