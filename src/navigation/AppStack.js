import 'react-native-gesture-handler';
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import StartScreen from '../screens/StartScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerNav from '../components/DrawerNav';
import {BottomTabs} from '../components/BottomTabs';
import FeedList from '../screens/FeedList';

export default function AppStack() {
  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Start" component={StartScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Feed" component={FeedList} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Drawer" component={DrawerNav} />
      {/* <Stack.Screen name="BottomTabs" component={BottomTabs} /> */}
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
