import React from "react";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import First from './first/first';
import Second from './second/second';
import LoginPage from './login/LoginPage';
import Rigester from './login/Rigester';
import Restrant from './restraunt/Restraunt';
import Home from './home/home'
import AllResturants from './home/allRestraunt'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();

export default function Tabs() {
  
  return (


        <Tab.Navigator
        
        barStyle={{ backgroundColor: 'white', height: 60 }}
        >

<Tab.Screen name="Home" component={Home}
        options={{
        tabBarLabel: 'home',
        tabBarIcon: ({ color, size }) => (
          < FontAwesome  name="home" color={color} size={20} />
        ),
      }} />

<Tab.Screen name="First" component={First}
        options={{
        tabBarLabel: 'search',
        tabBarIcon: ({ color, size }) => (
          < FontAwesome  name="search" color={color} size={20} />
        ),
      }} />

      

      <Tab.Screen name="Second" component={Second} 
        options={{
        tabBarLabel: 'account',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" color={color} size={25} />
        ),
      }}/>


<Tab.Screen name="LoginPage" component={LoginPage} 
        options={{
        tabBarLabel: 'LoginPage',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="login" color={color} size={25} />
        ),
      }}/>

      {/* <Tab.Screen name="Rigester" component={Rigester} 
        options={{
        tabBarLabel: 'Rigester',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" color={color} size={25} />
        ),
      }}/> */}


    </Tab.Navigator>





    
  );


  
}
