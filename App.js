import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import {useState} from 'react';

export default function App() {
  const [enteredNumberOfReminders, setEnteredNumberOfReminders] = useState('');
  const [reminders, setReminders] = useState([]);

  function numberOfReminders(enteredText) {
    setEnteredNumberOfReminders(enteredText);
  }

  function setReminder() {

  }
  
  
  return (
    <View style={styles.container}>
      <Text style={styles.dummyText}>Friendly Reminders To Pay Your Bills</Text>
      <Text>Want to get reminders to pay your bills? Tap the button below to start.</Text>
      
      <View style={styles.reminderSetup}>
        <Text>How many days leading up to your bill's due date would you like to receive a reminder?</Text>
        <TextInput 
          placeholder="Number of days/reminders" 
          onChangeText={numberOfReminders}
        />
        <Button 
          title='Add'
        />
      </View>
      <View style={styles.listOfBills}>
        <Text>List Of Bills</Text>
      </View>
      <View style={styles.FlexboxPractice}>
        <Text>Flexbox Practice</Text>
        <Button 
          title= "Flexbox Practice"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'mediumspringgreen',
    padding: 50,
    flex: 1
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
  },
  listOfBills: {
    padding: 50
  },
  FlexboxPractice: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
