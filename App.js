import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {
  return (
    <><View style={styles.container}>
      <Text>Username: </Text>
      <StatusBar style="auto" />
      <TextInput placeholder='Input Username here...' />
    </View><View style={styles.container2}>
        <Text>Password: </Text>
        <StatusBar style="auto" />
        <TextInput placeholder='Input Password here...' secureTextEntry={true}/>
      </View><View>
        <Button
          title="Submit"
          onPress={() => Alert.alert('Submit Button pressed')} />
      </View></>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
