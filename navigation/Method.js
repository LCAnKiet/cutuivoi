import React, {useState,useEffect, useRef} from 'react'
import MapView,{Marker} from 'react-native-maps';
import { View, Text,StyleSheet,Dimensions ,Button} from 'react-native'
import * as Location from'expo-location'
import{GOOGLE_MAPS_KEY} from './ggMap_key'
import MapViewDirections from 'react-native-maps-directions';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ChooseLocation from './ChooseLocation';
import { useNavigation } from '@react-navigation/native';

const Method =()=> {
  const navigation = useNavigation();

    const[state, setMapregion]=useState({
    vitri:{
      latitude:10.762622,
      longitude: 106.660172,
      latitudeDelta:0.0922,
      longitudeDelta:0.0421,
    },
    diemden:{
      latitude:10.1081553,
      longitude: 106.44058719999998,
      latitudeDelta:0.0922,
      longitudeDelta:0.0421,
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

  return (
    <View style={styles.container}>
      <View style={styles.btnC }>
        <Text style={styles.txt }> Where aro you gooo ??</Text>
        <TouchableOpacity 
        onPress={() => navigation.navigate('c')}
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
          apikey={GOOGLE_MAPS_KEY}
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




















