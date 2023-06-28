import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

export default function HomeScreen({navigation}) {
  return (
    <View>
      <Text> HomeScreen App Here</Text>
      <TouchableOpacity
      // onPress={()=>{navigation.navigate('BottomTabs')}}
      >
        <Text>
            touch
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
