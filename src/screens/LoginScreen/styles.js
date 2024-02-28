import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  body: {
    // backgroundColor:'red'
  },
  login_bg: {
    width: '100%',
    height: 350,
  },
  sub_body: {
    alignItems: 'center',
  },
  heding: {
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical: 25,
    textAlign: 'center',
  },
  iput_row: {
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  flag_con: {
    width: '15%',
    height: 45,
    borderWidth: 1,
    borderColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  input_box: {
    width: '82%',
    height: 45,
    borderWidth: 1,
    borderColor: '#ddd',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
  },
  flag_image: {
    width: '50%',
    height: '50%',
  },
  country_code: {
    marginHorizontal: 10,
  },
  input_text: {},
  row_options: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  more_button: {
    width: 70,
    height: 70,
    borderWidth: 1,
    borderColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 80,
    marginHorizontal: 10,
  },
  logo_icon: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  //   -------------------row buttons
  terms_buttons: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: '85%',
    alignSelf: 'center',
    marginVertical:20
  },
  terms_text:{
    color:'gray'
  },
  row_btns: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '85%',
    alignSelf: 'center',
  },
  btn: {
    marginHorizontal: 5,
  },
  text_btn: {
    textDecorationLine:'underline',
    color:'gray'
  },
});
export default styles;
