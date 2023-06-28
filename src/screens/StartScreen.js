import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const StartScreen = ({navigation}) => {
  return (
    <View>
      <Text>StartScreen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <FontAwesome
          name="briefcase"
          size={25}
          // color={focused ? '#5BA199' : 'grey'}
          color="black"
        />
        <Text>Proceed</Text>
      </TouchableOpacity>
    </View>
  );
};

export default StartScreen;
