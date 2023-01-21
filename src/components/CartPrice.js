import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React from 'react'
import { Title } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native';
const CartPrice = () => {
    const navigation = useNavigation(); 
  return (
    <View style={{padding:10,margin:10,}}>
     <View>
        <Title style={{padding:5,margin:5,fontWeight:'500'}}>Order Details</Title>
     </View>
     <View style={{padding:5,margin:5,flexDirection:'row',}}>
        <Text style={{fontSize:19,fontWeight:'500',fontFamily:'italic'}}>Bag total</Text>
        <Text style={{position:'absolute',right:5,fontSize:18,marginTop:10}}>₹220.00</Text>
     </View>
     <View style={{padding:5,margin:5,flexDirection:'row',}}>
        <Text style={{fontSize:19,fontWeight:'500',fontFamily:'italic'}}>Bag savings</Text>
        <Text style={{position:'absolute',right:5,fontSize:18,marginTop:10}}>₹-20.00</Text>
     </View>
     <View style={{padding:5,margin:5,flexDirection:'row',}}>
        <Text style={{fontSize:19,fontWeight:'500',fontFamily:'italic'}}>Coupon Discount</Text>
        <Text style={{position:'absolute',right:5,fontSize:18,marginTop:10,color:'red'}}>Apply Coupon</Text>
     </View>
     <View style={{padding:5,margin:5,flexDirection:'row',borderBottomWidth:0.5,marginBottom:10}}>
        <Text style={{fontSize:19,fontWeight:'500',fontFamily:'italic'}}>Delivery</Text>
        <Text style={{position:'absolute',right:5,fontSize:18,marginTop:10}}>₹50.00</Text>
     </View>
     <View style={{padding:5,margin:5,flexDirection:'row',}}>
        <Title style={{fontSize:19,fontWeight:'500',}}>Total Amount</Title>
        <Title style={{position:'absolute',right:5,fontSize:18,marginTop:10,}}>₹270.00</Title>
     </View>
     <View style={{margin:10,padding:10, backgroundColor:'#0caf9a',borderRadius:10}}>
        <TouchableHighlight onPress={()=>{navigation.navigate('ConfirmOrder')}}>
            <Text style={{color:'white',alignSelf:'center',fontSize:18,fontWeight:'500',fontFamily:'italic'}}>Proceed to Checkout</Text>
        </TouchableHighlight>
     </View>
    </View>
  )
}

export default CartPrice

const styles = StyleSheet.create({})