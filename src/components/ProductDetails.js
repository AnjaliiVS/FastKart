import { View, Text, Image, ScrollView, TextInput,StyleSheet } from 'react-native'
import React from 'react'
import { Title, Caption, Avatar } from 'react-native-paper'
import { Rating, AirbnbRating } from 'react-native-elements';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import Feather from 'react-native-vector-icons/Feather'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Divider } from 'react-native-paper'
import LowestPrice from './LowestPrice';

const ProductDetails = () => {
  return (
    <View style={{ backgroundColor: "#fff", margin: 10 }}>
        <View>
          <Title style={{ color: "black", fontWeight: '400' }}>Product Details </Title>
          <Text>Refillable,Reusable,High Quality Glass Roll on Bottles with Silver cap For Essential Oil Blends DIY Perfume Cosmentics Beauty Products Ideal</Text>
        </View>
        <Divider style={{ width: '97%', color: "black", height: '0.5%', margin: 10, alignSelf: 'center' }} />
        <View style={{ flexDirection: 'row' }}>
          <Title style={{ color: "black", fontWeight: '400', fontSize: 18 }}>Manufacturer Details</Title>
          <MaterialIcons name='arrow-forward-ios' size={23} color='black' style={{ right: 5, position: 'absolute', marginTop: 5 }} />
        </View>
        <Divider style={{ width: '97%', color: "black", height: '0.5%', margin: 10, alignSelf: 'center' }} />
        <View style={{ flexDirection: 'row' }}>
          <Title style={{ color: "black", fontWeight: '400', fontSize: 18 }}>Product Disclaimer</Title>
          <MaterialIcons name='arrow-forward-ios' size={23} color='black' style={{ right: 5, position: 'absolute', marginTop: 5 }} />
        </View>
        <Divider style={{ width: '97%', color: "black", height: '0.5%', margin: 10, alignSelf: 'center' }} />
        <View style={{ flexDirection: 'row' }}>
          <Title style={{ color: "black", fontWeight: '400', fontSize: 18 }}>Features & details</Title>
          <MaterialIcons name='arrow-forward-ios' size={23} color='black' style={{ right: 5, position: 'absolute', marginTop: 5 }} />
        </View>
        <Divider style={{ width: '97%', color: "black", height: '0.5%', margin: 10, alignSelf: 'center' }} />
        <View style={{ flexDirection: 'row' }}>
          <Title style={{ color: "black", fontWeight: '400', fontSize: 18 }}>Product Review(15)</Title>
          <Text style={{ right: 5, position: 'absolute', marginTop: 5, color: '#0caf9a', fontSize: 17 }}>See all</Text>
        </View>
      </View>
  )
}

export default ProductDetails

const styles = StyleSheet.create({})