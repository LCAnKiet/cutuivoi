import React, { useState, useEffect, useRef } from 'react'
import { View, Text,PermissionsAndroid, } from 'react-native';
// import Geolocation from 'react-native-geolocation-service';

 const Location=()=>{
    useEffect(()=>{
        requestCameraPermission();
    })
    const requestCameraPermission = async () => {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: 'Cool Photo App Camera Permission',
              message:
                'Cool Photo App needs access to your camera ' +
                'so you can take awesome pictures.',
              buttonNeutral: 'Ask Me Later',
              buttonNegative: 'Cancel',
              buttonPositive: 'OK',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log('You can use the Location');
          } else {
            console.log('Fail Truy Cap');
          }
        } catch (err) {
          console.warn(err);
        }
      };
  return (
    <View>
      <Text></Text>
     </View>
  );
}
export default Location