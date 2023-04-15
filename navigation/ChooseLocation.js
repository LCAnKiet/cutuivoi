import React ,{Component, useState}from 'react';
import { View, Text ,StyleSheet} from 'react-native';
import AddPick from './AddPick';
import { ScrollView } from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native-gesture-handler';
 import CustomBTN from './CustomBTN';
 import { useNavigation } from '@react-navigation/native';

const ChooseLocation=({})=> {
    const navigation = useNavigation();
    const {state,setState}=useState({
        pickCord:{},
        desCord:{}
    })
    const onDone=()=>{

        navigation.goBack()
    }
    const fetchAddressCord=(lat,lng)=>{
        console.log("latitude",lat)
        console.log("longtitude",lng)

    }
    const fetchDestinationCord=(lat,lng)=>{
        console.log("latitude",lat)
        console.log("longtitude",lng)

    }
    return(
        <View style={styles.container}>
            {/* <ScrollView style={{backgroundColor:'white',
            flex:1,
            padding:24}}
            keyboardShouldPersistTaps="handled"
            > */}
            <AddPick
            placeholderText="VI TRI HIEN TAI"
            fetchAddress={fetchAddressCord}
            />
            
            <View style={{marginBottom:16}}/>
            <AddPick
            placeholderText="VI TRI MUON DEN "
            fetchAddress={fetchDestinationCord}
            />

            <CustomBTN
                btnText="DONE"
                btnStyle={{marginTop:24 }}
                onPress={onDone}
            />
            {/* </ScrollView> */}
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
     
  });
  

export default ChooseLocation