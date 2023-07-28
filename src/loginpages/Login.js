import {View, Text, Pressable, Alert, KeyboardAvoidingView} from 'react-native';
import React, {useState} from 'react';
import {BLACK, RED, WHITE} from '../constants/Color';
import {HEIGHT, WIDTH} from '../constants/Config';
import {TextInput} from 'react-native';
import Input from '../components/Input';
import {CustomBtn} from '../components/CustomBtn';
import UserStack from '../navigation/UserStack';
import {useDispatch} from 'react-redux';
import {checkuserToken} from '../redux/actions/auth';

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const [password, setPassword] = useState('');
  const [mail, setMail] = useState('');

  function ValidateEmail(input) {
    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (input.match(validRegex)) {
      return true;
    } else {
      Alert.alert('Invalid email address!');
      return false;
    }
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: WHITE,
      }}>
      <Input
        label="Email address"
        placehoolder="Enter Email address"
        marginTop={HEIGHT * 0.05}
        type="email"
        inputdata={mail}
        setInputdata={setMail}
        secure={false}
      />
      <Input
        label="Password"
        placehoolder="Enter Email address"
        marginTop={HEIGHT * 0.02}
        type="password"
        inputdata={password}
        setInputdata={setPassword}
        secure={true}
      />
      <Pressable
        onPress={() => {
          Alert.alert('Forget Passed');
        }}
        style={{
          height: HEIGHT * 0.05,
          width: WIDTH * 0.85,
          // backgroundColor:'pink',
          alignSelf: 'center',
          justifyContent: 'center',
          marginTop: HEIGHT * 0.01,
        }}>
        <Text
          style={{
            color: '#FA4A0C',
            fontFamily: 'Roboto-Medium',
            fontSize: 16,
          }}>
          Forget passcode ?
        </Text>
      </Pressable>

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
          text="Login"
          width={WIDTH * 0.85}
          backgroundColor="#FA4A0C"
          borderColor="#FA4A0C"
          //  opacity={0.5}
          text_color={WHITE}
          onTouch={() => {
            if (!ValidateEmail(mail)) {
            } else if (password == '' || password == null) {
              Alert.alert('Please enter the password');
            }
            // storeObjByKey('loginResponse', res).then(() => {
            //   dispatch(checkuserToken());
            // });
            else {
              navigation.navigate('UserStack');
            }
          }}
        />
      </View>
    </View>
  );
};

export default Login;
