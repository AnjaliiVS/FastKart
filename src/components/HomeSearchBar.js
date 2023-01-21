import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Searchbar } from 'react-native-paper'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
const HomeSearchBar = () => {
  return (
    <View style={styles.container}>
    <Searchbar
    placeholder='Search here...'
    style={styles.searchBar}
    theme={themes}
    iconColor='#0caf9a'
    
    />
   
    </View>
  )
}

export default HomeSearchBar
const themes ={
  color:'#0caf9a'
}
const styles = StyleSheet.create({
    container:{
      padding:10,
     
    },
    searchBar:{
      backgroundColor:'#fafafa'
    },
    iconStyle:{
    alignSelf:'flex-end',
   
    }
})