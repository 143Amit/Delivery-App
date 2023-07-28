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
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <ScrollView
        style={{
          height: HEIGHT * 0.4,
          backgroundColor: WHITE,
        }}>
        <MyStatusBar backgroundColor={'black'} barStyle={'light-content'} />

        <View
          style={{
            height: HEIGHT * 0.4,
            width: WIDTH * 1,
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
            width: WIDTH * 0.9,
            alignSelf: 'center',
            backgroundColor: WHITE,
          }}>
          <Tab.Navigator
            initialRouteName="Login"
            screenOptions={{
              tabBarLabelStyle: {fontSize: 16, fontFamily: 'Roboto-Bold'},
              // tabBarItemStyle: { width:100 },
              tabBarStyle: {backgroundColor: WHITE, elevation: 0},
              tabBarPressColor: WHITE,
              activeTintColor: RED,
              tabBarInactiveTintColor: '#8E8E8E',
              tabBarIndicatorStyle: {backgroundColor: RED},
            }}>
            <Tab.Screen name="Login" component={Login} />
            <Tab.Screen name="Sign-Up" component={SignUp} />
          </Tab.Navigator>
        </View>

        {/* <Text>Login</Text> */}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default LoginProcess;
