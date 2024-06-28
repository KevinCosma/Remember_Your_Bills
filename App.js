import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import {useState} from 'react';

export default function App() {
  const [enteredBillType, setEnteredBillType] = useState('');
  const [billType, setBillType] = useState([]);
  

  // function setReminder() {

  // }
  
  //function addNewBill() {}

  // function addBillToList() {
    
  // }

  //function lookAtListOfBills() {}

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
          placeholder='Enter Bill Type'
        />
        <Text>Rent, Phone, Credit Card, etc...</Text>
        {/* <TextInput 
          placeholder='Enter Bill Amount'
        />
        <TextInput 
          placeholder='Enter Bill Due Date'
        /> */}
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
