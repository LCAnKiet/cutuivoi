import { View, Text , StyleSheet,TouchableOpacity,Image,Alert} from 'react-native'
import React from 'react'
import Zone from './Zonee'
import Zonee from './Zonee'
import { useNavigation } from '@react-navigation/native';
import checkedPolygon from './checkPolygon';
import * as geolib from 'geolib';
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth"
const Home = () => {
  const firestore = firebase.firestore;
  const auth = firebase.auth;
  const navigation = useNavigation();
  let myPolygon=[
    { longitude: 106.79807670391571, latitude: 10.865385303360243 },
    { longitude: 106.80739748382999, latitude: 10.873913736498887 },
    { longitude: 106.81112579576306, latitude: 10.885388782710251 },
    { longitude: 106.8040329096465, latitude: 10.890300146055639 },
    { longitude: 106.79121115389263, latitude: 10.891862835643485 },
    { longitude: 106.78284518565258, latitude: 10.889228582831146 },
    { longitude: 106.77297879919556, latitude: 10.881459633792876 },
    { longitude: 106.77061450382337, latitude: 10.876682076061547 },
    { longitude: 106.77461561906861, latitude: 10.870252344833935 },
    { longitude: 106.78698270255393, latitude: 10.868287677095443 },
]

    const checkedPologon=(userLocation)=> {
        let bol =geolib.isPointInPolygon(userLocation, myPolygon);
        let msg ='';
        if(bol){
          navigation.navigate('Map')
          msg='Bạn đang ở trong vùng tự do             Đừng di chuyển ra khỏi khu vực đc cho cho phép';

        }
        else{
          msg='Bạn đã ở ngoài Khu Vực cho phép        Chỉ có thể thuê xe khi đã vào Khu vực';
        }
    
        Alert.alert('THÔNG BÁO ',msg,[
            {
              text:'Cancel',
              onPress:()=>console.log('Cancel Pressed'),
              style:'cancel'
            },
            {
              text:'Tôi biết rồi !',
              onPress:()=>console.log('OK Pressed'),
            }
          ])
      }
      const Checktram=(userLocation)=> {
        let bol =geolib.isPointInPolygon(userLocation, myPolygon);
        let msg ='';
        if(bol){
          navigation.navigate('Danh Sach Tram')
          msg='Hãy chọn Trạm gần bạn nhất';

        }
        else{
          msg='Bạn đang ở ngoài Khu Vực cho phép        Chỉ có thể thuê xe khi đã vào Khu vực';
          navigation.navigate('Danh Sach Tram')
        }
        
        Alert.alert('THÔNG BÁO ',msg,[
            {
              text:'Cancel',
              onPress:()=>console.log('Cancel Pressed'),
              style:'cancel'
            },
            {
              text:'Tôi biết rồi !',
              onPress:()=>console.log('OK Pressed'),
            }
          ])
      }
      
      const Helppp =()=>{
        msg='Hãy xem Vùng Cho phép của app ở Zone để đến thuê xe';
        Alert.alert('THÔNG BÁO ',msg,[
          {
            text:'Cancel',
            onPress:()=>console.log('Cancel Pressed'),
            style:'cancel'
          },
          {
            text:'Yes',
            onPress:(navigation.navigate('Zone')),
          }
        ])
      }

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
          <TouchableOpacity style={styles.btnPay} onPress={checkedPologon} checkedPolygon>
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
          <TouchableOpacity style={styles.btnDX} onPress={Checktram}>
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
          <TouchableOpacity style={styles.btnLS} onPress={Helppp} >
            <Image style={styles.btnHis} source={{ url: 'https://cdn-icons-png.flaticon.com/512/3503/3503786.png' }} />

            <Text style={{
              fontSize: 20,
              padding: 10,
              color: '#dc143c',
              fontWeight: 'bold',
              marginHorizontal: 30,
              margin: 25

            }}>
              Giúp đỡ
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
