import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPs_KEY } from './ggMap_key'
import { TouchableOpacity } from 'react-native-gesture-handler';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const Dictaphone = () => {
    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();

    if (!SpeechRecognition.browserSupportsSpeechRecognition) {
        return <Text>Browser doesn't support speech recognition.</Text>;
    }

    return (
        <View style={styles.container}>


            <View>
                <Text style={{
                    fontSize: 20,
                    padding: 10,
                    color: '#dc143c',
                    fontWeight: 'bold',
                    marginHorizontal: 30

                }}>
                    Mic:{listening ? 'on' : 'off'}
                </Text>
                
            </View>
            <View>
            <Text style={{
                    fontSize: 20,
                    padding: 10,
                    color: '#dc143c',
                    fontWeight: 'bold',
                    marginHorizontal: 30

                }}>
                    {transcript}
                </Text>
            </View>
                <View>
                <TouchableOpacity style={styles.btnStart} onPress={SpeechRecognition.startListening}>
                <Text style={{
                    fontSize: 20,
                    padding: 10,
                    color: '#dc143c',
                    fontWeight: 'bold',
                    marginHorizontal: 30

                }}>
                    Start
                </Text>
            </TouchableOpacity>
                </View>
                <View>
                <TouchableOpacity style={styles.btnStop} >
                <Text style={{
                    fontSize: 20,
                    padding: 10,
                    color: '#dc143c',
                    fontWeight: 'bold',
                    marginHorizontal: 30

                }}>
                    Stop
                </Text>
            </TouchableOpacity>
                </View>
                <View>
                <TouchableOpacity style={styles.btnReset} >
                <Text style={{
                    fontSize: 20,
                    padding: 10,
                    color: '#dc143c',
                    fontWeight: 'bold',
                    marginHorizontal: 30

                }}>
                    Reset
                </Text>
            </TouchableOpacity>
                </View>
            
           
            
        </View>

    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerStyle: {
        backgroundColor: 'white'
    },
    textInputStyle: {
        height: 48,
        color: 'black',
        fontSize: 16,
        backgroundColor: '#F3F3F3'
    }
})



export default Dictaphone