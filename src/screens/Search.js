import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RecSearch from '../components/RecSearch';
import Header from '../components/Header';
import HomeSearchBar from '../components/HomeSearchBar';
import TrendSearch from '../components/TrendSearch';
import ItemSearch from '../components/ItemSearch';

const Search = () => {
  return (
    <ScrollView 
    vertical={true}
    style={{height:'100%',width:'100%'}}>
    <View style={{backgroundColor:"#fff"}}>
      <Header />
      <HomeSearchBar />
      <RecSearch/>
      <TrendSearch/>
      <ItemSearch/>
     
    </View></ScrollView>
  );;
};

export default Search;

const styles = StyleSheet.create({});
