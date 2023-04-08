import { View, Text ,StyleSheet,TouchableOpacity,Image,FlatList} from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import DATA from './data';
import USER from './userr';

import Login from '../screens/Login';
import { Auth } from 'firebase/auth';
const Setting = () => {
    const navigation = useNavigation();

//     const handleLogout=()=>{
//         firebase.auth().logOut().catch(error=>{
//             navigation.navigate('Login')
//          Alert.alert(error.message)
//         })
         
//  }const doUserLogOut = async function () {
    return await Parse.User.logOut()
      .then(async () => {
        // To verify that current user is now empty, currentAsync can be used
        const currentUser = await Parse.User.currentAsync();
        if (currentUser === null) {
          Alert.alert('Success!', 'No user is logged in anymore!');
        }
        // Navigation dispatch calls a navigation action, and popToTop will take
        // the user back to the very first screen of the stack
        navigation.dispatch(StackActions.popToTop());
        return true;
      })
      .catch((error) => {
        Alert.alert('Error!', error.message);
        return false;
      });
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity  >
                    <Image style={styles.btnGG} source={{ url: 'https://cdn-icons-png.flaticon.com/512/9895/9895369.png' }} />
                </TouchableOpacity>
                <View style={styles.txt} >
                    <Text 
                    style={{
                        fontSize: 25,
                        color: 'blue',
                    }}
                    >Xin chao, </Text >
                    <Text style={{
                        fontSize: 15,
                        color: '#000080',
                    }}>0398359340</Text>
                </View>

            </View>
            <View style={{backgroundColor:'#f0ffff',}}>
                <View >
                    <Text style={{
                        fontWeight: 'bold',
                        fontSize: 35,
                        textAlign: 'center',
                        marginTop: 3,
                        padding: 8
                    }}>
                        Setting
                        
                    </Text>
                    
                </View>
                <Text style={{textAlign:'center'}}>
                        _________________________________
                    </Text>
                <FlatList
                    data={DATA}
                    numColumns={1}
                    horizontal={false}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity>
                            <View style={styles.body}>
                                <Text style={{fontSize:20,marginHorizontal:15,
                                marginTop:10}}>
                                    {item.title}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    )}
                />
                <Text style={{textAlign:'center'}}>
                        _________________________________
                </Text>
            </View>
            <View>
                
                <TouchableOpacity  >
                    
                    <View style={styles.btnDX}>
                        <Text style={{fontSize:25,textAlign:'center',
                        padding:10,
                        color:'#dc143c',
                        fontWeight: 'bold',

                        
                        }}>
                            LOG OUT
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}



export default Setting

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
  header:{
    height:200,
    // alignItems:'center',
    backgroundColor:'#1e90ff',
    
  },
  txt:{
    marginTop:90,
    marginHorizontal:130
  },
  btnGG:{
    position:'absolute',
    marginLeft:35,
    marginTop:80,
    padding:10,
    backgroundColor:'#fff',
    height:80,
    width:80,
    backgroundColor:'#fff',
    borderRadius:50
    
},
btnDX:{
    backgroundColor:'#f0f8ff',
    width:250,
    height:50,
    borderRadius:30,
    marginHorizontal:55,
    marginTop:150
},
  body:{
    backgroundColor:'#f8f8ff',
    height:50,
    width:330,
    marginLeft:20,
    marginTop:10,

  }
});
