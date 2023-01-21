import React, {useEffect} from 'react';
import {View, Image, ImageBackground,Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
var BackgroundImg = require('../assets/1d.png');
var logo = require('../assets/ME.png');

const SplashScreen = () => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 1000);
  });
  const navigation = useNavigation();
  return (
    <View style={{flex:1}}>
      <ImageBackground source={BackgroundImg} style={{height:'100%',width:'100%',justifyContent:'center'}} resizeMode='cover'>
      <View style={{justifyContent:'center',alignItems:'center'}}>
        <Image source={logo} />
        </View>
      </ImageBackground>
    </View>
  );
};
export default SplashScreen;