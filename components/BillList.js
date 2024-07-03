import { StyleSheet, View, Text } from "react-native";

function BillList(props) {
    return (
        <View>
            <Text>{props.text}</Text>
        </View>
    );
}

export default BillList;

const styles = StyleSheet.create({
    listOfBills: {
        padding: 50
      }
});