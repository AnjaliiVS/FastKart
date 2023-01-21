import { ImageBackground, StyleSheet, Text, View ,FlatList, Image} from 'react-native'
import React from 'react'
import recentlyBought from '../constants/recentlyBought';
import RecentlyBought from './RecentlyBought';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const shopContainer = () => {
  
 
    const renderList= ((item) =>{
  return (
    <View style={{flex:1,justifyContent:'center',alignSelf:'center'}}>
  <ImageBackground  source={require('../assets/F3.png')} style={styles.imageBackground} resizeMode='contain'>
    
  </ImageBackground>
    </View>
  )
          
  
}) 
return(
  <View>
    <FlatList
    data={recentlyBought}
    scrollEnabled={false}
    />
  </View>
)
  }

export default shopContainer

const styles = StyleSheet.create({
   imageBackground:{
      height:wp('30%'),
    width:hp('190%')
       
    }
})