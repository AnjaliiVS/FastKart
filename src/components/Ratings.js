
import { View, Text, Image, ScrollView, TextInput,StyleSheet } from 'react-native'
import React from 'react'
import { Title, Caption, Avatar } from 'react-native-paper'
import { Rating, AirbnbRating } from 'react-native-elements';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import Feather from 'react-native-vector-icons/Feather'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Divider } from 'react-native-paper'
const Ratings = () => {
  return (
    <View>
      <View style={{backgroundColor:'lightgrey',padding:10,margin:10,borderRadius:20}}>
      <View style={{flexDirection:'row'}}>
          <Avatar.Image source={require('../assets/kU.png')}/>
      </View>
      <View style={{marginLeft:80,marginTop:-55}}>
          <Title>Andrea Joanne</Title>
          <View style={{marginRight:145}}>
          <Rating
            type='star'
            ratingCount={5}
           imageSize={20}
           
           />
          </View>
        </View>
        <Text  style={{fontSize:15,padding:3}}>It's a really cute skirt! I didn't expect to feel so good in a polyester material.The print is slightly</Text>
        </View>
        <View style={{backgroundColor:'lightgrey',padding:10,margin:10,borderRadius:20}}>
      <View style={{flexDirection:'row'}}>
          <Avatar.Image source={require('../assets/kU.png')}/>
      </View>
      <View style={{marginLeft:80,marginTop:-55}}>
          <Title>Andrea Joanne</Title>
          <View style={{marginRight:145}}>
          <Rating
            type='custom'
            ratingCount={5}
           imageSize={20}
           />
      </View>
      </View>
        <Text style={{fontSize:15,padding:3}}>It's a really cute skirt! I didn't expect to feel so good in a polyester material.The print is slightly</Text>
      </View>
      </View>
  )
}

export default Ratings

const styles = StyleSheet.create({})