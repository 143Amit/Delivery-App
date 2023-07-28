import { View, Text } from 'react-native'
import React from 'react'
import { BLACK, WHITE } from '../constants/Color'

const SignUp = () => {
  return (
    <View style={{
      flex:1,
      backgroundColor:WHITE,
      justifyContent:'center',
      alignItems:'center'
    }}>
      <Text style={{
        color:BLACK,
        fontSize:20
      }}>SignUp Here</Text>
    </View>
  )
}

export default SignUp