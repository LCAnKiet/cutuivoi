import React, { Component,useRef,useState,useEffect } from 'react';
import { Dimensions, Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import MapView, { Callout, Marker, Polygon } from 'react-native-maps';
import * as Location from 'expo-location';
import { point, polygon } from '@turf/helpers';
import destination from '@turf/destination';
import * as geolib from 'geolib';
import getDistance from 'geolib/es/getDistance';
const { width, height } = Dimensions.get('window');
const img = require('../assets/point.png')
const loc = require('../assets/circle.png')
const rm = require('../assets/remove.png')
import { useNavigation } from '@react-navigation/native';
// import checkedPologon from './checkPolygon';
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

export default function Zonee(){
    const mapRef=useRef(null);
    const [marker,setMarker]=useState();
    const navigation = useNavigation();
    const [location,setLocation]=useState(null);
    const[error,setErr]=useState(null)
   
    // Alert.checkedPologon =(userLocation)=> {
    //     geolib.isPointInPolygon(userLocation, myPolygon);
    //     let msg ='';
    //     if(bol){
    //       msg='Bạn đang ở trong Khu Vực cho phép';
    //     }
    //     else{
    //       msg='Bạn đã oử ngoài Khu Vực cho phép hãy quay trở lại';
    //     }
    
    //     Alert.alert('THÔNG BÁO ',msg,[
    //         {
    //           text:'Cancel',
    //           onPress:()=>console.log('Cancel Pressed'),
    //           style:'cancel'
    //         },
    //         {
    //           text:'Tôi biết rồi !',
    //           onPress:()=>console.log('OK Pressed'),
    //         }
    //       ])
    //   }
      
    
    
    
    return(
        <View style={styles.container}>
            <MapView style={styles.map}
                showsMyLocationButton={true}
                showsUserLocation={true}
                userLocationUpdateInterval={5000} 
                checkedPologon={5000}
                onPress={e => {
                    console.log(e.nativeEvent.coordinate);
                    setMarker(e.nativeEvent.coordinate)
                    // checkPologon(e.nativeEvent.coordinate)
                }}
                ref={mapRef}
                initialRegion={{
                    latitude: 10.762622,
                    longitude: 106.660172,
                    latitudeDelta: 0.0421,
                    longitudeDelta: 0.0421,
                }}>
                {/* Marker */}
                {/* {marker !== undefined ? <Marker coordinate={marker}>

                </Marker> : null} */}

                {/* Zonee */}
                <Polygon
                    coordinates={myPolygon}
                    fillColor="rgba(0, 255, 0, 0.1)"
                    strokeColor="rgba(0,0,0,0.5)"
                    strokeWidth={2}
                />

                {/* POINT */}
                <Marker image={img}
                    // https://cdn-icons-png.flaticon.com/512/5266/5266122.png
                    // ref={ref => polygon.marker = ref}
                    coordinate={{ longitude: 106.80534451057385, latitude: 10.880716731633443 }}>
                    <Callout>
                        <Text>Trường Đại học Bách khoa</Text>
                    </Callout>
                </Marker>
                <Marker image={img}
                    // ref={ref => polygon.marker = ref}
                    coordinate={{ longitude: 106.79918062591409, latitude: 10.8758357426281 }}>
                    <Callout>
                        <Text>Trường Đại học Khoa học Tự nhiên</Text>
                    </Callout>
                </Marker>
                <Marker image={img}
                    // ref={ref => polygon.marker = ref}
                    coordinate={{ longitude: 106.80209849707911, latitude: 10.872081072483068 }}>
                    <Callout>
                        <Text>Trường Đại học Khoa học Xã hội và Nhân văn</Text>
                    </Callout>
                </Marker>
                <Marker image={img}
                    // ref={ref => polygon.marker = ref}
                    coordinate={{ longitude: 106.80163032591521, latitude: 10.8777322971507 }}>
                    <Callout>
                        <Text>Trường Đại học Quốc tế</Text>
                    </Callout>
                </Marker>
                <Marker image={img}
                    // ref={ref => polygon.marker = ref}
                    coordinate={{ longitude: 106.80305394771223, latitude: 10.870166847460377 }}>
                    <Callout>
                        <Text>Trường Đại học Công nghệ Thông tin</Text>
                    </Callout>
                </Marker>
                <Marker image={img}
                    // ref={ref => polygon.marker = ref}
                    coordinate={{ longitude: 106.77830268399818, latitude: 10.87065230062484 }}>
                    <Callout>
                        <Text>Trường Đại học Kinh tế – Luật</Text>
                    </Callout>
                </Marker>
                <Marker image={img}
                    // ref={ref => polygon.marker = ref}
                    coordinate={{ longitude: 106.78251843940893, latitude: 10.882364774374935 }}>
                    <Callout>
                        <Text>Ký túc xá Khu B Đại học Quốc gia TP.HCM</Text>
                    </Callout>
                </Marker>
                <Marker image={img}
                    // ref={ref => polygon.marker = ref}
                    coordinate={{ longitude: 106.80631205474928, latitude: 10.878455113046424 }}>
                    <Callout>
                        <Text>Ký túc xá Khu A Đại học Quốc gia TP.HCM</Text>
                    </Callout>
                </Marker>

            </MapView>
        </View>
    );
}

const styles = {
    container: {
      alignItems: 'stretch',
      flex: 1,
    },
    map: {
      flex: 1,
    },
    btn: {
      marginTop: 25,
      zIndex: -1,
      padding: 10,
      alignItems: 'center'
  
    }
  };