import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TextInput } from 'react-native-web';

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: '#232121',
    alignItems: 'center',
    justifyContent: 'center',
  },
  foto: {
    width: 200,
    height: 200,
  },
  text:{
    fontWeight:'700',
    fontSize: 30,
    color: 'white'
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: 'white',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    padding: 10,
    color: 'white'
  }
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
      <Text style = {styles.text}>Hello, World!</Text>
      <TextInput
        style = {styles.input}
        placeholder= "example..."
      />
      <StatusBar style="auto" />
    </View>
  );
}
