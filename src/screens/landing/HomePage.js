import {
  View,
  Text,
  Image,
  Pressable,
  ScrollView,
  Alert,
  BackHandler,
} from 'react-native';
import React from 'react';
import {BLACK, RED, WHITE} from '../../constants/Color';
import {HEIGHT, MyStatusBar, WIDTH} from '../../constants/Config';
import {HeaderView} from '../../components/HeaderView';
import {Cart, Delicious, Menu, Search} from '../../constants/Imagepath';
import {TextInput} from 'react-native-gesture-handler';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Login from '../../loginpages/Login';
import SignUp from '../../loginpages/SignUp';
import Food from './Food';
import Drinks from './Drinks';
import {screensEnabled} from 'react-native-screens';
import Snacks from './Snacks';
import Sauces from './Sauces';
import {useFocusEffect} from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();

const HomePage = () => {
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
    <View
      style={{
        flex: 1,
        // backgroundColor: WHITE,
        backgroundColor:'#F2F2F2',

      }}>
      <MyStatusBar backgroundColor={'black'} barStyle={'light-content'} />

      {/* start header */}
      <HeaderView
        header_background_color={'#F2F2F2'}
        temp="Quick Delivery"
        left_icon_img={Menu}
        left_icon_height={20}
        left_icon_width={25}
        left_Icon_press={() => {
          Alert.alert('Menu is Pressed');
        }}
        // left_icon_tintColor={WHITE}

        right_Icon_press={() => {
          Alert.alert('Cart is Pressed');
        }}
        right_icon_img={Cart}
        right_icon_height={25}
        right_icon_width={25}
        // right_icon_tintColor={WHITE}

        text_alignItems="center" //flex-start , baseline ,center
        text_color={RED}
        text_fontSize={18}
        text_fontFamily="Roboto-Bold"
      />
      {/* end header */}

      {/* start delicious food for you */}
      <View
        style={{
          height: HEIGHT * 0.15,
          width: WIDTH * 0.9,
          // backgroundColor:'pink',
          alignSelf: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={Delicious}
          style={{
            height: 64.2,
            width: 162,
          }}
        />
      </View>
      {/* end delicious food for you */}

        {/* start search */}
      <Pressable
        style={{
          height: HEIGHT * 0.06,
          width: WIDTH * 0.9,
          alignSelf: 'center',
          // backgroundColor:'green',
          borderRadius: 20,
          flexDirection: 'row',
          // borderWidth: 2,
          // borderColor: 'gray',
          // justifyContent:'center'
          alignItems: 'center',
          backgroundColor:'#EFEEEE',
        }}>
        <View
          style={{
            height: HEIGHT * 0.06,
            width: WIDTH * 0.15,
            borderRadius: 15,
            // backgroundColor:'yellow',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={{
              height: 25,
              width: 25,
            }}
            source={Search}
          />
        </View>
        <View
          style={{
            height: HEIGHT * 0.06,
            width: WIDTH * 0.74,
            borderRadius: 15,
            // backgroundColor:'cyan',
            justifyContent: 'center',
            // alignItems:'center'
          }}>
            <Text style={{
              color:'gray',
              fontFamily:'Roboto-Bold',
              fontSize:18
            }}>
              Search
            </Text>
          {/* <TextInput
            style={{
              height: HEIGHT * 0.06,
              width: WIDTH * 0.74,
              fontFamily: 'Roboto-Regular',
              fontSize: 18,
              color: BLACK,
            }}
            placeholder="Search"
            placeholderTextColor={'#787777'}
            placeholderFontFamily="Roboto-Bold"
          /> */}
        </View>
      </Pressable>
      {/* end search */}
      
      <View
        style={{
          height: HEIGHT,
          // width: WIDTH ,
          width: WIDTH * 0.95,
          alignSelf: 'center',
          // backgroundColor: WHITE,
          backgroundColor:'#F2F2F2',
        }}>
        <Tab.Navigator
          initialRouteName="Food"
          screenOptions={{
            tabBarScrollEnabled: true,
            tabBarLabelStyle: {fontSize: 16, fontFamily: 'Roboto-Bold'},
            tabBarActiveTintColor: RED,
            tabBarItemStyle: {width: 100},
            tabBarStyle: {backgroundColor: '#F2F2F2', elevation: 0, width: WIDTH,},
            tabBarPressColor: WHITE,
            tabBarInactiveTintColor: '#8E8E8E',
            tabBarIndicatorStyle: {backgroundColor: RED},
          }}>
          <Tab.Screen name="Food" component={Food} />
          <Tab.Screen name="Drinks" component={Drinks} />
          <Tab.Screen name="Snacks" component={Snacks} />
          <Tab.Screen name="Sauces" component={Sauces} />
        </Tab.Navigator>
      </View>
    </View>
  );
};

export default HomePage;
