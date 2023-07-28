import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import LoginProcess from '../loginpages/LoginProcess'
import Splash from '../loginpages/Splash'
import UserStack from './UserStack'

const Stack = createStackNavigator()
export default LoginStack = ()=>{
  return(
    <Stack.Navigator initialRouteName='Splash'>
      <Stack.Group>
      <Stack.Screen options={{ headerShown: false, gestureEnabled: false }} name="Splash" component={Splash} />
        <Stack.Screen options={{ headerShown: false, gestureEnabled: false }} name="LoginProcess" component={LoginProcess} />
        <Stack.Screen options={{ headerShown: false, gestureEnabled: false }} name="UserStack" component={UserStack} />
       
      </Stack.Group>
    </Stack.Navigator>
  )
}