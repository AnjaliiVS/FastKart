import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import CategoryHeader from '../components/CategoryHeader'
import CategoryList from '../components/CategoryList'
const Category = () => {
  return (
    <View style={{flex:1,backgroundColor:'#ffffff'}}>
    <CategoryHeader/>
     <CategoryList/>
    </View>
  )
}

export default Category

const styles = StyleSheet.create({})