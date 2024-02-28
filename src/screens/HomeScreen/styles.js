import {StyleSheet} from 'react-native';

const ZomatoColor = '#cb202d';

const styles = StyleSheet.create({
  location_row: {
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
    alignSelf: 'center',
  },
  __left: {
    width: '10%',
  },
  __center: {
    alignItems: 'flex-start',
    width: '80%',
    paddingLeft: 5,
  },
  __name_row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  location_name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  full_location_name: {
    fontSize: 12,
    color: 'gray',
  },
  __right: {
    width: '10%',
    alignItems: 'flex-end',
  },
  search_box: {
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
    alignSelf: 'center',
    borderColor: 'gray',
    borderWidth: 0,
    marginVertical: 15,
    height: 45,
    overflow: 'visible',
    borderRadius: 8,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    backgroundColor: '#fff',
  },
  search_icon: {
    width: '10%',
    alignItems: 'center',
  },
  input_box: {
    width: '80%',
  },
  mic_icon: {
    width: '12%',
    borderLeftColor: 'gray',
    borderLeftWidth: 0.5,
    alignItems: 'center',
    paddingRight: 10,
  },
  input_text: {
    fontSize: 17,
  },
  // --------------
  row_actions: {
    flexDirection: 'row',
  },

  action: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    width: '45%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginHorizontal: 10,
    borderRadius: 8,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 10.62,

    elevation: 4,
    backgroundColor: '#fff',
  },
  action_heding: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  action_subheding: {
    fontSize: 12,
    marginVertical: 5,
    color:'#ccc'
  },
  action_icon: {
    backgroundColor: ZomatoColor,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  action_left: {},
  action_right: {},
  action_image: {
    width: 60,
    height: 60,
  },
});
export default styles;
