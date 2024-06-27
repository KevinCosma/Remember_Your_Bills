import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import {useState} from 'react';

export default function App() {
  // const [enteredNumberOfReminders, setEnteredNumberOfReminders] = useState('');
  // const [reminders, setReminders] = useState([]);
  
  const [enteredBillAmountText, setEnteredBillAmountText] = useState('');
  const [billAmount, setBillAmount] = useState([]);
  // function numberOfReminders(enteredText) {
  //   setEnteredNumberOfReminders(enteredText);
  // }

  // function setReminder() {

  // }
  
  function addNewBill() {}

  function billAmountHandler(enteredText) {
    setEnteredBillAmountText(enteredText);
  }

  function addBillToList() {
    
  }

  function lookAtListOfBills() {}

  return (
    <View style={styles.container}>
      <Text style={styles.dummyText}>Friendly Reminders To Pay Your Bills</Text>
      <Text>Want to get reminders to pay your bills? Tap the button below to start.</Text>

      <View>
        <Button 
          title='Add New Bill'
          onPress={addNewBill}
        />
      <Button 
        title='Look at your list of bills'
        onPress={lookAtListOfBills}
      />        
      </View>

      <View style={styles.billInfo}>
        <TextInput 
          placeholder='Enter Bill Amount'
          onChangeText={enteredBillAmountText}
        />
        <TextInput 
          placeholder='Enter Bill Due Date'
        />
        <Button 
          title='Add Your Bill'
          onPress={addBillToList}
        />
      </View>

      <View style={styles.listOfBills}>
        <Text>List Of Bills</Text>

      </View>

        {/* <View style={styles.reminderSetup}>
        <Text>How many days leading up to your bill's due date would you like to receive a reminder?</Text>
        <TextInput 
          placeholder="Number of days/reminders" 
          onChangeText={numberOfReminders}
        />
        <Button 
          title='Add'
        />
      </View> */}

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
  billInfo: {
    padding: 50
  }
});
