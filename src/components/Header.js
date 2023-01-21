import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Octicons from 'react-native-vector-icons/Octicons'
import { DrawerActions } from '@react-navigation/native'
const Header = (props,{navigation}) => {
  return (
    <View style={styles.container}>
      <MaterialIcons name='menu' size={25} color={'#0caf9a'}
    onPress={() => navigation.navigate('Drawer')}
        />
      <Image source={require('../assets/ME.png')} />
      <Octicons name='location' size={20} color={'#0caf9a'}/>
      <Text style={styles.locationText}>Los Angeles</Text>
      <Image source={require('../assets/kU.png')} style={styles.profileImage}/>
    </View>
    
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        margin:10,
        //backgroundColor:'#ffffff'
    },
    profileImage:{
        height:50,
        width:50,
        borderRadius:30
    },
    locationText:{
        fontSize:18,
        fontWeight:'600',
        color:'black' 
    }
})