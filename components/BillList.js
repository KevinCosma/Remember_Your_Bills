import { StyleSheet, View, Text, Pressable } from "react-native";

function BillList(props) {
    return (
        <View style={styles.listOfBills} >
            <Pressable 
                android_ripple={{color: 'red'}}    
                onPress={props.onDeleteBill.bind(this, props.id)}
                style={(pressed) => pressed && styles.pressedItem}    
            >
            <Text>{props.text}</Text>        
            </Pressable>
        </View>
        
    );
}

export default BillList;

const styles = StyleSheet.create({
    listOfBills: {
        padding: 50
    },
    
    pressedItem: {
        opacity: 0.5
    }
});