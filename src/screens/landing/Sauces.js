import { View, Text } from 'react-native'
import React from 'react'
import { BLACK, WHITE } from '../../constants/Color'

const Sauces = () => {
  return (
    <View style={{
      flex:1,
      backgroundColor:WHITE,
      // justifyContent:'center',
      alignItems:'center'
    }}>
      <Text style={{
        marginTop:30,
        color:BLACK,
        fontSize:20
      }}>Sauces</Text>
    </View>
  )
}

export default Sauces