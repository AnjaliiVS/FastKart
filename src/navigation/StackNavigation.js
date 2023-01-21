import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Register from '../screens/Register'
import Login from '../screens/Login'
import BottomTab from './BottomTab'
import SplashScreen from '../screens/SplashScreen'
import DrawerNavigation from './DrawerNavigation'
import PagesList from '../components/pagesList/PagesList'
import ConfrimOrder from '../components/ConfrimOrder'
import Payment from '../components/Payment'
import OrderSuccessfull from '../components/OrderSuccessfull'
import ProductContainer from '../components/ProductContainer'
const Stack = createStackNavigator();
const StackNavigation = () => {
  return (
   <Stack.Navigator initialRouteName='SplashScreen' >
    <Stack.Screen name='SplashScreen' component={SplashScreen} options={{
        headerShown:false
    }}/>
    <Stack.Screen name='Login' component={Login} options={{
        headerShown:false
    }}/>
    <Stack.Screen name='Register' component={Register} options={{
        headerShown:false
    }}/>
    <Stack.Screen name='Drawer' component={DrawerNavigation} options={{
        headerShown:false
    }}/>
    <Stack.Screen name='PagesList' component={PagesList} options={{
        headerShown:false
    }}/>
    <Stack.Screen name='ConfirmOrder' component={ConfrimOrder} options={{
        headerShown:false
    }}/>
    <Stack.Screen name='Payment' component={Payment} options={{
        headerShown:false
    }}/>
    <Stack.Screen name='OrderSuccessfull' component={OrderSuccessfull} options={{
        headerShown:false
    }}/>
    <Stack.Screen name='ProductContainer' component={ProductContainer} options={{
        headerShown:false
    }}/>
   </Stack.Navigator>
  )
}

export default StackNavigation