import React from 'react'
import {StatusBar, StyleSheet, Text, View, Ionicons, ImageBackground} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';





import Icon from 'react-native-ico-material-design';


const homeName='Home';
const methodName='Methodd';
const settingName='Settingg';
const bicycleName='Bicyclee';

const Tab = createBottomTabNavigator();

 const MainContainer=()=>{
    return(
    <NavigationContainer independent={true}>
        <Tab.Navigator
        initialRouteName={homeName} 
        screenOptions={({route})=>({
            tabBarIcon:({focused,color,size})=>{
                let iconName;
                let rn =route.name;
                if(rn===homeName){
                    iconName = focused? 'home':'home-outline'
                }
                else if(rn === methodName){
                    iconName = focused? 'list':'list-outline'
                }
                else if(rn === settingName){
                    iconName = focused? 'setting':'setting-outline'
                }
                else if(rn === bicycleName){
                    iconName = focused? 'bicycle':'bicycle-outline'
                }
                 
                return<Ionicons name={iconName} size={size} color={color}/>
            },
        })}
        tabBarOptions={{
            activeTintColor:'tomato',
            inactiveTintColor:'grey',
            labelStyle:{paddingBottom:10,fontSize:10},
            style:{padding:10,height:70}
        }}
        >

            <Tab.Screen name='homeName' component={HomeScreen}/>
            <Tab.Screen name='methodName' component={Method}/>
            <Tab.Screen name='settingName' component={Setting}/>
            <Tab.Screen name='bicycleName' component={Bicycle}/>

        </Tab.Navigator>
       </NavigationContainer>
    );
}
export default MainContainer;

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f8f8ff'
    },
    txt:{
        justifyContent:'center',
        fontSize:30,
        marginHorizontal:50,
        marginVertical:50
        
    }
})