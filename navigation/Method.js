import React, {useState,useEffect, useRef} from 'react'
import MapView,{Marker} from 'react-native-maps';
import { View, Text,StyleSheet,Dimensions ,Button} from 'react-native'
import * as Location from'expo-location'
import{GOOGLE_MAP_KEY} from './ggMap_key'
import MapViewDirections from 'react-native-maps-directions';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ChooseLocation from './ChooseLocation';
import { useNavigation } from '@react-navigation/native';
import data from 'react-native-ico-material-design/src/data';

const Method =(props)=> {
  const navigation = useNavigation();

    const[state, setMapregion]=useState({
    vitri:{
      latitude:106.660172,
      longitude: 10.762622,
      // latitudeDelta:0.0922,
      // longitudeDelta:0.0421,
    },
    diemden:{
      
    }
    
  });
    const{vitri,diemden}= state
    const refMap=useRef()
  // const userLocation =async()=>{
  //   let{status}=await Location.requestBackgroundPermissionsAsync();
  //   if(status!== 'granted'){
  //     setErrorMsg('Loi r ku');
  //   }
  //   let location=await Location.getCurrentPositionAsync({enableHighAccuracy:true})
  //   setMapregion({
  //     latitude:location.coords.latitude,
  //     longitude:location.coords.longitude,
     
  //   });
  //   console.log(location.coords.latitude,location.coords.longitude)
  // }
  // useEffect(() => {
  //   userLocation();
  // }, []);
  const onPressLocation=()=>{
    navigation.navigate('c', {getCordinates: fetchValues})
  }

  const fetchValues=(data)=>{
    setState({
      vitri:{
        latitude:data.pickCord.latitude,
        longitude:data.pickCord.longitude

      },
      diemden:{
        latitude:data.desCord.latitude,
        longitude:data.desCord.longitude
      }
    })
  }
  const data = {
    "type": "FeatureCollection",
    "features": [{
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [106.80534451057385, 10.880716731633443]
    
      },
      properties: {
        name: 'Trường Đại học Bách khoa'
      }
    }, {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [106.79918062591409, 10.8758357426281]
      },
      properties: {
        name: 'Trường Đại học Khoa học Tự nhiên'
      }
    }, {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [106.80209849707911, 10.872081072483068]
      },
      properties: {
        name: 'Trường Đại học Khoa học Xã hội và Nhân văn'
      }
    }, {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [106.80163032591521, 10.8777322971507]
      },
      properties: {
        name: 'Trường Đại học Quốc tế'
      }
    }, {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [106.80305394771223, 10.870166847460377]
      },
      properties: {
        name: 'Trường Đại học Công nghệ Thông tin'
      }
    }, {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [106.77830268399818, 10.87065230062484]
      },
      properties: {
        name: 'Trường Đại học Kinh tế – Luật'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [106.78251843940893,10.882364774374935 ]
      },
      properties: {
        name: 'Ký túc xá Khu B Đại học Quốc gia TP.HCM'
      }
    },{
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [106.80631205474928, 10.878455113046424 ]
      },
      properties: {
        name: 'Ký túc xá Khu A Đại học Quốc gia TP.HCM'
      }
    },]
  };
  return (
    <View style={styles.container}>
      <View style={styles.btnC }>
        <Text style={styles.txt }> Where aro you gooo ??</Text>
        <TouchableOpacity 
        onPress={onPressLocation}
        style={styles.btn} >
          <Text > Chon diem den</Text>

        </TouchableOpacity>
      </View>
      <MapView style={styles.map}
      // region={mapRegion}
      initialRegion={vitri}
      ref={refMap}
      >
          <Marker coordinate={vitri} title='marker'  />
          <Marker coordinate={diemden} title='marker'  />

        <MapViewDirections
          
          origin={vitri}
          destination={diemden}
          apikey={GOOGLE_MAP_KEY}
          strokeWidth={3}
          strokeColor="red"
          optimizeWaypoints={true}
          onReady={result => {
            refMap.current.fitToCoordinates(result.coordinate,{
              edgePadding:{
                right:30,
                bottom:300,
                left:30,
                top:100,
              }
            })
          }}
                  />
      </MapView>
      {/* <Button title='Tap to Scan again' onPress={userLocation} /> */}
    </View>
  );
}
export default Method
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  txt:{
    fontSize: 20,
        fontStyle: 'bold',
        marginTop: 10,
        padding: 0,
  },
  btnC:{
    backgroundColor:'white',
    width:'100%',
    padding:30,
    borderTopEndRadius:24,
    borderTopStartRadius:24
  },
  btn:{
    backgroundColor:'white',
    borderRadius:4,
    borderWidth:1,
    alignItems:'center',
    height:48,
    justifyContent:'center',
    
  },
   map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,

  },
});




















