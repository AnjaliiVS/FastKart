import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from '../screens/Home';
import Category from '../screens/Category';
import Search from '../screens/Search';
import Offers from '../screens/Offers';
import Cart from '../screens/Cart';
import Octicons from 'react-native-vector-icons/Octicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'


const Tab = createMaterialBottomTabNavigator();

const BottomTab = () => {
  
  return (
 <Tab.Navigator activeColor='white'inactiveColor='white' barStyle={{ backgroundColor: '#0caf9a' }} screenOptions={{
   
 }}>
    <Tab.Screen name='Home'
     component={Home}
     
     options={{
      
      tabBarIcon: ({ color }) => (
        <Octicons name="home" color={'white'} size={26} />
      )
     }}
     />
    <Tab.Screen 
    name='Category' 
    component={Category}
  
    options={{
      
      tabBarIcon: ({ color }) => (
        <MaterialIcons name="category" color={'white'} size={26} />
        
      ),
    
     }}
    />
    <Tab.Screen 
    name ='Search' 
    component={Search}
    options={{
      tabBarIcon: ({ color }) => (
        <Octicons name="search" color={'white'} size={26} />
      )
     }}
    />
    <Tab.Screen 
    name ='Offers' 
    component={Offers}
    options={{
      
      tabBarIcon: ({ color }) => (
        <Octicons name="gift" color={'white'} size={26} />
      )
     }}
    />
    <Tab.Screen 
    name ='Cart' 
    component={Cart}
    options={{
      tabBarIcon: ({ color }) => (
        <SimpleLineIcons name="bag" color={'white'} size={26} />
      )
     }}
    />
 </Tab.Navigator>
  )
}

export default BottomTab