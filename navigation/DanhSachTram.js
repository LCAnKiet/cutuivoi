import { View,Animated, Text, StyleSheet, TouchableOpacity, Image,ScrollView } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
// import Zone from './Zonee'
// import Zonee from './Zonee'
// import InfoXe from './infoXe'

import { useNavigation } from '@react-navigation/native';
import Tram1 from '../Stations/Tram1'
import Tram2 from '../Stations/Tram2';
import Tram3 from '../Stations/Tram3';
import Tram4 from '../Stations/Tram4';
import Tram5 from '../Stations/Tram5';
import Dictaphone from './filldataSearch';
Dictaphone
const DanhSachTram = () => {
  const navigation = useNavigation();
  const moveAnimation =new Animated.Value(0);
  useEffect(()=>{
    Animated.loop(
      Animated.timing(moveAnimation,{
        toValue:-25,
        duration:2000,
        useNativeDriver:true
      })
    ).start();
  },[])
  useLayoutEffect(() => {
    navigation.setOptions({

    })
  })
  return (
    <View style={styles.container}>
        <ScrollView>
          <Dictaphone/>
          <Tram1/>
          <Tram2/>
          
        {/* <View >
          <TouchableOpacity style={styles.btnLS} onPress={() => navigation.navigate('Xe')}>
            <Image style={styles.btnHis} source={{ url: 'https://cdn-icons-png.flaticon.com/512/3503/3503786.png' }} />

            <Animated.Text style={[styles.text,{
              transform:[{translateX:moveAnimation}]
            }]}

              >
               Đại học Bách Khoa
            </Animated.Text>

          </TouchableOpacity>
        </View>
        <View>
            <TouchableOpacity style={styles.btnLS} onPress={() => navigation.navigate('Xe')}>
              <Image style={styles.btnHis} source={{ url: 'https://cdn-icons-png.flaticon.com/512/3503/3503786.png' }} />

              <Animated.Text style={[styles.text,{
              transform:[{translateX:moveAnimation}]
            }]}

              >
                Đại học Khoa học Tự nhiên
            </Animated.Text>
               

            </TouchableOpacity>
        </View>
        <View >
          <TouchableOpacity style={styles.btnLS} onPress={() => navigation.navigate('Xe')}>
            <Image style={styles.btnHis} source={{ url: 'https://cdn-icons-png.flaticon.com/512/3503/3503786.png' }} />

            <Animated.Text style={[styles.text,{
              transform:[{translateX:moveAnimation}]
            }]}

              >
                 Đại học Quốc tế
            </Animated.Text>
              

          </TouchableOpacity>
        </View>
        <View >
          <TouchableOpacity style={styles.btnLS} onPress={() => navigation.navigate('Xe')}>
            <Image style={styles.btnHis} source={{ url: 'https://cdn-icons-png.flaticon.com/512/3503/3503786.png' }} />

            <Animated.Text style={[styles.text1,{
              transform:[{translateX:moveAnimation}]
            }]}

              >
                Đại học Công nghệ Thông tin
            </Animated.Text>
             

          </TouchableOpacity>
        </View>
        <View >
          <TouchableOpacity style={styles.btnLS} onPress={() => navigation.navigate('Xe')}>
            <Image style={styles.btnHis} source={{ url: 'https://cdn-icons-png.flaticon.com/512/3503/3503786.png' }} />

            <Animated.Text style={[styles.text,{
              transform:[{translateX:moveAnimation}]
            }]}

              >
                 Đại học Kinh tế – Luật
            </Animated.Text>
             
            
          </TouchableOpacity>
        </View>
        {/* <View >
          <TouchableOpacity style={styles.btnLS} onPress={() => navigation.navigate('Xe')}>
            <Image style={styles.btnHis} source={{ url: 'https://cdn-icons-png.flaticon.com/512/3503/3503786.png' }} />

            <Text style={{
              fontSize: 20,
              padding: 10,
              color: '#dc143c',
              fontWeight: 'bold',
              marginHorizontal: 30,
              margin: 25

            }}>
              Lich su
            </Text>

          </TouchableOpacity>
        </View> */} 
        </ScrollView>


    </View>
  )
}

export default DanhSachTram

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  btnLS: {
    position: 'resilute',
    backgroundColor: '#f0f8ff',
    width: 320,
    height: 100,
    borderRadius: 20,
    marginTop: 10,
    marginHorizontal: 30,

  },
  text:{
    fontSize: 18,
              padding: 10,
              color: '#dc143c',
              fontWeight: 'bold',
              marginHorizontal: 20,
              margin: 25
  },
  text1:{
    fontSize: 16,
              padding: 10,
              color: '#dc143c',
              fontWeight: 'bold',
              marginHorizontal: 20,
              margin: 25
  }
});
