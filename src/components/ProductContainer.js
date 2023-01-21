import { View, Text, Image, ScrollView, TextInput, TouchableHighlight } from 'react-native'
import React from 'react'
import { Title, Caption, Avatar } from 'react-native-paper'
import { Rating, AirbnbRating } from 'react-native-elements';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import Feather from 'react-native-vector-icons/Feather'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Divider } from 'react-native-paper'
import LowestPrice from './LowestPrice';
import ProductDetails from './ProductDetails';
import Ratings from './Ratings';
import CheckDelivery from './CheckDelivery';
import AddButtons from './AddButtons';
import ProductHeader from './ProductHeader';
export default function ProductContainer() {
  return (
    <View>
    <ScrollView style={{ height: '100%', width: '100%', backgroundColor: "#fff" }}>
    <ProductHeader/>
      <View style={{ backgroundColor: "#eee" }}>
       
        <Image style={{ alignSelf: 'center', height: 250, width: 325 }} source={require('../assets/zo.png')} resizeMode='contain' />
      </View>
      <Title style={{ fontWeight: "bold", letterSpacing: 1, fontSize: 17, margin: 10 }}>Assorted Capsicum Combo-  (Red,Yellow,{"\n"}Green)</Title>
      <View style={{ flexDirection: 'row', marginHorizontal: 10 }}>
      <Rating
            type='custom'
            ratingCount={5}
           imageSize={20}
           
           />
        <Text style={{ fontSize: 14, marginHorizontal: 5 }}>(150 Ratings)</Text>
      </View>
      <View style={{ flexDirection: 'row', margin: 10 }}>
        <Text style={{ fontSize: 13, marginHorizontal: 5, fontWeight: "bold", color: "black" }}>₹25.00</Text>
        <Text style={{ fontSize: 13, marginHorizontal: 5, textDecorationLine: 'line-through' }}>₹45.00</Text>
        <Text style={{ fontSize: 13, marginHorizontal: 5, color: "#0caf9a", fontWeight: '600' }}>₹25.00</Text></View>
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <View style={{ height: 40, width: '45%', backgroundColor: "#eee", borderRadius: 7, flexDirection: 'row', padding: 10, margin: 10 }}>
          <Text style={{ fontSize: 13, alignSelf: 'center', color: "black" }}>500 g/$24.00</Text>
          <Entypo name="chevron-small-down" size={25} style={{ alignSelf: 'center', position: 'absolute', right: 0 }} />
        </View>
        <View style={{ height: 40, width: '45%', backgroundColor: "#eee", borderRadius: 7, flexDirection: 'row', padding: 10, margin: 10 }}>
          <Text style={{ fontSize: 13, alignSelf: 'center', color: "black" }}>Delivery Time</Text>
          <Entypo name="chevron-small-down" size={25} style={{ alignSelf: 'center', position: 'absolute', right: 0 }} />
        </View>
      </View>
      <ProductDetails/>
       <Ratings/>
       <CheckDelivery/>
       
      <LowestPrice/>
      <AddButtons/>
    </ScrollView>
   
    </View>
  )
}