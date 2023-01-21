import { StyleSheet, Text, View ,FlatList,Image,ScrollView} from 'react-native'
import React from 'react'
import lowestprice from '../constants/lowestprice'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { FAB } from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign'
const LowestPrice = ({navigation}) => {
    const renderList= ((item) =>{
        return (
        
              <View style={{padding:5, margin:5 ,borderWidth:1,borderColor:'#0caf9a',borderRadius:10,flex:1,}} scrollEnabled={true} >
               <View style={{}}>
             <Ionicons name='heart-outline' size={23} style={{alignSelf:'flex-end'}} color='#0caf9a' onPress={() => navigation.navigate('ProductContainer')}/>
             <Image source={item.image} style={{height:80,width:80,alignSelf:'center'}} resizeMode='contain'/>
          
               <Text style={{color:'#272727',fontSize:15,fontWeight:'500'}}>{item.name}</Text>
               <Text style={{color:'grey',fontSize:15,fontWeight:'bold'}}>{item.quantity}</Text>
               <View style={{flexDirection:'row',}}>
               <Text style={{alignSelf:'center',color:'#232323',fontSize:15,fontWeight:'500'}}>{item.price}</Text>
             <AntDesign name='plussquare' size={29} color='#0caf9a' style={{marginLeft:65}}/> 
               </View>
               </View>
                </View>
               
        )
    }) 
       return(
           <View style={{flex:1 , backgroundColor:'#ffffff',margin:6,padding:5}}>
           <Text style={{color:'#222222',fontSize:17,fontWeight:'600',padding:5}}>Lowest Price</Text>
           <Text style={{color:'#0caf9a',fontSize:17,fontWeight:'600',alignSelf:'flex-end',marginTop:-15,padding:10}}>See all</Text>
           <Text style={{color:'grey',fontSize:17,fontWeight:'600',padding:4,marginTop:-30}}>Pay Less, Get More</Text>
               <FlatList
              
               style={{flexDirection:'row'}}
            //  numColumns={4}
            showsHorizontalScrollIndicator={false}
              horizontal={true}
             data={lowestprice}
            renderItem={({item}) =>{
                return renderList(item)
            }}
           // keyExtractor={item=>item._id}
           //scrollEnabled={true}
             />
           </View>
       )
}

export default LowestPrice

const styles = StyleSheet.create({})