import { FlatList, StyleSheet, Text, View,Image ,ScrollView} from 'react-native'
import React, { useState } from 'react'
import shopByCategory from '../constants/shopByCategory'
import HomeSearchBar from './HomeSearchBar'
import { ImageBackground } from 'react-native'
import { Paragraph, Title } from 'react-native-paper'
import recentlyBought from '../constants/recentlyBought'

const CategoryList = () => {
  const [click, setClick] = useState(null)
    const renderList= ((item) =>{
        return(
            <View>
            <View style={{borderBottomWidth:0.7,alignSelf:'flex-start',backgroundColor:'#edf9f9',padding:4,borderColor:'grey',}}>
                <Image source={item.image} resizeMode='contain' style={{height:100,width:100,margin:7,padding:7}}/>
                <Text style={{color:'black',margin:10,fontSize:16}}>{item.name}</Text>
            </View>
            <View>
                
            </View>
            </View>
        )
        })
  return (
    <ScrollView>
        <HomeSearchBar/>
        <View style={{flexDirection:'row'}}>
        
      <FlatList
      data={shopByCategory}
      renderItem={({item}) =>{
        return renderList(item)
    }}
    
      />
      <ImageBackground source={require('../assets/Jr.png')} style={{height:150,width:240,margin:10,borderRadius:10}} imageStyle={{borderRadius:20}}>
        <Title style={{alignSelf:'center',justifyContent:'center',marginTop:60,marginRight:18,fontSize:18,fontWeight:'600'}}>Farm Fresh Veggies</Title>
        <Text style={{fontSize:16,marginLeft:27}}>Get instant delivery</Text>
        </ImageBackground>
       
      </View>
       
     <View style={{flex:1}}>
    
     </View>
    </ScrollView>
  )
}

export default CategoryList

const styles = StyleSheet.create({
  bgColor: '#edf9f9',
  bgColor1: 'white'
})