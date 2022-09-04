import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
} from "react-native";

export default function App() {
  const [purchase, setPurchase] = useState("");
  const [list, setList] = useState([]);

  const add = () => {
    setList([...list, {key:purchase}]);
  };
  const clear = () => {
    setList("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={(purchase) => setPurchase(purchase)}
        value={purchase}
      />
      <StatusBar style="auto" />
      <View style={styles.operator}>
        <View style={styles.button}>
          <Button onPress={add} title="Add" />
        </View>
        <View style={styles.button}>
          <Button onPress={clear} title="Clear" />
        </View>
      </View>
      <Text>Shopping list:</Text>
      <FlatList style={styles.list} 
        data={list}
        renderItem={({ item }) => 
          <Text>{item.key}</Text>}
          keyExtractor={(item, index) => index.toString()}
       />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 150,
    
  },
  operator: {
    flexDirection: "row",
  },
  list: {
    margin:5,
    },
  input: {
    margin: 5,
    width: 250,
    borderColor: "black",
    borderWidth: 1,
  },
  button: {
    width: 60,
  },
  
  
});
