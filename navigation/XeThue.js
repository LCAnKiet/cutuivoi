import { View, Text,ScrollView , StyleSheet,TouchableOpacity,Image} from 'react-native'
import React from 'react'
// import Zone from './Zonee'
// import Zonee from './Zonee'
// import InfoXe from './infoXe'
import { useNavigation } from '@react-navigation/native';
import Xe1 from '../Stations/Xe1'
import Xe2 from '../Stations/Xe2';
import Xe3 from '../Stations/Xe3';
import Xe4 from '../Stations/Xe4';
import Xe5 from '../Stations/Xe5';

const XeThue = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ScrollView>
        <Xe1/>
        <Xe2/>
        <Xe3/>
        <Xe4/>
        <Xe5/>

      </ScrollView>
      
    </View>
  )
}
 
export default XeThue

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  textName:{
    position: 'resilute',
    fontSize: 20,
    padding: 50,
    color: '#dc143c',
    fontWeight: 'bold',
    marginHorizontal: 220,
    marginTop:0

  },
  textTT:{
    position: 'resilute',
    fontSize: 15,
    padding: 100,
    color: '#dc143c',
    fontWeight: 'bold',
    marginHorizontal: 150,
    marginTop:-120
  },
  textG:{
    position: 'resilute',
    fontSize: 15,
    padding: 100,
    color: '#1e90ff',
    fontWeight: 'bold',
    marginHorizontal: 150,
    marginTop:-150
  },
  btnLS: {
    position: 'resilute',
    backgroundColor: '#f0f8ff',
    width: 350,
    height: 170,
    borderRadius: 20,
    marginTop:30,
    marginHorizontal: 20,

  },
  icon:{
    position: 'absolute',

  }

  
});
