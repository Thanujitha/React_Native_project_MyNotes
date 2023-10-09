import { useEffect, useState } from "react";
import {
  Alert,
  Button,
  SafeAreaView,
  StatusBar,
  Text,
  StyleSheet,
  TextInput,
  View,
  Pressable,
  CheckBox,
} from "react-native";
import {DropDownPicker} from "react-native-dropdown-picker";
import AsyncStorage from '@react-native-async-storage/async-storage';

export function Login({ navigation }) {
  
  const [getStyle, setStyle] = useState(true);
  const [getStyle1, setStyle1] = useState(false);
  const [getUserType, setUserType] = useState("");

  const [getFirstName, setFirstName] = useState("");
  const [getLastName, setLastName] = useState("");
  const [getMobile, setMobile] = useState("");
  const [getPassword, setPassword] = useState("");

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([]);

  const [getUserName, setUsername] = useState("");
  const [getPassword1, setPassword1] = useState("");
  

  retrieveDataFromLocalStorage()  
  async function saveDataToLocalStorage(user) {
    
    try {
        await AsyncStorage.setItem('user', JSON.stringify(user));
        retrieveDataFromLocalStorage();
      } catch (error) {
        console.error('Error saving user data:', error);
      }
  }

  async function retrieveDataFromLocalStorage() {
    try {
      const userString = await AsyncStorage.getItem('user');
      
      if (userString !== null) {
        const user = JSON.parse(userString);
        
        // Alert.alert('User Data', user.first_name);
        // Alert.alert(user.last_name)
      } else {
        // Alert.alert('User data not found.');
        navigation.navigate("Login/Register");
      }
    } catch (error) {
      console.error('Error retrieving user data:', error);
    }
  }

  // useEffect(() => {
  //   getUserTypes();
  // }, []);

  // function getUserTypes() {
  //   fetch("http://192.168.1.7/react_mynotes/getusertype.php")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((usertypes) => {
  //       var usertypeList = [];

  //       usertypes.forEach((usertype) => {
  //         var usertypeObject = {
  //           label: usertype.name,
  //           value: usertype.id, // Ensure that the value is a string
  //         };
  //         usertypeList.push(usertypeObject);
  //         //   Alert.alert("ok");
  //       });

  //       setItems(usertypeList);
  //     })
  //     .catch((error) => {
  //       console.error("Error", error);
  //     });
  // }

    
  function LoginRequest() {
    // Alert.alert(getUserName);
    // Alert.alert(getPassword);
    const loginDetails = {
        "username":getUserName,
        "password":getPassword1,
      };
      console.log(loginDetails);
      fetch("http://192.168.1.7/react_mynotes/index.php",
      {
        method: "POST",
        body:JSON.stringify(loginDetails)
      })
      .then((response) => {
        return response.json();
      })
      .then((user) => {
       
   
        if (user.first_name !== "nope") {
            // Alert.alert(user.first_name)
            saveDataToLocalStorage(user);
            Alert.alert("success");
            navigation.navigate("Home",user);
        } else {
            Alert.alert("Invalid login details", "Please check your username and password");
        }
        
      })
      .catch((error) => {
        Alert.alert("Error", error);
      });
  }

  function Register() {
    const registerDetails = {
      firstname: getFirstName,
      lastname: getLastName,
      mobile: getMobile,
      password: getPassword,
      usertype: getUserType,
    };
    console.log(registerDetails);
    fetch("http://192.168.1.7/react_mynotes/registeruser.php", {
      method: "POST",
      body: JSON.stringify(registerDetails),
    })
      .then((response) => {
        return response.json();
      })
      .then((user) => {
        if (user.first_name == "success") {
          Alert.alert(user.first_name);
          navigation.navigate("Login/Register")
        }else{
          Alert.alert(user.first_name);
        }
      })
      .catch((error) => {
        // Handle the error
        console.error("Error", error);
      });
  }


  // function sendRequest() {
  //   const RegisterDetails = {
  //     fname: "s",
  //     lname: "123",
  //     mobileNo:"",
  //     passwprd:"",
  //   };

  //   fetch("http://192.168.1.7/react_mynotes/register.php", {
  //     method: "POST",
  //     body: JSON.stringify(RegisterDetails),
  //   })
  //     .then((response) => {
  //       return response.json();
  //     })

  //     .then((user) => {
  //       setText1(user.name);
  //     })

  //     .catch((error) => {
  //       Alert.alert("Error", error);
  //     });
  // }
  const Login = (
    <SafeAreaView style={styles.main}>
      <StatusBar hidden={true} />

    
      {getStyle ? (
        <View style={styles.view1}>
          <Text style={styles.title}>Login</Text>

          <Text style={styles.text1}>Username</Text>
          <TextInput style={styles.input}  onChangeText={(newUText) => setUsername(newUText)}></TextInput>

          <Text style={styles.text1}>Password</Text>
          <TextInput style={styles.input} secureTextEntry={true}  onChangeText={(newUText) => setPassword1(newUText)}></TextInput>

          <Pressable onPress={LoginRequest}>
            <View style={styles.loginbutton}>
              <Text style={styles.buttonText}>Login</Text>
            </View>
          </Pressable>

          <Pressable onPress={ChangeRegister}>
            <View style={styles.Linkbutton}>
              <Text style={styles.LinkText}>Not registered? Register</Text>
            </View>
          </Pressable>
        </View>
      ) : null}

      {getStyle1 ? (
        <View style={styles.view2}>
          <Text style={styles.title}>Register</Text>

          <Text style={styles.text1}>First Name</Text>
          <TextInput style={styles.input}  onChangeText={(Text1) => setFirstName(Text1)}/>

          <Text style={styles.text1}>Last Name</Text>
          <TextInput style={styles.input}  onChangeText={(Text1) => setLastName(Text1)}/>

          <Text style={styles.text1}>Mobile No</Text>
          <TextInput style={styles.input}  onChangeText={(Text1) => setMobile(Text1)}/>


          {/* <Text style={styles.text1}>User Type</Text>
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            onChangeValue={() => {
              setUserType(value);
            }}
          /> */}
         
          <Text style={styles.text1}>Password</Text>
          <TextInput style={styles.input} secureTextEntry={true} onChangeText={(Text1) => setPassword(Text1)}/>

          <Pressable onPress={Register}>
            <View style={styles.loginbutton}>
              <Text style={styles.buttonText}>Register</Text>
            </View>
          </Pressable>

          <Pressable onPress={ChangeRegister}>
            <View style={styles.Linkbutton}>
              <Text style={styles.LinkText}>Are you registered? Login</Text>
            </View>
          </Pressable>
        </View>
      ) : null}
    </SafeAreaView>
  );

  return Login;

  function goHome() {
    navigation.navigate("Home");
  }

  function ChangeRegister() {
    // styles.view1 = { display: setStyle("none") };
    // styles.view2 = { display: setStyle1("flex") };
    setStyle(!getStyle);
    setStyle1(!getStyle1);
  }
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
  view2: {
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
    borderRadius: 10,
    padding: 10,
  },
  loginbutton: {
    width: 250,
    marginBottom: 10,
    backgroundColor: "#8db600",
    borderRadius: 10,
    marginTop:8,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 18,
    margin: 8,
    color: "#f0ffff",
  },
  LinkText: {
    textAlign: "center",
    fontSize: 18,
    margin: 5,
    color: "#4169e1",
  },
  Linkbutton: {
    marginBottom: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 30,
    margin: 15,
    fontWeight: "bold",
  },
  dropdown1:{
    width:200,
    color:"blur",
    placeholder:"Select",
    value:"dsfskfn",
    
  },
  TextInput: {
    height: 30,
    borderWidth: 1,
    width: 200,
    marginBottom: 20,
    padding: 5,
  },
});

export default Login;
