import { NavigationContainer } from "@react-navigation/native";
import Home from "./Home";
import Login from "./Login";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Newnote } from "./AddNewnote";
import { Viewnote } from "./Viewnote";


const Stack = createNativeStackNavigator();

function App() {
  const ui = (
    <NavigationContainer>
      <Stack.Navigator>
 
      <Stack.Screen name="Login/Register" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Add_new_Note" component={Newnote} />
        <Stack.Screen name="View_Note" component={Viewnote} />
  

      </Stack.Navigator>
    </NavigationContainer>
  );

  return ui;
}

export default App;
