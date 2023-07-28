import React  from "react";
import {View}  from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from '../redux/reducers/index';
import {createRef} from 'react';
import Appnavigator from "./Appnavigator";


const store = configureStore({ reducer: rootReducer });

export default Navigation = () =>{
  return(
  
    <Provider store={store}>
        <NavigationContainer ref={createRef()}>
          <Appnavigator/>
        </NavigationContainer>
    </Provider>
  )
}