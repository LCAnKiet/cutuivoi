import React, { Component,useRef,useState,useEffect } from 'react';
import { Dimensions, Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import MapView, { Callout, Marker, Polygon } from 'react-native-maps';
import { point, polygon } from '@turf/helpers';
import destination from '@turf/destination';
import * as Location from 'expo-location';
import * as geolib from 'geolib';
import getDistance from 'geolib/es/getDistance';

let myPolygon=[
    { longitude: 106.79807670391571, latitude: 10.865385303360243 },
    { longitude: 106.80739748382999, latitude: 10.873913736498887 },
    { longitude: 106.81112579576306, latitude: 10.885388782710251 },
    { longitude: 106.8040329096465, latitude: 10.890300146055639 },
    { longitude: 106.79121115389263, latitude: 10.891862835643485 },
    { longitude: 106.78284518565258, latitude: 10.889228582831146 },
    { longitude: 106.77297879919556, latitude: 10.881459633792876 },
    { longitude: 106.77061450382337, latitude: 10.876682076061547 },
    { longitude: 106.77461561906861, latitude: 10.870252344833935 },
    { longitude: 106.78698270255393, latitude: 10.868287677095443 },
]
    
    const checkedPologon=(userLocation)=> {
        let bol =geolib.isPointInPolygon(userLocation, myPolygon);
        let msg ='';
        if(bol){
          msg='Bạn đang ở trong Khu Vực cho phép';
        }
        else{
          msg='Bạn đã oử ngoài Khu Vực cho phép hãy quay trở lại';
        }
    
        Alert.alert('THÔNG BÁO ',msg,[
            {
              text:'Cancel',
              onPress:()=>console.log('Cancel Pressed'),
              style:'cancel'
            },
            {
              text:'Tôi biết rồi !',
              onPress:()=>console.log('OK Pressed'),
            }
          ])
      }

export default checkedPologon