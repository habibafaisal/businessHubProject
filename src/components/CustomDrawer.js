import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
  } from 'react-native';
  import React, {useState, useEffect} from 'react';
  import {createDrawerNavigator} from '@react-navigation/drawer';
  Drawer = createDrawerNavigator();
  
  
  export default function CustomDrawer({navigation}) {
   
    return (
         
        
        <View style={{marginBottom: '5%'}}>
  
          <TouchableOpacity
            style={{marginTop: '5%'}}
            onPress={() => {
              navigation.navigate('Login');
            }}>
            <View style={styles.drawerAlignStyle}>
              <Text style={styles.mainDrawer}>Login Here</Text>
            </View>
          </TouchableOpacity>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    usernameStyle: {
      color: '#5BA199',
      marginHorizontal: '5%',
      fontSize: 22,
      // fontStyle: 'italic',
      fontWeight: 'bold',
      marginBottom: '5%',
      marginLeft: '6%',
    },
    mainDrawer: {
      fontSize: 18,
      // fontStyle: 'italic',
      // marginRight: '-10%',
      // color: 'black',
      // fontWeight: 'bold',
    },
    drawerTextBottom: {
      fontSize: 15,
      // fontStyle: 'italic',
      // marginRight: '-10%',
      // color: 'black',
      alignSelf: 'center',
      marginBottom: 15,
      // fontWeight: 'bold',
    },
    drawerAlignStyle: {
      marginLeft: '7%',
      marginTop: '2%',
    },
    gridStyle: {
      position: 'absolute',
      top: Dimensions.get('window').height * 0.5,
      left: Dimensions.get('window').width * 0.4,
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  