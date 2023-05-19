import React from 'react'
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, Image, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Ionicons from '@expo/vector-icons/Ionicons';
import { FontAwesome5 } from '@expo/vector-icons';
import SignUp from './SignUp';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';
import MainContainer from './MainContainer';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword ,logOut} from 'firebase/auth';
import { initializeApp } from "firebase/app";
import { firebaseConfig } from '../config';




const Login = () => {
    const [email, setEmail] = React.useState('');
    const [pass, setPass] = React.useState('');
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const navigation = useNavigation();

    const handleCreateAcc = (navigate) => {
        signInWithEmailAndPassword(auth, email, pass).then((userCredential) => {
            console.log('Account created')
            const user = userCredential.user;
            console.log(user)
            navigation.navigate('Home')
        })
            .catch(error => {
                console.log(error)
                Alert.alert("Tai khoan co van de moi nhap lai")
            }

            )
    }
    const handleLogout=()=>{
           firebase.auth().logOut().catch(error=>{
            Alert.alert(error.message)
           })
            
    }
    return (

        <ScrollView>
            <SafeAreaView style={styles.container}>
                <View>
                    <Image style={styles.img} source={{ url: 'https://cdn-icons-png.flaticon.com/512/2414/2414815.png' }} />
                    <Text style={styles.txt}>Welcome JITENSHA</Text>
                </View>
                <View style={styles.form}>
                    {/* <Image source={require('./img/icons8-user-30.png')} /> */}
                    <FontAwesome5 name="user-alt" size={20} color="black" style={{
                        position: 'relative',
                        top: 3,
                        marginLeft: 10
                    }} />
                    <TextInput

                        style={styles.inputAcc}
                        onChangeText={(text) => setEmail(text)}
                        // autoFocus={true}
                        keyboardType=""
                        placeholder="Nhap So dien thoai"
                    />
                </View>
                <View style={styles.form}>
                    <TextInput

                        style={styles.inputPass}
                        onChangeText={(text) => setPass(text)}
                        secureTextEntry={true}
                        keyboardType=""
                        placeholder="Nhap Mat Khau"
                    />
                    <FontAwesome5 name="lock" size={20} color="black" style={{
                        position: 'absolute',
                        top: 11,
                        marginLeft: 20
                    }} />
                    <TouchableOpacity style={styles.btnLogin} onPress={handleCreateAcc} >
                        <Text style={{
                            textAlign: 'center',
                            fontWeight: 'bold',
                        }}>LOGIN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnFgP}>
                        <Text style={{
                            marginTop: 10,
                            marginLeft: 160,
                            color: 'blue',
                        }}>Forgot Password ?</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity  >
                        <Image style={styles.btnGG} source={{ url: 'https://cdn-icons-png.flaticon.com/512/720/720255.png' }} />

                    </TouchableOpacity>
                    <TouchableOpacity  >
                        <Image style={styles.btnFB} source={{ url: 'https://cdn-icons-png.flaticon.com/512/5968/5968764.png' }} />

                    </TouchableOpacity>
                </View>
                <View style={styles.noAcc}>
                    <Text>Ban chua co tai khoan ?
                        <TouchableOpacity onPress={() => navigation.navigate(SignUp)} >
                            <Text style={{

                                color: 'blue',
                            }}>   Dang Ky</Text>
                        </TouchableOpacity>
                    </Text>
                </View>
            </SafeAreaView>
        </ScrollView>






    );
}
export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8ff'
    },
    txt: {

        flex: 1,
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 30,
        fontStyle: 'bold',
        padding: 30
    },
    form: {
        textAlign: 'center',
        height: 50,
        width: 300,
        marginHorizontal: 40,
        marginVertical: 20,
        borderWidth: 3,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 30
    },
    inputPass: {
        position: 'absolute',
        alignSelf: 'center',
        marginTop: 10,
        fontSize: 20,

    },
    inputAcc: {
        position: 'absolute',
        alignSelf: 'center',
        fontSize: 20,

        marginTop: 10
    },
    img: {
        height: 180,
        width: 190,
        marginTop: 50,
        alignSelf: 'center',
        padding: 20
    },
    btnLogin: {
        marginTop: 50,
        padding: 10,
        backgroundColor: '#778899',
        height: 40,
        width: 190,
        borderRadius: 30,
        marginHorizontal: 45,

    },
    btnFgP: {

    },
    noAcc: {
        position: 'absolute',
        marginTop: 700,
        marginHorizontal: 70
    },
    btnGG: {
        position: 'absolute',
        marginLeft: 120,
        marginTop: 100,
        padding: 10,
        backgroundColor: '#fff',
        height: 50,
        width: 50,
        backgroundColor: '#fff'
    },
    btnFB: {
        position: 'absolute',
        marginTop: 100,
        marginLeft: 200,

        height: 50,
        width: 50
    }

})