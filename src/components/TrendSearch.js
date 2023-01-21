import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import images from '../assets/images';
const DATAS = [
  {img: images.img1},
  {img: images.img2},
  {img: images.img3},
  {img: images.img4},
  {img: images.img5},
  {img: images.img6},
  {img: images.img7},
  {img: images.img8},
];

const TrendSearch = () => {
  return (
    <View style={{
      flex:1,
      justifyContent: 'center',
      alignSelf: 'center',
      borderRadius: 14,
      marginVertical: 15,
    }}>
      <View
        >
        <Text style={{color: '#000', marginHorizontal: 10, bottom: '10%'}}>
          Trending Category
        </Text>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={DATAS}
          renderItem={({item}) => (
            <View style={styles.FlatList2}>
              <Image
                source={item.img}
                style={{
                  height: 45,
                  width: 45,
                  
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'center',
                }}></Image>
            </View>
          )}
        />
        <Text style={{color: '#000', marginHorizontal: 10, top: '5%'}}>
          Trending Products
        </Text>
      </View>
    </View>
  );
};

export default TrendSearch;

const styles = StyleSheet.create({
  FlatList2: {
    flexDirection: 'row',
    backgroundColor: '#edf9f9',
    height: hp('12%'),
    width: wp('34%'),

  
    marginHorizontal: 10,
    alignSelf: 'center',
    justifyContent: 'center',
   
    borderRadius:20
    
  },
});
