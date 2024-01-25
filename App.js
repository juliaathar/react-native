import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: '#232121',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 30,
  },
  foto: {
    width: 200,
    height: 200,
  },
  text: {
    fontWeight: '700',
    fontSize: 30,
    color: 'white',
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: 'white',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    padding: 10,
    color: 'white',
    marginVertical: 10,
  },
  button: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'black',
    fontWeight: '700'
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.foto}
        source={{
          uri: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/874.png',
        }}
      />
      <Text style={styles.text}>Hello, World!</Text>
      <TextInput
        style={styles.input}
        placeholder="example..."
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Corinthians</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}
