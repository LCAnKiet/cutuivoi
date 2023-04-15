import React ,{Component}from 'react';
import { View, Text ,StyleSheet} from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import{GOOGLE_MAPS_KEY} from './ggMap_key'
const AddPick=({
  placeholderText,fetchAddress
})=> {
  const onPressAddress=(data,details)=>{
    console.log("detail+++>>",details)
    const lat =details.geometry.location.lat
    const lng=details.geometry.location.lng
    fetchAddress()
  }
  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder={placeholderText}
        onPress={onPressAddress}
        fetchDetails={true}
        query={{
          key: GOOGLE_MAPS_KEY,
          language: 'en',
        }}
        styles={{
          textInputContainer:styles.containerStyle,
          textInput:styles.textInputStyle
        }}
      />
    </View>

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerStyle:{
    backgroundColor:'white'
  },
  textInputStyle:{
    height:48,
    color:'black',
    fontSize:16,
    backgroundColor:'#F3F3F3'
  }
})

  

export default AddPick