import { View, Text, Image, ScrollView, TextInput ,StyleSheet} from 'react-native'
import React from 'react'
import { Title, Caption, Avatar } from 'react-native-paper'
import { Rating, AirbnbRating } from 'react-native-elements';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import Feather from 'react-native-vector-icons/Feather'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Divider } from 'react-native-paper'

const CheckDelivery = () => {
  return (
    <View>
     <View style={{padding:10}}>
        <Title style={{marginLeft:10,fontSize:19}}>Check Delivery</Title>
        <Text style={{marginLeft:10,fontSize:16}}>Enter Pincode to check delivery date / pickup option</Text>
      </View>
      <View style={{padding:10,margin:5}}>
        <TextInput 
        placeholder='Pin code'
        placeholderTextColor={'grey'}
         style={{backgroundColor:'#C9F2ED',borderWidth:1,borderColor:'#0caf9a',borderRadius:10,padding:5,height:50}}
        />
      </View>
      <View style={{flexDirection:'row' ,margin:7,marginLeft:20}}>
        <Feather name='truck' size={20}/>
        <Text style={{marginLeft:10,fontSize:16}}>Free Delivery on order above $200.00</Text>
      </View>
      <View style={{flexDirection:'row' ,margin:7,marginLeft:20}}>
        <MaterialIcons name='attach-money' size={22}/>
        <Text style={{marginLeft:10,fontSize:16}}>Cash on delivery available</Text>
      </View>
      <View style={{flexDirection:'row' ,margin:7,marginLeft:20}}>
        <MaterialIcons name='lock-clock' size={20}/>
        <Text style={{marginLeft:10,fontSize:16}}>Easy 21 days returns and exchanges</Text>
      </View>
    </View>
  )
}

export default CheckDelivery

const styles = StyleSheet.create({})