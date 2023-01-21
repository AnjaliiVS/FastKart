import { StyleSheet, Text, View ,FlatList,Image} from 'react-native'
import React from 'react'
import shopByCategory from '../constants/shopByCategory'
const CategoryContainer = () => {
  const renderList= ((item) =>{
    return (
          <View style={{padding:5, margin:5}}>
           
         <View style={{backgroundColor:'#feeadf',height:80,width:80,borderRadius:20}}>
         <Image source={item.image} style={{height:60,width:60,alignSelf:'center'}} resizeMode='contain'/>
         </View>
           <Text style={{alignSelf:'center',color:'#222222',fontSize:15,fontWeight:'500'}}>{item.name}</Text>
            </View>
           
    )
}) 
   return(
       <View style={{flex:1}}>
       <Text style={{color:'#222222',padding:10,fontSize:19,alignSelf:'center',fontWeight:'600'}}>Shop by Category</Text>
           <FlatList
          numColumns={4}
          horizontal={false}
         data={shopByCategory}
        renderItem={({item}) =>{
            return renderList(item)
        }}
       // keyExtractor={item=>item._id}
       scrollEnabled={false}
         />
       </View>
   )
}

export default CategoryContainer

const styles = StyleSheet.create({})