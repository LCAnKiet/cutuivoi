import React ,{Component, useState}from 'react';
import { View, Text ,StyleSheet} from 'react-native';
import AddPick from './AddPick';
import { ScrollView } from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native-gesture-handler';
 import CustomBTN from './CustomBTN';
 import { useNavigation } from '@react-navigation/native';

const ChooseLocation=(props)=> {
    const navigation = useNavigation();
    const [state, setState]=useState({
        pickCord:{},
        desCord:{},
    })
    const {pickCord,desCord}=state
    
    const onDone=()=>{
        props.route.params.getCordinates({
            pickCord,
            desCord
        })
        navigation.goBack()
    }
    const fetchAddressCord=(lat,lng)=>{
        
        setState({
            ...state,pickCord:{
            latitude:lat,
            longtitude:lng,
        }})
    }
    const fetchDestinationCord=(lat,lng)=>{
       
        setState({
            ...state,desCord:{
            latitude:lat,
            longtitude:lng,
        }})
    }
    return(
        
         <View style={styles.container}>
         <ScrollView
             keyboardShouldPersistTaps="handled"
             style={{ backgroundColor: 'white', flex: 1, padding: 24 }}
         >
             <View style={{ marginBottom: 16 }} />
             <AddPick
                 placheholderText="VI TRI HIEN TAI"
                 fetchAddress={fetchAddressCord}
             />
             <CustomBTN
                 btnText="Done"
                 onPress={onDone}
                 btnStyle={{marginTop: 24}}
             />
         </ScrollView>
     </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
     
  });
  

export default ChooseLocation