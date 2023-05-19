import React from 'react'
import { View,Text,Image,StyleSheet,SafeAreaView, TextInput, TouchableOpacity} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Ionicons from '@expo/vector-icons/Ionicons';
import { FontAwesome5 } from '@expo/vector-icons';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import MainContainer from './MainContainer';

const SignUp=({navigation})=>{

    const [textt, onChangeSDT] = React.useState('');
    const [textt1, onChangeName] = React.useState('');
    const [textt2, onChangeEmail] = React.useState('');
    const [textt3, onChangePass] = React.useState('');
    const [textt4, onChangePassY] = React.useState('');

    const handleSignIn=()=>{
        signInWithEmailAndPassword(auth,email,pass).then(()=>{
            console.log('Craeteed')
            const user =userCredential.user;
            console.log(user)
        })
        .catch(error=>{
            console.log(error)
        }

        )
    }
    return(

        
        
        <SafeAreaView style={styles.container} >
            <View>
                <Text style={styles.txt}>Welcome JITENSHA</Text>
            </View>
            <View style={styles.form}>
                <TextInput
                style={styles.input}
                    onChangeText={onChangeSDT}
                    value={textt}
                    keyboardType="numeric"
                    placeholder="Nhap So dien thoai"
                />
            </View>

            <View style={styles.form}>
                <TextInput
                style={styles.input}
                    onChangeText={onChangeName}
                    value={textt1}
                    placeholder="Nhap Ten"
                />
            </View>

            <View style={styles.form}>
                <TextInput
                style={styles.input}
                    onChangeText={onChangeEmail}
                    value={textt2}
                    placeholder="Nhap Email"
                />
            </View>

            <View style={styles.form}>
                <TextInput
                style={styles.input}
                    onChangeText={onChangePass}
                    value={textt3}
                    secureTextEntry={true}
                    keyboardType="numeric"
                    placeholder="Nhap Mat Khau"
                />
            </View>

            <View style={styles.form}>
                <TextInput
                style={styles.input}
                    onChangeText={onChangePassY}
                    value={textt4}
                    secureTextEntry={true}
                    keyboardType="numeric"
                    placeholder="Xac Nhan lai Mat Khau"
                />
            </View>

            <View style={styles.btnSU}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Text style={{
                        textAlign: 'center',
                        fontWeight: 'bold',
                    }}>SIGN UP</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>



        
    );
}

export default SignUp

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f8f8ff'
    },
    txt:{
        flex:1,
        alignItems:'center',
        textAlign:'center',
        fontSize:30,
        fontStyle:'bold',
        padding:30
    },
    form:{
        marginTop:30,
        textAlign:'center',
        height: 50,
        width:250,
        marginHorizontal:60,
        borderWidth: 1,
        padding: 10,
        backgroundColor:'#fff',
        borderRadius:2
    },
    btnSU:{
        marginTop:60,
        padding:10,
        backgroundColor:'#778899',
        height: 40,
        width:190,
        borderRadius:30,
        marginHorizontal:90,
    },
    input:{
        position:'absolute',
        alignSelf:'center',
        fontSize:15,

        marginTop:10
    },
})