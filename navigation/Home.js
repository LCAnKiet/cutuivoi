import { View, Text , StyleSheet,TouchableOpacity,Image} from 'react-native'
import React from 'react'
import Zone from './Zonee'
import Zonee from './Zonee'
import { useNavigation } from '@react-navigation/native';
import checkedPolygon from './checkPolygon';
const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{

          fontSize: 20,
          padding: 10,
          color: '#fff',
          fontWeight: 'bold',
          marginTop: 100,
          marginHorizontal: 80,
          position: 'absolute'
        }}>
          Xin chào,     Kiệt
        </Text>

        <View >
          <TouchableOpacity style={styles.btnPay} onPress={() => navigation.navigate('Map')} checkedPolygon>
            <Image style={styles.btnGG} source={{ url: 'https://cdn-icons-png.flaticon.com/512/482/482541.png' }} />

            <Text style={{
              fontSize: 20,
              padding: 10,
              color: '#dc143c',
              fontWeight: 'bold',
              marginTop: 40

            }}>
              Map
            </Text>

          </TouchableOpacity >
          <TouchableOpacity style={styles.btnDX} onPress={() => navigation.navigate('Danh Sach Tram')}>
            <Image style={styles.btnGG} source={{ url: 'https://cdn-icons-png.flaticon.com/512/2634/2634158.png' }} />

            <Text style={{
              fontSize: 20,
              padding: 10,
              color: '#dc143c',
              fontWeight: 'bold',
              marginTop: 40,
              marginHorizontal: 20,

            }}>
            Trạm
            </Text>

          </TouchableOpacity>
        </View>


        <View >

        </View>
        <View >
          <TouchableOpacity style={styles.btnLS}>
            <Image style={styles.btnHis} source={{ url: 'https://cdn-icons-png.flaticon.com/512/3503/3503786.png' }} />

            <Text style={{
              fontSize: 20,
              padding: 10,
              color: '#dc143c',
              fontWeight: 'bold',
              marginHorizontal: 30,
              margin: 25

            }}>
              Lịch sử
            </Text>

          </TouchableOpacity>
        </View>
      </View>
      {/* <View>
        <Text style={{

          fontSize: 20,
          padding: 10,
          color: '#dc143c',
          fontWeight: 'bold',
          marginTop: 200,
          marginHorizontal: 80,
          position: 'absolute'
        }}>
          Ban co</Text>
      </View> */}
    </View>
  )
}
 
export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 200,
    // alignItems:'center',
    backgroundColor: '#1e90ff',

  },
  btnPay: {
    position: 'relative',
    backgroundColor: '#f0f8ff',
    width: 100,
    height: 100,
    borderRadius: 20,
    marginHorizontal: 55,
    marginTop: 150
  },
  btnDX: {
    position: 'absolute',
    backgroundColor: '#f0f8ff',
    width: 100,
    height: 100,
    borderRadius: 20,
    marginHorizontal: 200,
    marginTop: 150
  },
  btnLS: {
    position: 'absolute',
    backgroundColor: '#f0f8ff',
    width: 250,
    height: 100,
    borderRadius: 20,
    marginTop:10,
    marginHorizontal: 50,

  },
  btnFB: {
    position: 'absolute',
    marginTop: 100,
    marginLeft: 200,
    height: 50,
    width: 50
  },
  btnGG: {
    position: 'absolute',
    marginLeft: 35,
    padding: 10,
    backgroundColor: '#fff',
    height: 30,
    width: 30,
    backgroundColor: '#fff',
    marginTop: 10
  },
  btnHis:{
    position: 'absolute',
    padding: 10,
    backgroundColor: '#fff',
    height: 50,
    width: 50,
    backgroundColor: '#fff',
    marginTop: 20,
    marginHorizontal:180
  }
});
