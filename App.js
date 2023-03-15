import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons'
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
//screens
import Login from './screens/Login';
import SignUp from './screens/SignUp';

//navigation
import Home from './navigation/Home';
import Setting from './navigation/Setting';
import Method from './navigation/Method';
import Scan from './navigation/Scan';
// import MainContainer from './screens/MainContainer';

const tab= createMaterialBottomTabNavigator()
const Stack= createStackNavigator();

function TabNavigatior(){
  return(
    <tab.Navigator initialRouteName="Home"
    activeColor="#1e90ff"
    inactiveColor="#3e2465"
    screenOptions={({route})=>({
      tabBarIcon:({focused,color,size})=>{
          let iconName;
          let rn =route.name;
          if(rn==='Home'){
              iconName = focused? 'home':'home-outline'
          }
          else if(rn === 'Scan'){
              iconName = focused? 'qr-code':'qr-code-outline'
          }
          else if(rn === 'Method'){
              iconName = focused? 'bicycle':'bicycle-outline'
          }
          else if(rn === 'Setting'){
              iconName = focused? 'menu':'menu-outline'
          }
           
          return<Ionic name={iconName} size={size} color={color}/>
      },
  })}
    >
        <tab.Screen name='Home' component={StackNavigator}  />
        <tab.Screen name='Scan' component={Scan}/>
        <tab.Screen name='Method' component={Method}/>
        <tab.Screen name='Setting' component={Setting}/>


    </tab.Navigator>
  )
}
function StackNavigator()
  {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Login" component={Home}  />
      <Stack.Screen name="SignUp" component={SignUp}/>
    </Stack.Navigator>
  );
}

export default function App(){
  return(
    <NavigationContainer>
      <TabNavigatior/>
      {/* <StackNavigator/> */}
    </NavigationContainer>
  )
  
}
