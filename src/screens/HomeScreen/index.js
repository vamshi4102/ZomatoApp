import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
// import {
//   MapPinIcon,
//   Bars3Icon,
//   ChevronDownIcon,
// } from 'react-native-heroicons/solid';
import { ShoppingBagIcon } from "react-native-heroicons/solid";
import styles from './styles';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      {/* location bar */}
      <View style={styles.location_row}>
        <View style={styles.__left}>
          {/* <MapPinIcon /> */}
        </View>
        <View style={styles.__center}>
          <View style={styles.__name_row}>
            <Text style={styles.location_name}>JBS BUS STAND</Text>
            {/* <ChevronDownIcon /> */}
          </View>
          <Text style={styles.full_location_name}>JBS BUS STAND</Text>
        </View>
        <View style={styles.__right}>
        <ShoppingBagIcon />
            {/* <Bars3Icon /> */}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
