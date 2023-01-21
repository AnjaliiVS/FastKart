import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import BottomTab from './BottomTab'
import DrawerContent from '../components/DrawerContent';
const Drawer= createDrawerNavigator();
const DrawerNavigation = () => {
  return (
   <Drawer.Navigator drawerContent={(props) => <DrawerContent  {...props}/>}>
    <Drawer.Screen name='BottomTab' component={BottomTab} options={{
        headerShown:false
    }}/>
   </Drawer.Navigator>
  )
}

export default DrawerNavigation