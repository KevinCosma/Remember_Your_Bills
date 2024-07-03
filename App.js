import { StyleSheet,View, FlatList } from 'react-native';
import {useState} from 'react';
 
import BillList from './components/BillList';
import BillInput from './components/BillInput';

export default function App() {
  const [bills, setBills] = useState([])


  function addBillToList(enteredBillType) {
    setBills((currentBills) => [
      ...currentBills,
      {text: enteredBillType, key: Math.random().toString()},
    ]);
   }

   function deleteBillHandler(id) {
      setBills(currentBills => {
        return currentBills.filter((bill) => bill.id !== id);
      });
   }

  return (
    <View style={styles.container}>
      <BillInput onAddBill={addBillToList} />
      <View style={styles.listOfBills}>
        <FlatList 
          data={bills}
          renderItem={(itemData) =>{
            return (
              <BillList 
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteBill={deleteBillHandler}
              />
            );
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
