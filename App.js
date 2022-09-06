import React from "react";
import LoginPage from './components/login/LoginPage';
import ContinueWithEmail from './components/login/ContinueWithEmail';
import Rigester from './components/login/Rigester'
import Restraunt  from "./components/restraunt/Restraunt";
import UserData from './components/second/userData';
import Home from './components/home/home'
import Tabs from './components/tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import AllResturants from './components/home/allRestraunt'
import ShowCard from './components/ShowCard/showCard';
const Stack = createNativeStackNavigator();

export default function App() {
  
  return (

    <NavigationContainer>


<Stack.Navigator initialRouteName = 'Tabs'>
<Stack.Screen name=" " component={Tabs} />

    <Stack.Screen name="LoginPage" component={LoginPage} />
    <Stack.Screen name="ContinueWithEmail" component={ContinueWithEmail} />
    <Stack.Screen name="Rigester" component={Rigester} />
    <Stack.Screen name="Restraunt" component={Restraunt} />
    <Stack.Screen name="UserData" component={UserData} />
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="AllResturants" component={AllResturants} />
    <Stack.Screen name="ShowCard" component={ShowCard} />

 </Stack.Navigator>
 


 </NavigationContainer>
  );


  
}
