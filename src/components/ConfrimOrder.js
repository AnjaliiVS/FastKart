import { ImageBackground, ScrollView, StyleSheet, Text, TouchableHighlight, View,Alert } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Octicons from 'react-native-vector-icons/Octicons'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import HomeSearchBar from './HomeSearchBar'
import Ionicons from 'react-native-vector-icons/Ionicons'
import RazorpayCheckout from 'react-native-razorpay'
import { Title } from 'react-native-paper'
import { Dimensions } from 'react-native'
const ConfrimOrder = ({navigation}) => {
  const handlePayment =() =>{
    var options ={
      name: 'FastKart',
      description:'For testing',
      currency:'INR',
      amount:50000,
      key:'rzp_test_EPFelEqBaAykvp',
      prefill:{
        email:'abcd@gmail.com',
        contact:'90909087',
        name:'tester'
      },
       theme : {color:'#0caf9a'}
    }
    RazorpayCheckout.open(options).then((data) =>{
      console.log("data",data)
      Alert.alert('Payment Success')
      navigation.navigate('OrderSuccessfull')
    })
    .catch((error) =>{
      Alert.alert(`Error : ${error.code} | ${error.description}`)
      console.log(error.description)
     
    })
  }
  return (
    <View style={{flex:1}}>
    <View style={{flexDirection:'row',margin:10,padding:10,alignContent:'space-between'}}>
    <View style={{borderWidth:1,borderRadius:5,marginRight:10}}>
    <AntDesign name='arrowleft' size={20} color='#0caf9a' />
    </View>
    
        <Text style={{fontSize:17,color:'black',fontWeight:'500'}}> Add Address</Text>
        <Octicons name='search' size={25} color='#0caf9a' style={{position:'absolute',right:5,marginTop:5}} />
  
    
    </View>
       <View >
        <ImageBackground source={require('../assets/9V.png')}style={{height:Dimensions.get('window').height/1.5}} >
          <View style={{backgroundColor:'white',flexDirection:'row',margin:10,padding:10,borderRadius:10}}>
            <Feather name='truck' size={25} color='black'/>  
            <Text style={{color:'black',fontSize:17,fontFamily:'italic',marginLeft:17}}>Delivery on 7th Aug, Slot: 7am to 9am</Text>
          </View>
        </ImageBackground>
     </View>
     <View style={{flex:1.5,backgroundColor:'white',borderTopStartRadius:30,borderTopEndRadius:30}}>
     <ScrollView>
                <View style={{padding:5,margin:5}}>
                    <HomeSearchBar />
                    <View style={{padding:10,margin:10,borderRadius:10,flexDirection:'row'}}>
                       <FontAwesome name='location-arrow' size={23} color='white'style={{backgroundColor:'#0caf9a',width:35,borderRadius:5,padding:3,alignItems:'center'}}/>
                       <Title style={{marginLeft:10,fontWeight:'400'}}>Use current location</Title>
                    </View>
                    <View style={{flexDirection:'row',padding:5,margin:2}}>
                        <Ionicons name='location-outline' size={25} color='#0caf9a'/>
                        <Text style={{marginLeft:5,fontSize:17,color:'black'}}>Noah Hamilton</Text>
                    </View>
                    <View >
                        <Text style={{fontSize:15,marginLeft:25,borderBottomWidth:0.5,marginBottom:30}}>8857 Morris Rd.,Charlottesville,VA 22901</Text>
                    </View>
                    <View style={{flexDirection:'row',padding:5,margin:2}}>
                        <Ionicons name='location-outline' size={25} color='#0caf9a'/>
                        <Text style={{marginLeft:5,fontSize:17,color:'black'}}>Noah Hamilton</Text>
                    </View>
                    <View style={{marginBottom:15}}>
                        <Text style={{fontSize:15,marginLeft:25,borderBottomWidth:0.5,marginBottom:30}}>8857 Morris Rd.,Charlottesville,VA 22901</Text>
                    </View>
                  <View style={{padding:10,backgroundColor:'#0caf9a',width:300,alignSelf:'center',borderRadius:10}}>
                    <TouchableHighlight onPress={() => handlePayment()}>
                        <Text style={{color:'white',fontSize:16,alignSelf:'center',fontFamily:'italic'}}>Confirm location & proceed</Text>
                    </TouchableHighlight>
                  </View>
                </View>
             </ScrollView>
     </View>
    </View>
  )
}

export default ConfrimOrder

const styles = StyleSheet.create({})