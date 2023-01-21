import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Searchbar } from 'react-native-paper'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
const SearchOffer = () => {
  return (
    <View style={styles.container}>
    <Searchbar
    placeholder='Search here...'
    style={styles.searchBar}
   
    iconColor='#0caf9a'
    
    />
   <Text style={styles.text}>Filter</Text>
    </View>
  )
}

export default SearchOffer

const styles = StyleSheet.create({
    container:{
      padding:10,
     flexDirection:'row',
     backgroundColor:"#fff"
    },
    searchBar:{
      backgroundColor:'#fff',
      width:'86%',
      borderWidth:1,
      borderColor:"#edf9f9"
    },
    iconStyle:{
    alignSelf:'flex-end',
   
    },
    text:{
        color:"#0caf9a",
        alignSelf:'center',
    padding:10,
    fontSize:16,
    fontWeight:'400'
  }
})