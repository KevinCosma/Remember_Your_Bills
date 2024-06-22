import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.dummyText}>Friendly Reminders To Pay Your Bills</Text>
      <Text>Want to get reminders to pay your bills? Tap the button below to start.</Text>
      <View>
        <Button 
          title="Add a bill" 
        />
      </View>
      <View>
        <Text>How many days leading up to your bill's due date would you like to receive a reminder?</Text>
        <TextInput placeholder="Number of days/reminders"/>
      </View>
      <View style={styles.reminderSetup}>
        <Text>List Of Bills</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'mediumspringgreen',
    padding: 50
  },
  dummyText: {
    margin: 16, 
    padding: 5,
    borderWidth: 2, 
    borderColor: 'black',
    fontSize: 32,
    textAlign: 'center'
  },
  reminderSetup: {
    paddingTop: 50
  }
});
