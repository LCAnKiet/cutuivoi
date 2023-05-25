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
import Zonee from './navigation/Zonee'
import XeThue from './navigation/XeThue';
import InfoXe from './navigation/infoXe';
import DanhSachTram from './navigation/DanhSachTram';
import ThanhToan from './navigation/ThanhToan';
import XeThue2 from './navigation/XeThue2';
import ctx1 from './Stations/ctx1';
import ctx2 from './Stations/ctx2';
import ctx3 from './Stations/ctx3';
import ctx4 from './Stations/ctx4';
import ctx5 from './Stations/ctx5';
import ctx1t2 from './Stations/ctx1t2';
import ctx2t2 from './Stations/ctx2t2';
import PayXe1 from './Stations/PayXe1';
import PayXe1T2 from './Stations/PayXe1T2';
import Zonee2 from './navigation/Zonee2';
import Fetch from './navigation/fect';


//navigation
// import firebase from 'firebase'

//
const Stack= createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen options={{ headerShown: false }} name="Home" component={MainContainer} />
        <Stack.Screen  name="c" component={ChooseLocation} /> 
        <Stack.Screen   name="Đại học Bách Khoa" component={XeThue} />
        <Stack.Screen   name="Danh Sach Tram" component={DanhSachTram} />
        <Stack.Screen  options={{ headerShown: false }} name="Pay" component={ThanhToan} />
        <Stack.Screen   name="Đại học Khoa học tự nhiên" component={XeThue2} />
        <Stack.Screen  options={{ headerShown: false }} name="ctx1" component={ctx1} />
        <Stack.Screen  options={{ headerShown: false }} name="ctx2" component={ctx2} />
        <Stack.Screen  options={{ headerShown: false }} name="ctx3" component={ctx3} />
        {/* <Stack.Screen  options={{ headerShown: false }} name="ctx4" component={ctx4} />
        <Stack.Screen  options={{ headerShown: false }} name="ctx5" component={ctx5} /> */}
        <Stack.Screen  options={{ headerShown: false }} name="ctx1t2" component={ctx1t2} />
        <Stack.Screen  options={{ headerShown: false }} name="ctx2t2" component={ctx2t2} />
        <Stack.Screen  options={{ headerShown: false }} name="PayXe1" component={PayXe1} />
        <Stack.Screen  options={{ headerShown: false }} name="PayXe1T2" component={PayXe1T2} />
        <Stack.Screen  options={{ headerShown: false }} name="y"  component={Zonee2} />
        <Stack.Screen  options={{ headerShown: false }} name="d"  component={Zonee2} />
        <Stack.Screen  options={{ headerShown: false }} name="t"  component={Fetch} />

        <Stack.Screen  name="Map" component={Zonee} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}