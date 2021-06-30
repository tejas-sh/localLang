import React from 'react';
import { StyleSheet, Text,Button, View } from 'react-native';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

export default function App() {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();



  return (
      <View style={styles.container}>
        <Button onPress={SpeechRecognition.startListening} title={"Start"}/>
        <Button title={"Stop"} onPress={SpeechRecognition.stopListening}/>
        <Button onPress={resetTranscript} title={"Reset"}/>
        <Text>{transcript}</Text>
      </View>
  );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
    },
});
