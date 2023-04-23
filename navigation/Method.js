import React, { useState, useEffect, useRef } from 'react'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { View, Text, StyleSheet, Dimensions, Button } from 'react-native'
import * as Location from 'expo-location'
import { GOOGLE_MAP_KEY,GOOGLE_MAPs_KEY } from './ggMap_key'
import MapViewDirections from 'react-native-maps-directions';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ChooseLocation from './ChooseLocation';
import { useNavigation } from '@react-navigation/native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const Method = (props) => {
  const navigation = useNavigation();
  const mapRef=useRef(null);
  const [markerlist,setMarkerList] =useState([
    
  ])
  // const [state, setMapregion] = useState({
  //   vitri: {
  //     latitude: 106.660172,
  //     longitude: 10.762622,
  //     latitudeDelta: 0.015,
  //     longitudeDelta: 0.015,
  //   },
  //   diemden: {

  //   }

  // });
  // const { vitri, diemden } = state
  // const refMap = useRef()
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
  const onPressLocation = () => {
    navigation.navigate('c',)
    // { getCordinates: fetchValues }
  }

  // const fetchValues = (data) => {
  //   setState({
  //     vitri: {
  //       latitude: data.pickCord.latitude,
  //       longitude: data.pickCord.longitude

  //     },
  //     diemden: {
  //       latitude: data.desCord.latitude,
  //       longitude: data.desCord.longitude
  //     }
  //   })
  // }
  const[origin,setOrigin]=useState();
  const[distination,setDistination]=useState();

  async function moveLocation(latitude,longitude){
    mapRef.current.animateToRegion(
      {
        latitude,
        longitude,
        latitudeDelta:0.015,
        longitudeDelta:0.015,
      },
      2000,
    );
  }

  return (
    <View style={styles.container}>

      <View style={styles.btnC}>
        <View style={{zIndex:1,flex:0.5,flexDirection:'row'}}>
        <View style={{flex:0.5}}>
        <GooglePlacesAutocomplete
                placeholder="Location"
                onPress={(data,details=null)=>{
                  let originCord={
                    latitude:details?.geometry?.location.lat,
                    longitude:details?.geometry?.location.lng
                  }
                  setOrigin(originCord)
                  moveLocation(originCord)
                }}
                fetchDetails={true}
                query={{
                    key: GOOGLE_MAP_KEY,
                    language: 'en'
                }}
                styles={{
                    textInputContainer: styles.containerStyle,
                    textInput: styles.textInputStyle
                }}
                onFail={error=>console.log(error)}

            />
        </View>
        <View style={{flex:0.5}}>
        <GooglePlacesAutocomplete
                placeholder="Distination"
                onPress={(data,details=null)=>{
                  let distinationCord={
                    latitude:details?.geometry?.location.lat,
                    longitude:details?.geometry?.location.lng
                  }
                  setDistination(distinationCord)
                  moveLocation(distinationCord)
                }}
                fetchDetails={true}
                query={{
                    key: GOOGLE_MAPs_KEY,
                    language: 'en'
                }}
                styles={{
                    textInputContainer: styles.containerStyle,
                    textInput: styles.textInputStyle
                }}
                onFail={error=>console.log(error)}

            />
        </View>
        </View>
        
      
        <Text style={styles.txt}> Where aro you gooo ??</Text>
        
      </View>

      

      <MapView style={styles.map}
      ref={mapRef}
        provider={PROVIDER_GOOGLE}
        apikey={GOOGLE_MAPs_KEY}
        region={{
          latitude: 10.865385303360243,
            longitude: 106.79807670391571,
            latitudeDelta: 0.02,
            longitudeDelta: 0.03
        }}
      >

        {origin!== undefined ?<Marker coordinate={origin}>

        </Marker>:null}
       
        {distination!== undefined ?<Marker coordinate={distination}>

        </Marker>:null}   
     



          {origin !=undefined && distination !=undefined ?( <MapViewDirections
            origin={origin}
            destination={distination}
            apikey={GOOGLE_MAPs_KEY}
            strokeWidth={3}
            strokeColor="hotpink"
          />):null}
      </MapView>
            <View>
              
            </View>
    </View>
  );
}
export default Method
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  txt: {
    fontSize: 20,
    fontStyle: 'bold',
    marginTop: 10,
    padding: 0,
  },
  btnC: {
    backgroundColor: 'white',
    width: '100%',
    padding: 30,
    borderTopEndRadius: 24,
    borderTopStartRadius: 24
  },
  btn: {
    backgroundColor: 'white',
    borderRadius: 4,
    borderWidth: 1,
    alignItems: 'center',
    height: 48,
    justifyContent: 'center',

  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,

  },
});




















