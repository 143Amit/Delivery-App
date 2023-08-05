import {View, Text, Platform} from 'react-native';
import React from 'react';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import {HEIGHT, WIDTH} from '../constants/Config';
import HomeStack from './HomeStack';
import WishListStack from './WishListStack';
import ProfileStack from './ProfileStack';
import HistoryStack from './HistoryStack';
import {Heart, History, Home, User} from '../constants/Imagepath';
import {BLACK, RED, WHITE} from '../constants/Color';

const Tab = createBottomTabNavigator();

const UserStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      backBehavior="history"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: HEIGHT * 0.07,
          width: WIDTH,
          backgroundColor: '#F2F2F2',
          elevation:0,
          // backgroundColor: WHITE,
          display: (route.name == 'HomeStack'
          || route.name == 'WishListStack'
          || route.name == ''
          ||  route.name == 'ProfileStack') ? 'flex' : 'none'
        },
        tabBarIconStyle: {
          position: Platform.OS == 'ios' ? 'absolute' : 'relative',
        },
        tabBarIcon: ({focused}) => {
          let icon;
          if (route.name === 'HomeStack') {
            icon = (
              <Image
                source={Home}
                resizeMode="contain"
                style={{
                  height: '45%',
                  width: '38%',
                  tintColor: focused ? RED : 'gray',
                }}
              />
            );
          } else if (route.name === 'WishListStack') {
            icon = (
              <Image
                source={Heart}
                resizeMode="contain"
                style={{
                  height: '45%',
                  width: '40%',
                  tintColor: focused ? RED : 'gray',
                }}
              />
            );
          } else if (route.name === 'ProfileStack') {
            icon = (
              <Image
                source={User}
                resizeMode="contain"
                style={{
                  height: '45%',
                  width: '40%',
                  tintColor: focused ? RED : 'gray',
                }}
              />
            );
          } else if (route.name === 'HistoryStack') {
            icon = (
              <Image
                source={History}
                resizeMode="contain"
                style={{
                  height: '45%',
                  width: '41%',
                  tintColor: focused ? RED : 'gray',
                }}
              />
            );
          }

          return icon;
        },
      })}>
      <Tab.Screen name="HomeStack" component={HomeStack} />
      <Tab.Screen name="WishListStack" component={WishListStack} />
      <Tab.Screen name="ProfileStack" component={ProfileStack} />
      <Tab.Screen name="HistoryStack" component={HistoryStack} />
    </Tab.Navigator>
  );
};

export default UserStack;
