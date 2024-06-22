import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.dummyText}>Remember To Pay Your Bills</Text>
      <Text>Want to get reminders to pay your bills? Tap the button below to start.</Text>
      <View>
        <Button 
          title="Add a bill" 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dummyText: {
    margin: 16, 
    padding: 5,
    borderWidth: 2, 
    borderColor: 'Green',
    fontSize: 48
  }
});
