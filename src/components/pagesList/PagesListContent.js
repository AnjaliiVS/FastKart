import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Octicons from 'react-native-vector-icons/Octicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import BottomTab from '../../navigation/BottomTab'
const PagesListContent = () => {
  return (
    <ScrollView style={{backgroundColor:'#ffffff'}}>
       <View>
       <View style={{flexDirection:'row',margin:10,padding:10,alignContent:'space-between'}}>
    <View style={{borderWidth:1,borderRadius:5,marginRight:10}}>
    <AntDesign name='arrowleft' size={20} color='#0caf9a' onPress={() => navigation.pop()}/>
    </View>
      <View style={{flexDirection:'row'}}>
        <Text style={{fontSize:17,color:'black',fontWeight:'500'}}> Pages List</Text>
        <Octicons name='home' size={25} color='black' style={{marginLeft:230}} />
     </View>
    </View>
    <View style={{backgroundColor:'lightgrey',}}>
        <Text style={{padding:5,margin:5,fontSize:15,fontFamily:'italic'}}>Checkout all pages and their variations over{"\n"}here.Following are the list of all the pages.</Text>
    </View>
    <View style={{flexDirection:'row',padding:20,margin:10}}>
        <Text style={{fontSize:17,color:'black'}}>404</Text>
        <MaterialIcons name='arrow-forward-ios'
              size={25} color='#0caf9a'
              style={styles.arrowIcon} 
              onPress={() => {props.navigation.navigate('Home')}}/>
    </View>
    <View style={{flexDirection:'row',padding:20,margin:10}}>
        <Text style={{fontSize:17,color:'black'}}>About Us</Text>
        <MaterialIcons name='arrow-forward-ios'
              size={25} color='#0caf9a'
              style={styles.arrowIcon} 
              onPress={() => {props.navigation.navigate('Home')}}/>
    </View>
    <View style={{flexDirection:'row',padding:20,margin:10}}>
        <Text style={{fontSize:17,color:'black'}}>Account</Text>
        <MaterialIcons name='arrow-forward-ios'
              size={25} color='#0caf9a'
              style={styles.arrowIcon} 
              onPress={() => {props.navigation.navigate('Home')}}/>
    </View>
    <View style={{flexDirection:'row',padding:20,margin:10}}>
        <Text style={{fontSize:17,color:'black'}}>Address Type 1</Text>
        <MaterialIcons name='arrow-forward-ios'
              size={25} color='#0caf9a'
              style={styles.arrowIcon} 
              onPress={() => {props.navigation.navigate('Home')}}/>
    </View>
    <View style={{flexDirection:'row',padding:20,margin:10}}>
        <Text style={{fontSize:17,color:'black'}}>Address Type 2</Text>
        <MaterialIcons name='arrow-forward-ios'
              size={25} color='#0caf9a'
              style={styles.arrowIcon} 
              onPress={() => {props.navigation.navigate('Home')}}/>
    </View>
    <View style={{flexDirection:'row',padding:20,margin:10}}>
        <Text style={{fontSize:17,color:'black'}}>Cart</Text>
        <MaterialIcons name='arrow-forward-ios'
              size={25} color='#0caf9a'
              style={styles.arrowIcon} 
              onPress={() => {props.navigation.navigate('Home')}}/>
    </View>
    <View style={{flexDirection:'row',padding:20,margin:10}}>
        <Text style={{fontSize:17,color:'black'}}>Category Wide</Text>
        <MaterialIcons name='arrow-forward-ios'
              size={25} color='#0caf9a'
              style={styles.arrowIcon} 
              onPress={() => {props.navigation.navigate('Home')}}/>
    </View>
    <View style={{flexDirection:'row',padding:20,margin:10}}>
        <Text style={{fontSize:17,color:'black'}}>Home Page</Text>
        <MaterialIcons name='arrow-forward-ios'
              size={21} color='#0caf9a'
              style={styles.arrowIcon} 
              onPress={() => {props.navigation.navigate('Home')}}/>
    </View>
    <View style={{flexDirection:'row',padding:20,margin:10}}>
        <Text style={{fontSize:17,color:'black'}}>Login</Text>
        <MaterialIcons name='arrow-forward-ios'
              size={25} color='#0caf9a'
              style={styles.arrowIcon} 
              onPress={() => {props.navigation.navigate('Home')}}/>
    </View>
    <View style={{flexDirection:'row',padding:20,margin:10}}>
        <Text style={{fontSize:17,color:'black'}}>Notification</Text>
        <MaterialIcons name='arrow-forward-ios'
              size={25} color='#0caf9a'
              style={styles.arrowIcon} 
              onPress={() => {props.navigation.navigate('Home')}}/>
    </View>
    <View style={{flexDirection:'row',padding:20,margin:10}}>
        <Text style={{fontSize:17,color:'black'}}>Offers</Text>
        <MaterialIcons name='arrow-forward-ios'
              size={25} color='#0caf9a'
              style={styles.arrowIcon} 
              onPress={() => {props.navigation.navigate('Home')}}/>
    </View>
    <View style={{flexDirection:'row',padding:20,margin:10}}>
        <Text style={{fontSize:17,color:'black'}}>OnBoarding</Text>
        <MaterialIcons name='arrow-forward-ios'
              size={25} color='#0caf9a'
              style={styles.arrowIcon} 
              onPress={() => {props.navigation.navigate('Home')}}/>
    </View>
    <View style={{flexDirection:'row',padding:20,margin:10}}>
        <Text style={{fontSize:17,color:'black'}}>Order Detail</Text>
        <MaterialIcons name='arrow-forward-ios'
              size={25} color='#0caf9a'
              style={styles.arrowIcon} 
              onPress={() => {props.navigation.navigate('Home')}}/>
    </View>
    <View style={{flexDirection:'row',padding:20,margin:10}}>
        <Text style={{fontSize:17,color:'black'}}>Order History</Text>
        <MaterialIcons name='arrow-forward-ios'
              size={25} color='#0caf9a'
              style={styles.arrowIcon} 
              onPress={() => {props.navigation.navigate('Home')}}/>
    </View>
    <View style={{flexDirection:'row',padding:20,margin:10}}>
        <Text style={{fontSize:17,color:'black'}}>Order Success</Text>
        <MaterialIcons name='arrow-forward-ios'
              size={25} color='#0caf9a'
              style={styles.arrowIcon} 
              onPress={() => {props.navigation.navigate('Home')}}/>
    </View>
    <View style={{flexDirection:'row',padding:20,margin:10}}>
        <Text style={{fontSize:17,color:'black'}}>Order Tracking</Text>
        <MaterialIcons name='arrow-forward-ios'
              size={25} color='#0caf9a'
              style={styles.arrowIcon} 
              onPress={() => {props.navigation.navigate('Home')}}/>
    </View>
    <View style={{flexDirection:'row',padding:20,margin:10}}>
        <Text style={{fontSize:17,color:'black'}}>Payment</Text>
        <MaterialIcons name='arrow-forward-ios'
              size={25} color='#0caf9a'
              style={styles.arrowIcon} 
              onPress={() => {props.navigation.navigate('Home')}}/>
    </View>
    <View style={{flexDirection:'row',padding:20,margin:10}}>
        <Text style={{fontSize:17,color:'black'}}>Product</Text>
        <MaterialIcons name='arrow-forward-ios'
              size={25} color='#0caf9a'
              style={styles.arrowIcon} 
              onPress={() => {props.navigation.navigate('Home')}}/>
    </View>
    <View style={{flexDirection:'row',padding:20,margin:10}}>
        <Text style={{fontSize:17,color:'black'}}>Register</Text>
        <MaterialIcons name='arrow-forward-ios'
              size={25} color='#0caf9a'
              style={styles.arrowIcon} 
              onPress={() => {props.navigation.navigate('Home')}}/>
    </View>
    <View style={{flexDirection:'row',padding:20,margin:10}}>
        <Text style={{fontSize:17,color:'black'}}>Search</Text>
        <MaterialIcons name='arrow-forward-ios'
              size={25} color='#0caf9a'
              style={styles.arrowIcon} 
              onPress={() => {props.navigation.navigate('Home')}}/>
    </View>
    <View style={{flexDirection:'row',padding:20,margin:10}}>
        <Text style={{fontSize:17,color:'black'}}>Setting</Text>
        <MaterialIcons name='arrow-forward-ios'
              size={25} color='#0caf9a'
              style={styles.arrowIcon} 
              onPress={() => {props.navigation.navigate('Home')}}/>
    </View>
    <View style={{flexDirection:'row',padding:20,margin:10}}>
        <Text style={{fontSize:17,color:'black'}}>Shop</Text>
        <MaterialIcons name='arrow-forward-ios'
              size={25} color='#0caf9a'
              style={styles.arrowIcon} 
              onPress={() => {props.navigation.navigate('Home')}}/>
    </View>
    <View style={{flexDirection:'row',padding:20,margin:10}}>
        <Text style={{fontSize:17,color:'black'}}>Wishlist</Text>
        <MaterialIcons name='arrow-forward-ios'
             size={25} color='#0caf9a'
              style={styles.arrowIcon} 
              onPress={() => {props.navigation.navigate('Home')}}/> 
    </View>
    
       </View>
    </ScrollView>
  )
}

export default PagesListContent

const styles = StyleSheet.create({
    arrowIcon: {
        //alignSelf: 'flex-end',
       alignItems:'flex-end',
       position:'absolute',
       right:0,
        backgroundColor: '#edf9f9',
        borderRadius: 15,
        marginTop:10
      }
})