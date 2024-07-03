import { StyleSheet,View, FlatList } from 'react-native';
import {useState} from 'react';
 
import BillList from './components/BillList';
import BillInput from './components/BillInput';

export default function App() {
  const [bills, setBills] = useState([])

  //const [enteredBillCost, setEnteredBillCost] = useState('');
  //const [enteredBillDueDate, setEnteredBillDueDate] = useState('');


  function addBillToList(enteredBillType) {
    setBills((currentBills) => [
      ...currentBills,
      {text: enteredBillType, key: Math.random().toString()},
    ]);
   }

  return (
    <View style={styles.container}>
      <BillInput onAddBill={addBillToList} />
      <View style={styles.listOfBills}>
        <FlatList 
          data={bills}
          renderItem={(itemData) =>{
            return <BillList text={itemData.item.text} />;
          }}
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
});
