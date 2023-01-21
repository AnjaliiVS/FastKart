import { StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const DATA = ['Vegetables','Fruits','Beauty','Fruits'];


const RecSearch = () => {
 
    return (
      <View style={{flex:1,justifyContent:'center',alignSelf:'center',borderRadius:6}}>
      <View >
        <Text style={{color:"#000",marginHorizontal:15}}>Recently Search</Text>
      <FlatList
                            horizontal= {true}
                            showsHorizontalScrollIndicator={false}
                            data={DATA}
                            renderItem={({item}) => <View style={styles.FlatList2}> 
                  <Text style={{color:"black",textAlign:'center'}}>{item}</Text>
                            </View>
                        }/></View>
      </View>
      
      
    )
  }
  
  export default RecSearch;
  
  const styles = StyleSheet.create({
    FlatList2: {
      flexDirection: 'row',
      backgroundColor: '#edf9f9',
      height:hp('5%'),
       width:wp('35%'),
     
      borderRadius: 9,
      marginHorizontal:10,
     alignItems:'center',
  justifyContent:'center',
  marginVertical:15
    },
   
  });
  