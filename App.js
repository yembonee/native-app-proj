import Start from "./components/Start";
import Chat from "./components/Chat";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { initializeAuth } from "firebase/auth";

import { LogBox } from "react-native";

const Stack = createNativeStackNavigator();

const App = () => {
  LogBox.ignoreLogs(["AsyncStorage has been extracted from"]);

  // Authentication to Firestore

  const firebaseConfig = {
    apiKey: "AIzaSyDItWnFiz2tGMugerPr1P9hzYwuYcPJzkc",
    authDomain: "react-native-app-3317c.firebaseapp.com",
    projectId: "react-native-app-3317c",
    storageBucket: "react-native-app-3317c.appspot.com",
    messagingSenderId: "342724727994",
    appId: "1:342724727994:web:9998e272b7daa54ddd9e83",
    measurementId: "G-350HJ205H3",
  };

  const app = initializeApp(firebaseConfig);

  const db = getFirestore(app);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Chat">
          {(props) => <Chat db={db} {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
