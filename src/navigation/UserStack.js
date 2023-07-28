import {View, Text} from 'react-native';
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
import {BLACK, RED} from '../constants/Color';

const Tab = createBottomTabNavigator();

const UserStack = ({navigation}) => {
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
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
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={({route}) => ({
          tabBarStyle: {
            height: HEIGHT * 0.1,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            elevation: 15,
            position: 'absolute',
            // display:
            //   (getFocusedRouteNameFromRoute(route) ?? 'HomePage') != 'HomePage'
            //     ? 'none'
            //     : 'flex',
          },
        })}
      />
      <Tab.Screen
        name="WishListStack"
        component={WishListStack}
        options={({route}) => ({
          tabBarStyle: {
            height: HEIGHT * 0.1,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            elevation: 15,
            position: 'absolute',
          },
        })}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={({route}) => ({
          tabBarStyle: {
            height: HEIGHT * 0.1,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            elevation: 15,
            position: 'absolute',
          },
        })}
      />
      <Tab.Screen
        name="HistoryStack"
        component={HistoryStack}
        options={({route}) => ({
          tabBarStyle: {
            height: HEIGHT * 0.1,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            elevation: 15,
            position: 'absolute',
          },
        })}
      />
    </Tab.Navigator>
  );
};

export default UserStack;
