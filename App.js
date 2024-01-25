import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: '#fff',
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
  }
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text style = {styles.text}>Hello, World!</Text>
      <Image
        style={styles.foto}
        source={{
          uri: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/874.png',
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}
