import { View, Text , StyleSheet,TouchableOpacity,Image} from 'react-native'
import React from 'react'
import Zone from './Zonee'
import Zonee from './Zonee'
import InfoXe from './infoXe'
import { useNavigation } from '@react-navigation/native';
const DanhSachTram  = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
            <Text>
                hahahahahahha
            </Text>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('Xe')}>
                <Text>
                hahahahahahha
            </Text>
                </TouchableOpacity>
            </View>
        </View>
        
          
    </View>
  )
}
 
export default DanhSachTram

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  
});
