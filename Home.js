

import { Alert, Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from "expo-status-bar";


export function Home({ navigation, route }) {
  
  async function LogoutStorage() {
    Alert.alert("Logout")
    try {
        await AsyncStorage.removeItem('user');
        navigation.navigate("Login")
      } catch (error) {
        console.error('Error saving user data:', error);
      }
  }

  // retrieveDataFromLocalStorage()  

  // async function retrieveDataFromLocalStorage() {
  //   try {
  //     const userString = await AsyncStorage.getItem('user');
      
  //     if (userString !== null) {
  //       const user = JSON.parse(userString);
  //       navigation.navigate("Home",user)
  //       // Alert.alert('User Data', user.first_name);
  //       // Alert.alert(user.last_name)
  //     } else {
  //       // Alert.alert('User data not found.');
  //       navigation.navigate("Login/Register");
  //     }
  //   } catch (error) {
  //     console.error('Error retrieving user data:', error);
  //   }
  // }

  const ui = (

    <SafeAreaView style={styles.main}>
      <StatusBar hidden={true} />

        <View style={styles.view1}>
          <Text style={styles.title}>Home</Text>
          <Text style={styles.text1}>{route.params.first_name} {route.params.last_name}</Text>
          <Text style={styles.text1}>{route.params.mobile}</Text>

          <Pressable onPress={()=>{navigation.navigate("Add_new_Note",route.params)}} >
          <View style={styles.buttonv}>
            <Text style={styles.buttonText}>Add New Note</Text>
          </View>
        </Pressable>

        <Pressable onPress={()=>{navigation.navigate("View_Note",route.params)}} >
        <View style={styles.buttonv}>
          <Text style={styles.buttonText}>View Note</Text>
        </View>
      </Pressable>

      <Pressable onPress={()=>{LogoutStorage()}} >
        <View style={styles.buttonv}>
          <Text style={styles.buttonText}>LogOut</Text>
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
  buttonText: {
    textAlign: "center",
    fontSize: 18,
    margin: 8,
    color: "#f0ffff",
  },
  view1: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fed8bf",
    borderRadius: 30,
  },
  text1: {
    fontSize: 18,
    marginTop: 3,
   marginBottom:5,
  },
   title: {
    fontSize: 40,
    margin: 20,
    fontWeight: "bold",
  },
});

export default Home;