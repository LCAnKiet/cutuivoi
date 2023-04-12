import { View, Text, StyleSheet, Button, Linking, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import { BarCodeScanner } from 'expo-barcode-scanner'

export default function Scan() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  
  const handleBarCodeSacnned = ({ type, data }) => {
    setScanned(true);
    Alert.alert('Thông Báo',`Bạn vừa SCAN xe số ${Linking.openURL(`${data}`)}`,[
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'Đúng vậy', onPress: () => console.log('OK Pressed')},
    ]);
    
  };
  
  if (hasPermission === null) {
    return <Text> Requesting for camera permisson</Text>
  }
  if (hasPermission === false) {
    return <Text>  No  camera </Text>
  }
  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeSacnned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <Button title='Tap to Scan again' onPress={() => setScanned(false)} />}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',

  },

})