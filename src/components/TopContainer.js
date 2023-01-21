import { ImageBackground, StyleSheet, Text, TouchableHighlight, View ,ScrollView,Dimensions } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
const { width, height } = Dimensions.get('window');
const TopContainer = () => {
  return (
    <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={{margin:10}}>
     <ImageBackground   source={require('../assets/Jr.png')} imageStyle={{borderRadius:20}} style={styles.imageBackground}>
      <Text style={styles.text1}>Farm Fresh Vegies</Text>
    
      <Text style={styles.text2}>Get instant delivery</Text>
    
      
        <TouchableHighlight style={styles.button}>
        <Text style={styles.text3}>Shop Now</Text>
        </TouchableHighlight>
     </ImageBackground>
     </View>
     <View style={{margin:10,}}>
     <ImageBackground   source={require('../assets/1d.png')} imageStyle={{borderRadius:20,}} style={styles.imageBackground}>
      <Text style={styles.text1}>Farm Fresh Vegies</Text>
    
      <Text style={styles.text2}>Get instant delivery</Text>
    
      
        <TouchableHighlight style={styles.button}>
        <Text style={styles.text3}>Shop Now</Text>
        </TouchableHighlight>
     </ImageBackground>
     </View>
    </ScrollView>
  )
}

export default TopContainer

const styles = StyleSheet.create({
    container:{
        padding:5,
     flex:1
       
    },
    imageBackground:{
        height:210,
        width:350,
         borderRadius:60
    },
    text1:{
        color:'black',
        marginLeft:30,
        margin:60,
       // padding:2,
        fontWeight:'600',
        fontSize:19,
         },
    text2:{
        color:'#747474',
        padding:20,
        fontSize:16,
       marginTop:-75,
       marginLeft:13,
       
    },
    text3:{
        color:'#f0ffff',
        alignSelf:'center',
        margin:6,
        fontSize:16,
        fontWeight:'500'
    },
    button:{
        backgroundColor:'#0caf9a',
        height:40,
        width:100,
        marginLeft:30,
        borderRadius:10
    }
})

//   return (
//         <View style={styles.container}>
//          <ImageBackground  source={require('../assets/1d.png')} style={styles.imageBackground}>
//            <Image  source={{uri:item.image}}/>
//          </ImageBackground>
          
//          </View>
         
//   )
// }) 
// return(
// <View style={{flex:1}}>
//     <FlatList
//   data={recentlyBought}
//  renderItem={({item}) =>{
//      return renderList(item)
//  }}
//  keyExtractor={item=>item._id}

 
//   />
// </View>
// )