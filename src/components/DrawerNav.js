import React, {useState, useEffect} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from './CustomDrawer';
import { BottomTabs } from './BottomTabs';

const Drawer = createDrawerNavigator();

export default function DrawerNav () {

  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: '#5BA199',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: {
          marginLeft: -25,
          fontFamily: 'Roboto-Medium',
          fontSize: 15,
        },
      }}>
      <Drawer.Screen
        name="BottomTabs"
        component={BottomTabs}
      />
            {/* <Drawer.Screen name="CustomDrawer" component={CustomDrawer} /> */}
    </Drawer.Navigator>
  );
};

