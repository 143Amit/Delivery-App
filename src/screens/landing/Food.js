import {View, Text, FlatList, Pressable, Image, Alert} from 'react-native';
import React from 'react';
import {BLACK, RED, WHITE} from '../../constants/Color';
import {Food_Image_1, Food_Image_2} from '../../constants/Imagepath';
import {HEIGHT, WIDTH} from '../../constants/Config';

const Food = () => {
  Product_data = [
    {
      product_image: Food_Image_1,
      product_name: 'Veggie tamato mix',
      price: 'N1,900',
    },
    {
      product_image: Food_Image_1,
      product_name: 'Veggie tamato mix',
      price: 'N1,900',
    },
    {
      product_image: Food_Image_1,
      product_name: 'Veggie tamato mix',
      price: 'N1,900',
    },

    {
      product_image: Food_Image_1,
      product_name: 'Veggie tamato mix',
      price: 'N1,900',
    },
  ];
  flatlist_product_view = ({item}) => {
    return (
      <>
        <Pressable
          style={{
            height: HEIGHT * 0.3,
            width: WIDTH * 0.52,
            // backgroundColor:'pink',
            backgroundColor: WHITE,
            borderWidth: 1,
            borderColor: WHITE,
            marginHorizontal:7,
            // marginLeft: 10,
            // elevation: 10,
            borderRadius: 5,
            marginTop: 40,
            borderRadius:35
            
          }}>
          <View
            style={{
              height: HEIGHT * 0.2,
              width: WIDTH * 0.5,
              // backgroundColor:'yellow',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 1,
              position:'absolute',
              marginTop:-40,
              alignSelf:'center'
            }}>
            <Image
              style={{
                height: 180,
                width: 180,
                marginTop:20
              }}
              source={item.product_image}
            />
          </View>
          <View
            style={{
              // height: HEIGHT * 0.04,
              width: WIDTH * 0.25,
              // backgroundColor:'green',
              alignSelf: 'center',
               marginTop: 120,

            }}> 
            <Text
              style={{
                color: BLACK,
                fontFamily: 'Roboto-Bold',
                fontSize: 18,
                textAlign: 'center',
              }}>
              {item.product_name}
            </Text>
          </View>
          <View
            style={{
              height: HEIGHT * 0.05,
              width: WIDTH * 0.4,
              // backgroundColor:'cyan',
              alignSelf: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: RED,
                fontFamily: 'Roboto-Bold',
                fontSize: 18,
                textAlign: 'center',
              }}>
              {item.price}
            </Text>
          </View>
        </Pressable>
      </>
    );
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#F2F2F2',
        // backgroundColor: WHITE,
      }}>
        {/* start see more */}
        <Pressable
        onPress={()=>{
          Alert.alert("See More")
        }}
        style={{
          height:HEIGHT * 0.04,
          width:WIDTH * 0.9,
          alignSelf:'center',
          // backgroundColor:'cyan',
          marginVertical:HEIGHT * 0.01,
          alignItems:'flex-end'
        }}>
          <Text style={{
            color:RED,
            fontSize:17,
            fontFamily:'Roboto-Regular',
          }}>
            see more
          </Text>
        </Pressable>
        {/* end see more */}

      <FlatList
        horizontal={true}
        data={Product_data}
        renderItem={flatlist_product_view}
      />
    </View>
  );
};

export default Food;
