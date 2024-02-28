import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const CustomButton = ({name}) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#cb202d',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: 15,
    borderRadius: 8,
  },
  text: {
    color: '#fff',
    fontSize: 18,
  },
});
