import { ScrollView, StyleSheet, View ,Text, TouchableHighlight} from 'react-native'
import React from 'react'
import HeaderOffer from '../components/headeroffer'
import SearchOffer from '../components/searchoffer'
import ContainerOffer from '../components/ContainerOffer'
import HeaderCart from '../components/headercart'
import ItemCart from '../components/ItemCart'
import CartOffer from '../components/CartOffer'
import CartPrice from '../components/CartPrice'

const Cart = () => {
  return (
    <ScrollView style={{flex:1,backgroundColor:'white'}}>
    <View >
      <HeaderCart/>
      <ItemCart/>
       <CartOffer/>
     <CartPrice/>
    </View>
   </ScrollView>
  )
}

export default Cart

const styles = StyleSheet.create({})