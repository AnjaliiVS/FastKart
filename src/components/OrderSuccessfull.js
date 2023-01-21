import { ScrollView, StyleSheet, Text, View,Image ,TouchableHighlight} from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Octicons from 'react-native-vector-icons/Octicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Title } from 'react-native-paper'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
const OrderSuccessfull = ({navigation}) => {
  return (
    <ScrollView>
        <View>
        <View style={{flexDirection:'row',margin:10,padding:10,alignContent:'space-between'}}>
    <View style={{marginRight:10}}>
    <MaterialIcons name='menu' size={25} color={'#0caf9a'}
    onPress={() => navigation.navigate('Drawer')}
        />
    </View>
      
      <Image source={require('../assets/ME.png')} />
        <Octicons name='home' size={25} color='black' style={{position:'absolute',right:5,marginTop:5}} />

    </View>
          <View style={{margin:5,padding:5,flex:1}}>
            <Image source={require('../assets/QK.png')} style={{height:300,width:370,alignSelf:'center'}} onPress={()=>{navigation.navigate('Home')}}/>
          </View>
          <View style={{marginBottom:10}} >
            <Title style={{justifyContent:'center',alignSelf:'center',padding:5,margin:5}}>Thank you for your order!</Title>
            <View style={{borderBottomWidth:0.5 ,borderBottomEndRadius:30,borderBottomStartRadius:30}}>
            <Text style={{justifyContent:'center',alignSelf:'center',fontSize:16,fontFamily:'italic',margin:10,padding:5}}>your order has been placed successfully.your{"\n"}              order ID is #548475151</Text>
            </View>
          </View>
          <View>

          </View>
          <View style={{ margin:15,padding:7,}}>
            <View style={{backgroundColor:'#0caf9a',borderRadius:10,width:40,padding:5,height:50,justifyContent:'center'}}>
            <EvilIcons name='calendar' size={35} color='white' style={{justifyContent:'center'}}/>
              </View>
              <Text style={{color:'black',marginLeft:60,marginTop:-45,fontSize:16}}>Order Date </Text>
            <Text style={{marginLeft:50}}>Sun,14 Apr,19:12</Text>
          </View>
          <View style={{ margin:10,padding:7,marginLeft:210,marginTop:-75}}>
            <View style={{backgroundColor:'#0caf9a',borderRadius:10,width:40,padding:5,height:50,justifyContent:'center'}}>
            <EvilIcons name='calendar' size={33} color='white' style={{justifyContent:'center'}}/>
              </View>
              <Text style={{color:'black',marginLeft:60,marginTop:-45,fontSize:16,fontFamily:'italic'}}>Order ID </Text>
            <Text style={{marginLeft:50}}>#548475151</Text>
          </View>
          <View style={{padding:10,margin:5,}}>
     <View style={{backgroundColor:'lightgrey',borderRadius:10}}>
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
     </View>
     <View style={{padding:10,margin:15, backgroundColor:'#0caf9a',borderRadius:10}}>
        <TouchableHighlight onPress={()=>{navigation.navigate('Home')}}>
            <Text style={{color:'white',alignSelf:'center',fontSize:18,fontWeight:'500',fontFamily:'italic'}}>Go to back to home</Text>
        </TouchableHighlight>
     </View>
    </View>
        </View>
        
    </ScrollView>
  )
}

export default OrderSuccessfull

const styles = StyleSheet.create({})