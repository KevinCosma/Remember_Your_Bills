import { StyleSheet, View, Text, Pressable } from "react-native";

function BillList(props) {
    return (
        <Pressable onPress={props.onDeleteBill}>
            <View style={styles.listOfBills} >
                <Text>{props.text}</Text>
            </View>
        </Pressable>
    );
}

export default BillList;

const styles = StyleSheet.create({
    listOfBills: {
        padding: 50
      }
});