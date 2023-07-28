import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {HEIGHT, MyStatusBar, WIDTH} from '../constants/Config';
import {Image} from 'react-native';
import {
  Ellipse,
  Food,
  Rectangle_1,
  Rectangle_2,
  logo,
  toy,
} from '../constants/Imagepath';
import LinearGradient from 'react-native-linear-gradient';
import {CustomBtn} from '../components/CustomBtn';
import {WHITE} from '../constants/Color';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('LoginProcess');
    }, 3000);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#FF460A',
      }}>
      <MyStatusBar backgroundColor={'black'} barStyle={'light-content'} />
      <View
        style={{
          height: HEIGHT * 0.13,
          width: WIDTH * 0.85,
          // backgroundColor:'pink',
          alignSelf: 'center',
          // justifyContent:'center'
          justifyContent: 'flex-end',
        }}>
        <Image
          style={{
            height: 70,
            width: 70,
          }}
          source={logo}
        />
      </View>

      <View
        style={{
          height: HEIGHT * 0.15,
          width: WIDTH * 0.8,
          // backgroundColor:'green',
          alignSelf: 'center',
          justifyContent: 'center',
        }}>
        <Image
          style={{
            height: 85,
            width: 200,
          }}
          source={Food}
        />
      </View>

      <View
        style={{
          height: HEIGHT * 0.55,
          width: WIDTH * 1,
          // backgroundColor:'green',
          alignSelf: 'center',
          // justifyContent:'center',
          // position:'absolute',
          // bottom:0
        }}>
        <Image
          style={{
            height: 420,
            width: 400,
            // position:'absolute'
          }}
          source={toy}
        />
        <Image
          style={{
            height: 120,
            width: 500,
            position: 'absolute',
            bottom: 7,
          }}
          source={Rectangle_1}
        />
        <Image
          style={{
            height: 120,
            width: 500,
            position: 'absolute',
            bottom: 7,
            marginLeft: 200,
          }}
          source={Rectangle_2}
        />
      </View>
      {/* </LinearGradient> */}
      <View
        style={{
          height: HEIGHT * 0.1,
          width: WIDTH * 0.95,
          // backgroundColor:'yellow',
          alignSelf: 'center',
          // justifyContent:'center',
          alignItems: 'center',
        }}>
        <CustomBtn
          text="Get Started"
          width={WIDTH * 0.85}
          backgroundColor={WHITE}
          borderColor={WHITE}
          text_color="#FF460A"
          onTouch={() => {
            navigation.navigate('LoginProcess');
          }}
        />
      </View>
    </View>
  );
};
const Styles = StyleSheet.create({});

export default Splash;
