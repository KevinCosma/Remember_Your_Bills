import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import {useState} from 'react';

export default function App() {
  const [] = useState('');
  const [] = useState([]);
  
  function billInputHandler(enteredText) {
    console.log(enteredText)
  }

  function addBillToList() {
    
   }

  return (
    <View style={styles.container}>
      <Text style={styles.dummyText}>Friendly Reminders To Pay Your Bills</Text>
      <Text>Want to get reminders to pay your bills? Tap the button below to start.</Text>

      <View style={styles.billInfo}>
        <TextInput 
          placeholder='Enter Bill Type'
          onChangeText={billInputHandler}
        />
        <Text>Rent, Phone, Credit Card, etc...</Text>
        <TextInput 
          placeholder='Enter Bill Amount'
          onChangeText={billInputHandler}
        />
        <TextInput 
          placeholder='Enter Bill Due Date'
          onChangeText={billInputHandler}
        />
        <Button 
          title='Add Bill To List'
          onPress={addBillToList}
        />
      </View>

      <View style={styles.listOfBills}>
        <Text>List Of Bills</Text>
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
  billInfo: {
    padding: 50
  }
});
