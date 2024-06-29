import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import {useState} from 'react';

export default function App() {
  const [enteredBillInfo, setEnteredBillInfo] = useState('');
  const [userBills, setUserBills] = useState([]);
  
  function billInputHandler(enteredText) {
    setEnteredBillInfo(enteredText);
  }

  function addBillToList() {
    setUserBills(currentBills => [
      ...currentBills, 
      enteredBillInfo,
    ]);
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
        <ScrollView nestedScrollEnabled={true}>
          <Text>List Of Bills</Text>
          {userBills.map((bill) => <Text key={bill}>{bill}</Text>)}
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
