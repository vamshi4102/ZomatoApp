import {View, Text, Image, TextInput, TouchableOpacity, Pressable} from 'react-native';
import React from 'react';
import styles from './styles';
import CustomHeading from '../../components/CustomHeading';
import CustomButton from '../../components/CustomButton';
const LoginScreen = () => {
  return (
    <View style={styles.body}>
      {/* background image */}
      <Image
        source={{
          uri: 'https://inc42.com/wp-content/uploads/2023/08/Zomato-Q1-FY24-F4-760x570.png',
        }}
        style={styles.login_bg}
      />
      {/* main heding */}
      <View style={styles.sub_body}>
        <Text style={styles.heding}>
          India's #1 food delivery and Dining app
        </Text>
      </View>
      {/* sub heding */}
      <CustomHeading name={'Login or Sign up'} />
      <View style={styles.iput_row}>
        <View style={styles.flag_con}>
          <Image
            source={{
              uri: 'https://deshpee.com/wp-content/uploads/2022/04/blog_img_2021-05-03_10-20-42_SqzeANX78UfZhd4E.jpg',
            }}
            style={styles.flag_image}
          />
        </View>
        <View style={styles.input_box}>
          <Text style={styles.country_code}>+91</Text>
          <TextInput
            placeholder="Enter mobile number"
            style={styles.input_text}
          />
        </View>
      </View>
      {/* submit button */}
      <CustomButton name={'Continue'} />
      <CustomHeading name={'or'} />
      <View style={styles.row_options}>
        <TouchableOpacity style={styles.more_button}>
          <Image
            source={{
              uri: 'https://blog.hubspot.com/hs-fs/hubfs/image8-2.jpg?width=600&name=image8-2.jpg',
            }}
            style={styles.logo_icon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.more_button}>
          <Image
            source={{
              uri: 'https://cdn.icon-icons.com/icons2/1659/PNG/512/3844444-dot-menu-more-option_110318.png',
            }}
            style={styles.logo_icon}
          />
        </TouchableOpacity>
      </View>
      {/* terms and conditions */}
      <View style={styles.terms_buttons}>
        <Text style={styles.terms_text}>By continuing you are agree to our</Text>
        <View style={styles.row_btns}>
            <Pressable style={styles.btn}>
                <Text style={styles.text_btn}>Terms of Service</Text>
            </Pressable>
            <Pressable style={styles.btn}>
                <Text style={styles.text_btn}>Privacy Policy</Text>
            </Pressable>
            <Pressable style={styles.btn}>
                <Text style={styles.text_btn}>Content Policy</Text>
            </Pressable>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
