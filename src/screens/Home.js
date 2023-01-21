import { StyleSheet, Text, View ,ScrollView, TouchableHighlight} from 'react-native'
import React from 'react'
import Header from '../components/Header'
import HomeSearchBar from '../components/HomeSearchBar'
import TopContainer from '../components/TopContainer'
import ShopContainer from '../components/ShopContainer'
import RecentlyBought from '../components/RecentlyBought'
import CategoryContainer from '../components/CategoryContainer'
import LowestPrice from '../components/LowestPrice'
import EssentialsCategory from '../components/EssentialsCategory'
import CouponsContainer from '../components/CouponsContainer'

const Home = ({navigation}) => {
  return (
    <ScrollView style={{flex:1,backgroundColor:'#ffffff'}}>
     <Header/>
   
     <HomeSearchBar/>
     <TopContainer/>
      <ShopContainer/>  
     <CategoryContainer/>
     <LowestPrice/>
     <EssentialsCategory/>
     <CouponsContainer/>
     <LowestPrice/>
    <View style={{padding:10,margin:10}}>
      <Text style={{fontSize:25}}> Didn't find what you were {"\n"} looking for?</Text>
      <TouchableHighlight style={{backgroundColor:'#0caf9a',margin:5,padding:5,width:140,height:40,borderRadius:10}} onPress={() => {navigation.navigate('ProductContainer')}}>
        <Text style={{color:'#ffffff',alignContent:'center',justifyContent:'center',fontSize:15,padding:3}}>Browse Category</Text>
      </TouchableHighlight>
      </View>
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({})
