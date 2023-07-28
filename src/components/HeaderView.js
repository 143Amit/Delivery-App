import { useNavigation } from "@react-navigation/native"
import React, { useEffect } from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Use } from "react-native-svg"
// import { WIDTH } from "../constants/Config"
import { WHITE } from "../constants/Color"
import { BACKARROW } from "../constants/Imagepath"
import { WIDTH } from "../constants/Config"
// import { BACKARROW } from "../../constants/imagepath"

export const HeaderView = ({
  header_background_color,
    temp='',
    left_Icon_press="",
    left_icon_img,
    left_icon_height,
    left_icon_width,
    left_icon_tintColor,

    right_Icon_press="",
    right_icon_img,
    right_icon_height,
    right_icon_width,
    right_icon_tintColor,

    text_alignItems="",
    text_color,
    text_fontSize,
    text_fontFamily
}) =>{

    const navigation= useNavigation()

    // useEffect(()=>{
    //   console.log("Header usestate");
    //   console.log(text_alignItems);
    // },[])

    return(
        <>
        {/* start header */}
        <View
        style={{
          ...Styles.header,
          backgroundColor:header_background_color == undefined ? 'gray' :header_background_color,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            left_Icon_press()
            // if(press==''){
            //   navigation.goBack()
            // }else{
            //   press();
            // }
          }}
          style={{
            ...Styles.header2,
          }}
        >
          <Image
            style={{
              height: left_icon_height,
              width: left_icon_width,
              tintColor:left_icon_tintColor
            }}
            source={left_icon_img}
          />
        </TouchableOpacity>

          <View
            style={{
              height: 60,
              width: WIDTH * 0.7,
              // backgroundColor:'green',
              justifyContent: "center",
              // alignItems:'baseline'
              alignItems:text_alignItems
            }}
          >
            <Text
              style={{
                // ...Styles.headertxt,
                color:text_color,
                fontSize:text_fontSize,
              fontFamily: text_fontFamily,

              }}
            >
              {temp}
            </Text>
          {/* </View> */}


        </View>
        <TouchableOpacity
          onPress={() => {
            right_Icon_press()
            // if(press==''){
            //   navigation.goBack()
            // }else{
            //   press();
            // }
          }}
          style={{
            ...Styles.header3,
          }}
        >
          <Image
            style={{
              height: right_icon_height,
              width: right_icon_width,
              tintColor:right_icon_tintColor
            }}
            source={right_icon_img}
          />
        </TouchableOpacity>
             </View>
              {/* end header */}
        
        </>
    )
}
const Styles = StyleSheet.create({
    header: {
        height: 60,
        width: WIDTH * 1,
        // backgroundColor: 'gray',
        flexDirection: "row",
      },
      header2: {
        height: 60,
        width: WIDTH * 0.15,
        // backgroundColor:'pink',
        justifyContent: "center",
        alignItems: "center",
      },
      header3: {
        height: 60,
        width: WIDTH * 0.15,
        // backgroundColor:'yellow',
        justifyContent: "center",
        alignItems: "center",
      },
     
})