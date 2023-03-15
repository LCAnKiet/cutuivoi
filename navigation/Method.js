import React, {useState,useEffect} from 'react'
import MapView,{Marker} from 'react-native-maps';
import { View, Text,StyleSheet,Dimensions ,Button} from 'react-native'
import * as Location from'expo-location'

export default function Method() {

    const[mapRegion, setMapregion]=useState({
    latitude:10.762622,
    longitude: 106.660172,
    
  });
    
  const userLocation =async()=>{
    let{status}=await Location.requestBackgroundPermissionsAsync();
    if(status!== 'granted'){
      setErrorMsg('Loi r ku');
    }
    let location=await Location.getCurrentPositionAsync({enableHighAccuracy:true})
    setMapregion({
      latitude:location.coords.latitude,
      longitude:location.coords.longitude,
     
    });
    console.log(location.coords.latitude,location.coords.longitude)
  }
  useEffect(() => {
    userLocation();
  }, []);

  return (
    <View style={styles.container}>
      <MapView style={styles.map}
      region={mapRegion}
      >
          <Marker coordinate={mapRegion} title='marker'  />
      </MapView>
      <Button title='Tap to Scan again' onPress={userLocation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
   map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,

  },
});




















