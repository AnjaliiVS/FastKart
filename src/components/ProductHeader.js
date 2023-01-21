
import React from "react";
import {View,Text,StyleSheet,Image} from 'react-native'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons'
import Share from 'react-native-vector-icons/Octicons'

const ProductHeader = ({navigation}) => {
  return (
    <View style={styles.container}>
        <View style={{height:'34%',width:wp('5%'),borderWidth:1,marginHorizontal:10,marginVertical:10,justifyContent:'center',borderRadius:4}}>
        <Icon name = 'arrow-back' size={15} color={"#0caf9a"}  style={{position:'absolute',left:0,alignSelf:'center'}} onPress={()=> navigation.navigate('Drawer')}/></View>
   <Share name = 'share-android' size={20} color={"#0caf9a"}  style={{position:'absolute',right:12,marginVertical:10}}/>
   
    </View>
  )
}
export default ProductHeader;
const styles=StyleSheet.create({
    container:{
        height:hp('7%'),
        width:'100%',
        backgroundColor:"#eee",
        flexDirection:'row'
    
    }
})