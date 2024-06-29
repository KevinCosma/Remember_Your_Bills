import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';
import {useState} from 'react';

export default function App() {
  const [enteredBillType, setEnteredBillType] = useState('');
  const [bills, setBills] = useState([])
  //const [enteredBillCost, setEnteredBillCost] = useState('');
  //const [enteredBillDueDate, setEnteredBillDueDate] = useState('');
  
  
  
  function handleOnChange(enteredText) {
    setEnteredBillType(enteredText);
  }


  function addBillToList() {
    setBills((currentBills) => [
      ...currentBills,
      enteredBillType,
    ]);
   }

  return (
    <View style={styles.container}>
      <Text style={styles.dummyText}>Friendly Reminders To Pay Your Bills</Text>
      <Text>Want to get reminders to pay your bills? Tap the button below to start.</Text>

      <View style={styles.billInfo}>
        <TextInput 
          placeholder='Enter Bill Type'
          onChangeText={text=> handleOnChange(text, 'billType')}
        />
        <Text>Rent, Phone, Credit Card, etc...</Text>
        <TextInput 
          placeholder='Enter Bill Cost'
          onChangeText={text=> handleOnChange(text, 'billCost')}
        />
        <TextInput 
          placeholder='Enter Bill Due Date'
          onChangeText={text=> handleOnChange(text, 'billDueDate')}
        />
        <Button 
          title='Add Bill To List'
          onPress={() => addBillToList()}
        />
      </View>

      <View style={styles.listOfBills}>
        <ScrollView nestedScrollEnabled={true}>
          {bills.map((bill) => (
            <View key={bill}>
              <Text>{bill}</Text>
            </View>
          ))}
          
        </ScrollView>
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
  billInfo: {
    padding: 50
  },
  listOfBills: {
    padding: 50
  }
});
