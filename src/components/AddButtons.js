import { View, Text, Image, ScrollView, TextInput, TouchableHighlight } from 'react-native'
import React from 'react'
import { Title, Caption, Avatar } from 'react-native-paper'
import { Rating, AirbnbRating } from 'react-native-elements';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import Feather from 'react-native-vector-icons/Feather'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Divider } from 'react-native-paper'

const AddButtons = () => {
  return (
    <View>
       <View style={{backgroundColor:'blue'}}>
          <View style={{flexDirection:'row'}}>
            <Feather name='minus' size={20}/>
            <Text>1</Text>
            <Feather name='plus' size={20}/>
          </View>
       </View>
      </View>
  )
}

export default AddButtons