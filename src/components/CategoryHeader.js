import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Octicons from 'react-native-vector-icons/Octicons'
const CategoryHeader = () => {
  return (
    <View style={{flexDirection:'row',margin:10,padding:10,alignContent:'space-between'}}>
    <View style={{borderWidth:1,borderRadius:5,marginRight:10}}>
    <AntDesign name='arrowleft' size={20} color='#0caf9a' />
    </View>
     <View style={{flexDirection:'row'}}>
        <Image source={require('../assets/ME.png')} />
        <Octicons name='gift' size={25} color='#0caf9a' style={{marginLeft:180}} />
     </View>
    </View>
  )
}

export default CategoryHeader

const styles = StyleSheet.create({})