import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  FlatList,
} from 'react-native';
import React from 'react';
import {
  MapPinIcon,
  Bars3Icon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  ArrowLongRightIcon,
} from 'react-native-heroicons/solid';
import {MicrophoneIcon} from 'react-native-heroicons/outline';
import styles from './styles';
import CustomHeading from '../../components/CustomHeading';
import { dishes } from '../../assets/data/dishes';
import DishItem from '../../components/DishItem';
import { FiltersData } from '../../assets/data/Filters';
import FilterItem from '../../components/FilterItem';
const ZomatoColor = '#d91e26';
const HomeScreen = () => {
  var DishesArray = [],size=2;
  while (dishes.length > 0)  DishesArray.push(dishes.splice(0,size));
  return (
    <SafeAreaView>
      {/* location bar */}
      <View style={styles.location_row}>
        <View style={styles.__left}>
          <MapPinIcon color={ZomatoColor} size={35} />
        </View>
        <View style={styles.__center}>
          <View style={styles.__name_row}>
            <Text style={styles.location_name}>JBS BUS STAND</Text>
            <ChevronDownIcon color={'#333'} size={20} />
          </View>
          <Text style={styles.full_location_name}>
            Jublee bus station - Utkoor
          </Text>
        </View>
        <View style={styles.__right}>
          <Bars3Icon color={'#333'} size={35} />
        </View>
      </View>
      {/* search bar */}
      <View style={styles.search_box}>
        <View style={styles.search_icon}>
          <MagnifyingGlassIcon color={ZomatoColor} size={22} />
        </View>
        <View style={styles.input_box}>
          <TextInput placeholder="Search 'Biryani'" style={styles.input_text} />
        </View>
        <View style={styles.mic_icon}>
          <TouchableOpacity>
            <MicrophoneIcon color={ZomatoColor} size={22} />
          </TouchableOpacity>
        </View>
      </View>
      {/* explore----- */}
      <CustomHeading name={'Explore'} />
      <View style={styles.row_actions}>
        <View style={styles.action}>
          <View style={styles.action_left}>
            <Text style={styles.action_heding}>Express</Text>
            <Text style={styles.action_subheding}>Delivery</Text>
            <View style={styles.action_icon}>
              <ArrowLongRightIcon color={'#fff'} size={20} />
            </View>
          </View>
          <View style={styles.action_right}>
            <Image 
            source={{uri:'https://cdn.iconscout.com/icon/free/png-256/free-30-minutes-delivery-1851575-1569300.png?f=webp'}}
            style={styles.action_image}
            />
          </View>
        </View>
        <View style={styles.action}>
          <View style={styles.action_left}>
            <Text style={styles.action_heding}>Healthy</Text>
            <Text style={styles.action_subheding}>Curated dishes</Text>
            <View style={styles.action_icon}>
              <ArrowLongRightIcon color={'#fff'} size={20} />
            </View>
          </View>
          <View style={styles.action_right}>
            <Image 
            source={{uri:'https://static-00.iconduck.com/assets.00/vegetables-illustration-2048x2008-5cbf299u.png'}}
            style={styles.action_image}
            />
          </View>
        </View>
      </View>
      <View style={{marginTop:15}} />
      <CustomHeading name={"What's on yout mind?"} />
      <FlatList
      data={DishesArray}
      renderItem={DishItem}
      horizontal
      showsHorizontalScrollIndicator={false}
      />
      {/* all items */}
      <View style={{marginTop:15}} />
      <CustomHeading name={"ALL RESTURANTS"} />
      <FlatList
      data={FiltersData}
      renderItem={FilterItem}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{padding:10}}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
