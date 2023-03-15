import React from 'react'
import {StatusBar, StyleSheet, Text, View, Image, ImageBackground} from 'react-native';

export default function Welcome() {
    // return (
    // //   <View style={styles.container}>
    // //     <ImageBackground style={styles.bg} source={require('./assets/img/background.png')} >
          
    // //       <View >
    // //         <Image style={styles.icon} source={require('./assets/img/bike.png')} />
    // //       </View>
    // //       <View >
    // //         <Text style={styles.txt}>
    // //           自転車
    // //         </Text>
    // //       </View>
    // //       <StatusBar style="auto" /> 
    // //     </ImageBackground>
    // //   </View>
    // );
  }
  
  const styles = StyleSheet.create({
    bg:{
      resizeMode:'cover',
      flex: 1,
      justifyContent:'center'
    },
    container: {
      flex:1
    },
    txt: {
      alignSelf:'center',
      fontSize:50,
      color:'#ffd700'   
    },
    icon:{
      
      width:80,
      height:80,
      alignSelf:'center'
    }
  });