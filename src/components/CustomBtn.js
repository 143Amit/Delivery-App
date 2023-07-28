import React from "react";
import { StyleSheet, Text, Pressable, View } from "react-native";
import { WIDTH } from "../constants/Config";
import { BLACK, WHITE } from "../constants/Color";
// import { WIDTH } from "../constants/Config";
// import { BLACK, WHITE } from "../constants/Color";

export const CustomBtn = ({
    text = "",
    onTouch,
    width = WIDTH * 0.9,
    backgroundColor = "#FEC520",
    height = 60,
    borderColor = WHITE,
    opacity,
    text_color = BLACK
    
}) => {
    return (
        <Pressable style={{
            ...styles.button,
            width: width,
            backgroundColor: backgroundColor,
            height: height,
            borderWidth: 1,
            borderColor: borderColor,
            elevation:5,
            opacity:opacity,
            // bottom:0,
            // position:'absolute'
        }}
            onPress={onTouch}
        >
            <Text style={{...styles.buttonText,color:text_color}}>{text}</Text>
        </Pressable>
    )
}
const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        marginTop: 20,
    },
    buttonText: {
        fontSize: 18,
        // fontWeight: '600',
        // color: text_color,
        fontFamily:'Roboto-Bold'
    },
})