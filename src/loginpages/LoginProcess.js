import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  BackHandler,
  Alert,
} from 'react-native';
import React from 'react';
import {BLACK, RED, WHITE} from '../constants/Color';
import {HEIGHT, MyStatusBar, WIDTH} from '../constants/Config';
import {Image, ScrollView} from 'react-native';
import {logo} from '../constants/Imagepath';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Login from './Login';
import SignUp from './SignUp';
// import { ScrollView } from 'react-native-gesture-handler'
import {useFocusEffect} from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();

const LoginProcess = () => {
  useFocusEffect(() => {
    const backAction = () => {
      Alert.alert('', 'Do you want to exit the app?', [
        {
          text: 'Cancel',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: 'Ok',
          onPress: () => {
            BackHandler.exitApp();
          },
        },
      ]);
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  });

  return (
    <ScrollView
      style={{
        height: HEIGHT * 0.4,
        backgroundColor: '#F2F2F2',
        // backgroundColor: WHITE,
      }}>
      <MyStatusBar backgroundColor={'black'} barStyle={'light-content'} />

      <View
        style={{
          height: HEIGHT * 0.35,
          width: WIDTH * 0.99,
          backgroundColor: WHITE,
          // backgroundColor:'yellow',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          style={{
            height: 180,
            width: 180,
          }}
          source={logo}
        />
      </View>

      <View
        style={{
          height: HEIGHT * 0.5,
          width: WIDTH,
          alignSelf: 'center',
          backgroundColor: '#F2F2F2',
        }}>
        <Tab.Navigator
          initialRouteName="Login"
          // tabBarPressColor='pink'
          screenOptions={{
            // tabBarGap: 0,
            // tabBarPressColor: "transparent" ,
            tabBarPressColor: WHITE,
            tabBarPressOpacity:0,
            tabBarLabelStyle: {fontSize: 16, fontFamily: 'Roboto-Bold'},
            tabBarItemStyle: {
              // width:120,
              // marginLeft:WIDTH * 0.11,
              // backgroundColor:'pink'
            },
            tabBarStyle: {
              backgroundColor: WHITE,
              // backgroundColor: 'pink',
              elevation: 0,
              borderBottomLeftRadius: 30,
              borderBottomRightRadius: 30,
              width: WIDTH * 0.99,
              alignSelf:'center'
              // alignItems:'center'
              // width:WIDTH * 0.8,
              // alignSelf:'center',
              // marginLeft:10
            },
            // activeTintColor: RED,
            // tabBarInactiveTintColor: '#8E8E8E',
            tabBarIndicatorStyle: {
              backgroundColor: RED,
              marginLeft: WIDTH * 0.1,
              width: WIDTH * 0.3,
            },
          }}>
          <Tab.Screen name="Login" component={Login} />
          <Tab.Screen name="Sign-Up" component={SignUp} />
        </Tab.Navigator>
      </View>
    </ScrollView>
 
  );
};



export default LoginProcess;
