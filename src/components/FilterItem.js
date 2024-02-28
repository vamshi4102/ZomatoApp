import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FilterItem = ({item}) => {
  return (
    <View style={styles.filter}>
      <Text style={styles.filter_name}>{item.name}</Text>
    </View>
  )
}

export default FilterItem

const styles = StyleSheet.create({
    filter:{
        paddingHorizontal:15,
        paddingVertical:5,
        backgroundColor:'white',
        marginHorizontal:8,
        shadowColor: 'rgba(0,0,0,0.5)',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius:2.62,
        elevation: 4,
        borderWidth:0.5,
        borderColor:'#ddd',
        borderRadius:8
    },
filter_name:{
fontSize:16,
fontWeight:'bold'
},
})