import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const DishItem = ({item}) => {
  const Dish = item;
  return (
    <View>
    <View style={styles.dish}>
      <Image style={styles.dish_image} source={{uri: Dish[0].image}} />
      <Text style={styles.dish_name}>{Dish[0].name}</Text>
    </View>
    <View style={styles.dish}>
      <Image style={styles.dish_image} source={{uri: Dish[1].image}} />
      <Text style={styles.dish_name}>{Dish[1].name}</Text>
    </View>
    </View>
  );
};

export default DishItem;

const styles = StyleSheet.create({
  dish: {
    // width: '50%',
    width:150,
    height: 100,
    margin:10
  },
  dish_image: {
    width: '100%',
    height: '80%',
    borderRadius: 20,
  },
  dish_name: {
    textAlign: 'center',
    fontSize: 15,
    marginVertical: 10,
  },
});
