import { StyleSheet, View, TextInput, Button } from "react-native";

function BillInput (props) {
    const [enteredBillType, setEnteredBillType] = useState('');

    function billInputHandler(enteredText) {
        setEnteredBillType(enteredText);
    }

    function addBillHandler() {
        props.onAddBill(enteredBillType);
        setEnteredBillType('');
    }

    return (
        <View style={styles.billInput}>
        <TextInput 
          placeholder='Enter Bill Type'
          onChangeText={billInputHandler}
          value={enteredBillType}
        />
        <Text>Rent, Phone, Credit Card, etc...</Text>
        <TextInput 
          placeholder='Enter Bill Cost'
        />
        <TextInput 
          placeholder='Enter Bill Due Date'
        />
        <Button 
          title='Add Bill To List'
          onPress={addBillHandler}
        />
      </View>
    );
}

export default {BillInput}

const styles = StyleSheet.create({
    billInput: {
        padding: 50
      },
});