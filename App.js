import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
//screens
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import MainContainer from './screens/MainContainer';
import ChooseLocation from './navigation/ChooseLocation';
import Setting from './navigation/Setting';
//navigation


//
const Stack= createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen options={{ headerShown: false }} name="MainContainer" component={MainContainer} />
        <Stack.Screen  name="c" component={ChooseLocation} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}