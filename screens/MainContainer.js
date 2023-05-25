import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons'
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../navigation/Home';
import Scan from '../navigation/Scan';
import Setting from '../navigation/Setting';
import Method from '../navigation/Method';
import Zone from '../navigation/Zone.js';
import Zonee from '../navigation/Zonee';
import ZoneZone from '../navigation/ZoneZone';

const tab = createMaterialBottomTabNavigator()



export default function MainContainer() {
    return (
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
            else if(rn === 'Dẫn đường'){
                iconName = focused? 'bicycle':'bicycle-outline'
            }
            else if(rn === 'Zone'){
              iconName = focused? 'map':'map-outline'
          }
            else if(rn === 'Setting'){
                iconName = focused? 'menu':'menu-outline'
            }
             
            return<Ionic name={iconName} size={size} color={color}/>
        },
    })}
      >
          <tab.Screen name='Home' component={Home} />
        <tab.Screen name='Scan' component={Scan} />
        <tab.Screen name='Dẫn đường' component={Method} />
        <tab.Screen name='Zone' component={ZoneZone} />
        <tab.Screen name='Setting' component={Setting} />
      </tab.Navigator>
        
    )
    
  }