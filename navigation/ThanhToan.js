import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native'
import React from 'react'
import Zone from './Zonee'
import Zonee from './Zonee'
import { useNavigation } from '@react-navigation/native';
const ThanhToan = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <ScrollView>
                <View>
                    <Image style={styles.icon} source={require('../assets/logoJTS.png')} />
                    <Text numberOfLines={1} style={{
                        marginHorizontal:70
                    }}>
                    ____________________________

                    </Text>
                </View>
                <View>
                    <Text style={{
                        marginTop: 50,
                        marginHorizontal: 160,
                    }}>
                        Xe đạp
                    </Text>
                    <Text style={{
                        marginTop: 5,
                        fontWeight: 'bold',
                        marginHorizontal: 155,
                        color: '#1e90ff',

                    }}>
                        JTS-01
                    </Text>
                    <Image style={styles.iconxe} source={require('../assets/Untitled.png')} />
                    
                </View>
                
                <View >
                    
                    
                    <TouchableOpacity style={styles.btnDeatail} >

                        <Text style={{
                            fontSize: 20,
                            padding: 10,
                            color: '#dc143c',
                            fontWeight: 'bold',
                            marginHorizontal: 30,
                            

                        }}>
                            Chi tiết xe
                        </Text>

                    </TouchableOpacity>
                    <Text  style={{
                        marginHorizontal:50
                    }}>
                    Thông tin chuyến đi

                    </Text>
                    <Text  style={{
                        marginHorizontal:50
                    }}>
                    Trạm lấy xe:               Đại học Bách Khoa    
                    
                    </Text>
                    <Text style={{
                        marginHorizontal:50
                    }} >
                    Trạm tra xe:               Đại học Bách Khoa
                    </Text>
                    
                    <Text style={{
                        marginHorizontal:50
                    }}>
                    Thời gian:                                          2 giờ
                    </Text>
                    
                    <Text numberOfLines={1} style={{
                        marginHorizontal:50
                    }}>
                    __________________________________

                    </Text>
                    <Text  style={{
                        marginHorizontal:50
                    }}>
                    Tổng:                                              10.000
                    </Text>
                </View>
                <View >
                    <TouchableOpacity style={styles.btnBack}onPress={() => navigation.goBack} >
                    <Image style={styles.btnHis}  source={require('../assets/back.png')}  />

                        <Text style={{
                            fontSize: 17,
                            padding: 10,
                            color: '#333',
                            fontWeight: 'bold',
                            marginHorizontal: 30,
                            // margin: 25

                        }}>
                            Quay lại
                        </Text>

                    </TouchableOpacity>
                </View>
                <View >
                    <TouchableOpacity style={styles.btnPay} >

                        <Text style={{
                            fontSize: 17,
                            padding: 10,
                            color: '#fff',
                            fontWeight: 'bold',
                            marginHorizontal: 30,
                            // margin: 25

                        }}>
                            Thanh Toán
                        </Text>

                    </TouchableOpacity>
                </View>
            </ScrollView>


        </View>
    )
}

export default ThanhToan
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    icon: {
        width: 120,
        height: 120,
        marginTop: 30,
        marginHorizontal: 120,

    },
    iconxe: {
        marginTop: 20,
        marginHorizontal: 50

    },
    btnBack: {
        position: 'resilute',
        backgroundColor: '#fff',
        width: 150,
        height: 50,
        borderRadius: 20,
        marginTop:80,
        marginHorizontal: 50,
    
      },
    
      btnPay: {
        position: 'resilute',
        backgroundColor: '#1e90ff',
        width: 180,
        height: 45,
        borderRadius: 20,
        marginTop:-50,
        marginHorizontal: 180,
    
      },
      btnHis:{
        position: 'absolute',
        padding: 10,
        backgroundColor: '#fff',
        height: 25,
        width: 25,
        backgroundColor: '#fff',
       marginTop:9
      }

});
