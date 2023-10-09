import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";

import {
  Alert,
  Button,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

export function Newnote({ navigation, route }) {
  // textinput states
  const [getTitle, setTitle] = useState("");
  const [getDescription, setDescription] = useState("");
  const [getCategory, setCategory] = useState("");
  // textinput states

  // dropdown states
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    // {label: 'Apple', value: 'apple'},
    // {label: 'Banana', value: 'banana'}
  ]);
  // dropdown states
  useEffect(() => {
    getCategoryfromdb();
  }, []);

  function getCategoryfromdb() {
    fetch("http://192.168.1.7/react_mynotes/category.php")
      .then((response) => {
        return response.json();
      })
      .then((categories) => {
        var categoryList = [];

        categories.forEach((category) => {
          var categoryObject = {
            label: category.name,
            value: category.id,
          };
          // Alert.alert("ok");
          categoryList.push(categoryObject);
        });
        console.log(categoryList);
        setItems(categoryList);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  }

  function sendNoteDataRequest() {
    const noteDetails = {
      title: getTitle,
      description: getDescription,
      category_id: getCategory,
      user_id: route.params.id,
    };

    fetch("http://192.168.1.7/react_mynotes/savenote.php", {
      method: "POST",
      body: JSON.stringify(noteDetails),
    })
      .then((response) => {
        return response.json();
      })
      .then((user) => {
        Alert.alert(user.success);
      })
      .catch((error) => {
        Alert.alert("Error", error);
      });
  }

  const ui = (
    <SafeAreaView style={styles.main}>
      <StatusBar hidden={true} />

      <View style={styles.view1}>
        <Text style={styles.title}>Creating a new Note</Text>
        <Text style={styles.text1}>Welcome {route.params.first_name}</Text>

        <Text style={styles.text1}>Title</Text>
        <TextInput
          style={styles.input}
          onChangeText={(newTText) => setTitle(newTText)}
        ></TextInput>

        <Text style={styles.text1}>Desciption</Text>
        <TextInput
          style={styles.inputaria}
          onChangeText={(newDText) => setDescription(newDText)}
          editable
          multiline
          numberOfLines={1}
          maxLength={30}></TextInput>

        <Text style={styles.text1}>Category</Text>
        <DropDownPicker style={styles.dropdown1}
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          onChangeValue={() => {
            setCategory(value);
          }}
        />

        <Pressable
          onPress={() => {
            sendNoteDataRequest();
          }}
        >
          <View style={styles.buttonv}>
            <Text style={styles.buttonText}>Save Note</Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
  return ui;
}

const styles = StyleSheet.create({
  
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  view1: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fed8bf",
    borderRadius: 30,
  },
 
  text1: {
    fontSize: 18,
    marginTop: 2,
   
  },
  input: {
    width: 270,
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },

  buttonText: {
    textAlign: "center",
    fontSize: 18,
    margin: 8,
    color: "#f0ffff",
  },
  buttonv: {
    width: 250,
    height:50,
    marginBottom: 15,
    backgroundColor: "black",
    justifyContent: "center",
    borderRadius: 10,
    marginTop:8,
    marginLeft:15,
    marginRight:15,
    borderRadius:300,
  },
  title: {
    fontSize: 30,
    margin: 15,
    fontWeight: "bold",
  },
  dropdown1:{
    width:270,
  },
  inputaria:{
    width: 150,
    borderWidth: 1,
    borderRadius: 5,
  }

});
