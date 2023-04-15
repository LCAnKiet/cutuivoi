import React ,{Component}from 'react';
import { View, Text ,StyleSheet} from 'react-native';
import AddPick from './AddPick';
import { ScrollView } from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native-gesture-handler';
 
const CustomBTN=({
    onPress=()=>{},
    btnStyle={},
    btnText
})=> {
    return(
        <View style={styles.container}>
          
            <View>
                <TouchableOpacity
                    onPress={onPress}
                    style={{...styles.btnStyle,...btnStyle}} >
                    <Text > {btnText}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    btnStyle:{
        height:48,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
        paddingHorizontal:16,
        borderWidth:1

    }
     
  });
  

export default CustomBTN