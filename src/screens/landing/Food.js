import {View, Text, FlatList, Pressable, Image} from 'react-native';
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
            height: HEIGHT * 0.4,
            width: WIDTH * 0.6,
            // backgroundColor:'pink',
            backgroundColor: WHITE,
            borderWidth: 1,
            borderColor: WHITE,
            marginLeft: 5,
            elevation: 10,
            borderRadius: 5,
            marginTop: 5,
          }}>
          <View
            style={{
              height: HEIGHT * 0.25,
              width: WIDTH * 0.6,
              // backgroundColor:'yellow',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              style={{
                height: 180,
                width: 180,
              }}
              source={item.product_image}
            />
          </View>
          <View
            style={{
              height: HEIGHT * 0.04,
              width: WIDTH * 0.4,
              // backgroundColor:'green',
              alignSelf: 'center',
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
        backgroundColor: WHITE,
      }}>
      <FlatList
        horizontal={true}
        data={Product_data}
        renderItem={flatlist_product_view}
      />
    </View>
  );
};

export default Food;
