import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomePage from '../screens/landing/HomePage';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="HomePage">
      <Stack.Group>
        <Stack.Screen
          options={{headerShown: false, gestureEnabled: false}}
          name="HomePage"
          component={HomePage}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default HomeStack;
