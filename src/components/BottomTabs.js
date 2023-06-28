import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import CustomDrawer from './CustomDrawer';
import DrawerNav from './DrawerNav';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FavoritesScreen from '../screens/FavoritesScreen';
// import FeedList from '../screens/FavoritesScreen';

const Tab = createBottomTabNavigator();

export function BottomTabs({navigation}) {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        style: styles.tabBar,
        tabStyle: styles.tabStyle,
        labelStyle: styles.tabLabel,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarStyle: styles.tabBar,
          tabBarLabelStyle: styles.tabLabel,
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="home" color="black" size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarStyle: styles.tabBar,
          tabBarLabelStyle: styles.tabLabel,
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="user" color="black" size={25} />
          ),
        }}
        // options={() => ({
        //     tabBarButton: () => (
        //       <TouchableOpacity
        //         // onPress={() => navigation.navigate('Login')}
        //         style={styles.tabButton}
        //       >
        //         <AntDesign name='like1' size={25} />
        //         <Text
        //         style={styles.tabButtonText}
        //         >Login</Text>
        //       </TouchableOpacity>
        //     ),
        //     tabBarVisible: false,
        //   })}
      />
      <Tab.Screen
        name="settings"
        component={DrawerNav}
        options={() => ({
          tabBarButton: () => (
            <TouchableOpacity
              onPress={() => navigation.toggleDrawer()}
              style={styles.tabButton}>
              <FontAwesome
                name="cog"
                size={25}
                // color={focused ? '#5BA199' : 'grey'}
                color="black"
              />
              <Text style={styles.tabButtonText}>More</Text>
            </TouchableOpacity>
          ),
          tabBarVisible: false,
        })}
      />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: 'white',
    // borderTopWidth: 1,
    // borderTopColor: 'gray',
    // borderRadius:8,
    // marginTop:'5%'
  },
  tabStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabLabel: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  tabButton: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  tabButtonText: {
    fontSize: 14,
    // fontWeight: 'bold',
    // color: 'black',
  },
});
