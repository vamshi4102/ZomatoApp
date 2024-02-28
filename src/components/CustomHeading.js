import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CustomHeading = ({name}) => {
  return (
    <View style={styles.head}>
      <View style={styles.border} />
      <View style={styles.text_box}>
        <Text style={styles.text}>{name}</Text>
      </View>
    </View>
  );
};

export default CustomHeading;

const styles = StyleSheet.create({
  head: {
    marginVertical: 20,
  },
  border: {
    // backgroundColor:'red',
    alignItems: 'center',
    height: 1,
    backgroundColor: '#ccc',
    width: '80%',
    alignSelf: 'center',
  },
  text_box: {
    alignItems:'center',
    marginTop:-10,
    backgroundColor:"white",
    alignSelf:'center'
  },
  text: {
    color:'#333',
    width:'35%',
    backgroundColor:'#fff',
    paddingHorizontal:10
  },
});
