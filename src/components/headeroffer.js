
import React from "react";
import {View,Text,StyleSheet} from 'react-native'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons'
import Home from 'react-native-vector-icons/Octicons'

const HeaderOffer = () => {
  return (
    <View style={styles.container}>
        <View style={{height:'34%',width:wp('5%'),borderWidth:1,marginHorizontal:10,marginVertical:10,justifyContent:'center',borderRadius:4}}>
        <Icon name = 'arrow-back' size={15} color={"#0caf9a"}  style={{position:'absolute',left:0,alignSelf:'center'}}/></View>
   <Text style={{color:"black",marginVertical:10,fontWeight:'500',marginHorizontal:5,letterSpacing:1,fontSize:15}}>My Offers</Text>
   <Home name = 'home' size={20} color={"#000"}  style={{position:'absolute',right:12,marginVertical:10}}/>

    </View>
  )
}
export default HeaderOffer;
const styles=StyleSheet.create({
    container:{
        height:hp('8%'),
        width:'100%',
        backgroundColor:"#fff",
        flexDirection:'row',marginVertical:10
    
    }
})