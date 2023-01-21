import { StyleSheet, Text, View, Image, Switch, TouchableHighlight } from 'react-native'
import React, { useState } from 'react'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import { Avatar, Caption, Title, Drawer } from 'react-native-paper'
import Octicons from 'react-native-vector-icons/Octicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Foundation from 'react-native-vector-icons/Foundation'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
const DrawerContent = (props,{navigation}) => {
  const [switchVal, setSwitchVal] = useState(false)
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.nameContainer}>
          <View >
            <Avatar.Image source={require('../assets/kU.png')} />
          </View>
          <View style={styles.nameText}>
            <Title >Andrea Joanne</Title>
            <Caption style={styles.captionStyle}>andreajoanne@gmail.com</Caption>
          </View>
        </View>
        <Drawer.Section>
          <DrawerItem
            labelStyle={styles.drawerLabel}
            icon={({ }) =>
              <Octicons name='home' size={20} color='black' />}
            label='Home'
          />
          <View style={{ backgroundColor: '#edf9f9' }}>
            <MaterialIcons name='arrow-forward-ios'
              size={21} color='black'
              style={styles.arrowIcon} 
              onPress={() => {props.navigation.navigate('Home')}}
              />
          </View>
          <DrawerItem
            labelStyle={{ fontSize: 18, color: 'black', fontFamily: 'italic' }}
            icon={({ }) =>
              <Foundation name='page' size={20} color='black' />}
            label='Fastkart Pages list '
          />
          <View style={{ backgroundColor: '#edf9f9' }}>
            <MaterialIcons
              name='arrow-forward-ios'
              size={21} color='black'
              style={styles.arrowIcon} 
              onPress={() => {props.navigation.navigate('PagesList')}}/>
          </View>
          <DrawerItem
            labelStyle={styles.drawerLabel}
            icon={({ }) =>
              <MaterialIcons name='category' size={20} color='black' />}
            label='Shop by Category'
          />
          <View style={{ backgroundColor: '#edf9f9' }}>
            <MaterialIcons
              name='arrow-forward-ios'
              size={21}
              color='black'
              style={styles.arrowIcon} />
          </View>
          <DrawerItem
            labelStyle={styles.drawerLabel}
            icon={({ }) =>
              <MaterialIcons name='list-alt' size={20} color='black' />}
            label='Orders'
          />
          <View style={{ backgroundColor: '#edf9f9' }}>
            <MaterialIcons
              name='arrow-forward-ios'
              size={21} color='black'
              style={styles.arrowIcon} />
          </View>
          <DrawerItem
            labelStyle={styles.drawerLabel}
            icon={({ }) =>
              <Octicons name='heart' size={20} color='black' />}
            label='Your Wishlist'
          />
          <View style={{ backgroundColor: '#edf9f9' }}>
            <MaterialIcons
              name='arrow-forward-ios'
              size={21} color='black'
              style={styles.arrowIcon} />
          </View>
          <DrawerItem
            labelStyle={{ fontSize: 18, color: 'black', fontFamily: 'italic' }}
            icon={({ }) =>
              <MaterialIcons name='language' size={20} color='black' />}
            label='Langauge'
            icon1={({ }) =>
              <AntDesign name='arrowright' size={1} />}
          />
          <View style={{ backgroundColor: '#edf9f9' }}>
            <MaterialIcons
              name='arrow-forward-ios'
              size={21} color='black'
              style={styles.arrowIcon} />
          </View>
          <DrawerItem
            labelStyle={{ fontSize: 18, color: 'black', fontFamily: 'italic' }}
            icon={({ }) =>
              <MaterialCommunityIcons name='account' size={20} color='black' />}
            label='Your Account'
          />
          <View style={{ backgroundColor: '#edf9f9' }}>
            <MaterialIcons
              name='arrow-forward-ios'
              size={21} color='black'
              style={styles.arrowIcon} />
          </View>
          <DrawerItem
            labelStyle={{ fontSize: 18, color: 'black', fontFamily: 'italic' }}
            icon={({ }) =>
              <MaterialIcons name='notifications' size={20} color='black' />}
            label='Notifications'
          />
          <View style={{ backgroundColor: '#edf9f9' }}>
            <MaterialIcons
              name='arrow-forward-ios'
              size={21} color='black'
              style={styles.arrowIcon} />
          </View>
          <DrawerItem
            labelStyle={{ fontSize: 18, color: 'black', fontFamily: 'italic' }}
            icon={({ }) =>
              <Ionicons name='settings' size={20} color='black' />}
            label='Settings'
            icon1={({ }) =>
              <AntDesign name='arrowright' size={1} />}
          />
          <View style={{ backgroundColor: '#edf9f9' }}>
            <MaterialIcons
              name='arrow-forward-ios'
              size={21} color='black'
              style={styles.arrowIcon} />
          </View>
          <DrawerItem
            labelStyle={{ fontSize: 18, color: 'black', fontFamily: 'italic' }}
            icon={({ }) =>
              <MaterialCommunityIcons name='currency-usd' size={21} color='black' />}
            label='Currency Change'
            icon1={({ }) =>
              <AntDesign name='arrowright' size={1} />}
          />
          <View style={{ backgroundColor: '#edf9f9' }}>
            <MaterialIcons
              name='arrow-forward-ios'
              size={20} color='black'
              style={styles.arrowIcon} />
          </View>
          <DrawerItem
            labelStyle={{ fontSize: 18, color: 'black', fontFamily: 'italic' }}
            icon={({ }) =>
              <FontAwesome name='exchange' size={20} color='black' />}
            label='RTL'
          />
          <View style={{ backgroundColor: '#edf9f9' }}>
            <Switch
              trackColor={{ false: "#edf9f9", true: "#edf9f9" }}
              thumbColor={switchVal ? "#edf9f9" : "#f4f3f4"}
              onValueChange={() => setSwitchVal((prevVal) => !prevVal)}
              value={switchVal}
              style={{ alignSelf: 'flex-end', marginTop: -37, marginRight: 20, }} />
          </View>
          <DrawerItem
            labelStyle={{ fontSize: 18, color: 'black', fontFamily: 'italic' }}
            icon={({ }) =>
              <MaterialCommunityIcons name='theme-light-dark' size={20} color='black' />}
            label='Dark'
            icon1={({ }) =>
              <AntDesign name='arrowright' size={1} />}
          />
          <View style={{ backgroundColor: '#edf9f9' }}>
            <Switch
              trackColor={{ false: "#edf9f9", true: "#edf9f9" }}
              thumbColor={switchVal ? "#edf9f9" : "#f4f3f4"}
              onValueChange={() => setSwitchVal((prevVal) => !prevVal)}
              value={switchVal}
              style={{ alignSelf: 'flex-end', marginTop: -37, marginRight: 20, }} />
          </View>
          <View style={{ backgroundColor: '#fafafa', padding: 10, margin: 10, flexDirection: 'row', width: 120 }}>
            <MaterialCommunityIcons name='logout' size={25} color='#0caf9a' />
            <Text style={{ fontSize: 17, color: 'black', marginLeft: 10 }}>Sign Out</Text>
          </View>
          <View style={{ backgroundColor: '#edf9f9', padding: 10, margin: 10, borderRadius: 20 }}>
            <Title>Contact Support</Title>
            <Caption style={{ fontSize: 14 }}>
              If you have any problem,queries or {"\n"}questions feel free to reach out.
            </Caption>
            <TouchableHighlight style={{ backgroundColor: '#0caf9a', width: 100, borderRadius: 7, margin: 5, padding: 5 }}>
              <Text style={{ fontSize: 15,color:'white' }}>Contact Us</Text>
            </TouchableHighlight>
          </View>
        </Drawer.Section>
      </DrawerContentScrollView>
    </View>
  )
}

export default DrawerContent

const styles = StyleSheet.create({
  nameContainer: {
    margin: 7,
    padding: 7,
    borderBottomWidth: 0.5,
    borderColor: 'grey'
  },
  nameText: {
    marginTop: -60,
    marginLeft: 70,
    marginBottom: 14
  },
  captionStyle: {
    marginTop: -5,
    fontSize: 13
  },
  drawerLabel: {
    fontSize: 18,
    color: 'black',
    fontFamily: 'italic'
  },
  arrowIcon: {
    alignSelf: 'flex-end',
    marginTop: -37,
    marginRight: 20,
    backgroundColor: '#edf9f9',
    borderRadius: 7
  }
})