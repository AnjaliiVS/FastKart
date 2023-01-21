import { FlatList, StyleSheet, Text, View,Image,ScrollView } from 'react-native'
import React from 'react'
import Coupons from '../constants/Coupons'
const CouponsContainer = () => {
    const renderList =((item) =>{
        return(
            <ScrollView style={{alignSelf:'center',backgroundColor:'#feeadf',padding:10,margin:10,borderRadius:5}}>
                {/* <Image source={item.image} /> */}
                <Text style={{color:'black',fontSize:16}}>{item.off}</Text>
                <Text  style={{color:'grey',fontSize:15}}>{item.price}</Text>
            </ScrollView>
        )
    })
  return (
    <View style={{flex:1,backgroundColor:'#edf9f9',margin:6,padding:5}}>
        <Text style={{color:'#222222',fontSize:17,fontWeight:'600',padding:5}}>Lowest Price</Text>
           <Text style={{color:'#0caf9a',fontSize:17,fontWeight:'600',alignSelf:'flex-end',marginTop:-15,padding:10}}>See all</Text>
           <Text style={{color:'grey',fontSize:17,fontWeight:'600',padding:4,marginTop:-30}}>Pay Less, Get More</Text>
      <FlatList
    numColumns={3}
      data={Coupons}
      horizontal={false}
      renderItem={({item}) =>{
        return renderList(item)
        
    }}
      />
    </View>
  )
}

export default CouponsContainer

const styles = StyleSheet.create({})