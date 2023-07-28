import { View, Text } from 'react-native'
import React from 'react'
import { HEIGHT, WIDTH } from '../constants/Config'
import { BLACK } from '../constants/Color'
import { TextInput } from 'react-native'


const Input = ({
  label="",
  placehoolder="",
  marginTop = HEIGHT * 0.01,
  type="",
  inputdata = "",
 setInputdata = {},
 keyboardType = 'default',
 editable = true,
 maxLength = 100,
 secure,

}) => {
  return (
  <>
  <View style={{
        height:HEIGHT * 0.04,
        width:WIDTH * 0.85,
        // backgroundColor:'green',
        alignSelf:'center',
        marginTop:marginTop,
        // marginTop:HEIGHT * 0.05,
        justifyContent:'flex-end'
      }}>
        <Text style={{
          color:'#919191',
          fontFamily:'Roboto-Medium',
          fontSize:18,

        }}>
          {/* Email address */}
          {label}
        </Text>

      </View>

      <TextInput 

      onChangeText = {(res)=>{

       
          if (type == 'email') {
            if (res[0] != " " && (/[a-zA-Z" "]/.test(res[res.length - 1]))) {
                setInputdata(res);
            }  else if (!/,*-#$%^&*()=+!_]/.test(res.slice(-1))) {
               setInputdata(res);
            } 
        }else{
          setInputdata(res)
        }

      }}
      style={{
        height:HEIGHT * 0.05,
        width:WIDTH * 0.85,
        // backgroundColor:'pink',
        alignSelf:'center',
        borderBottomColor:BLACK,
        borderBottomWidth:0.5
      }}
      placeholder={placehoolder}
      placeholderTextColor={'#919191'}
      value={inputdata}
      editable={editable}
      maxLength={maxLength}
      keyboardType={keyboardType}
      secureTextEntry={secure}

      />
  </>
  )
}

export default Input