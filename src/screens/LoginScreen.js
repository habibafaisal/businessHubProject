import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React from 'react';
import { CommonActions } from '@react-navigation/native';

export default function LoginScreen({navigation}) {
  return (
    <View>
      <Text> LoginScreen App Here</Text>
      <TouchableOpacity
      onPress={()=>{
        navigation.navigate('Drawer', {
          screen: 'BottomTabs',
          initial: 'Home',
        });
      }}
      >
        <Text>
            touch
        </Text>
      </TouchableOpacity>
      <TextInput
      placeholder='enter email'
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({});
