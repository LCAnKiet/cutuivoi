import { View, Text , StyleSheet,TouchableOpacity,Image,Dimensions} from 'react-native'
import React from 'react'
import Zone from './Zonee'
import Zonee from './Zonee'
import { useNavigation } from '@react-navigation/native';
const InfoXe = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        
            <Text>Xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</Text>
        </View>
          
    </View>
  )
}
 
export default InfoXe
const deviceWidth=Math.round(Dimensions.get('window').width);
const styles = StyleSheet.create({
  container: {
        flex:1
  },
  card:{
    width:deviceWidth,
    backgroundColor:'#a29bfe'
  }

  
});
