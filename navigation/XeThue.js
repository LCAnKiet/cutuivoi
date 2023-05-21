import { View, Text,ScrollView , StyleSheet,TouchableOpacity,Image} from 'react-native'
import React from 'react'
import Zone from './Zonee'
import Zonee from './Zonee'
import InfoXe from './infoXe'
import { useNavigation } from '@react-navigation/native';

const XeThue = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ScrollView>
      <View >
          <TouchableOpacity style={styles.btnLS} onPress={() => navigation.navigate('Pay')}>
          <Image style={styles.icon} source={require('../assets/Untitled.png')} />
            <Text style={styles.textName}>
              Xe 1
            </Text>

            {/* <Text style={styles.textTT}>
              Tinh trang
            </Text> */}
            <Text style={styles.textG}>
              5000k/giờ
            </Text>

          </TouchableOpacity>
        </View>

        <View >
          <TouchableOpacity style={styles.btnLS}>
          <Image style={styles.icon} source={require('../assets/Untitled.png')} />
            <Text style={styles.textName}>
              Xe 2
            </Text>
{/* 
            <Text style={styles.textTT}>
              Tinh trang
            </Text> */}
            <Text style={styles.textG}>
              5000k/giờ
            </Text>

          </TouchableOpacity>
        </View>

        <View >
          <TouchableOpacity style={styles.btnLS}>
          <Image style={styles.icon} source={require('../assets/Untitled.png')} />
            <Text style={styles.textName}>
              Xe 3
            </Text>

            {/* <Text style={styles.textTT}>
              Tinh trang
            </Text> */}
            <Text style={styles.textG}>
              5000k/giờ
            </Text>

          </TouchableOpacity>
        </View>

        <View >
          <TouchableOpacity style={styles.btnLS}>
          <Image style={styles.icon} source={require('../assets/Untitled.png')} />
            <Text style={styles.textName}>
              Xe 4
            </Text>

            {/* <Text style={styles.textTT}>
              Tinh trang
            </Text> */}
            <Text style={styles.textG}>
              5000k/giờ
            </Text>

          </TouchableOpacity>
        </View>

        <View >
          <TouchableOpacity style={styles.btnLS}>
          <Image style={styles.icon} source={require('../assets/Untitled.png')} />
            <Text style={styles.textName}>
              Xe 5
            </Text>
{/* 
            <Text style={styles.textTT}>
              Tinh trang
            </Text> */}
            <Text style={styles.textG}>
              5000k/giờ
            </Text>

          </TouchableOpacity>
        </View>
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
