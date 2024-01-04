/* eslint-disable no-unused-vars */
import { StyleSheet, PixelRatio } from 'react-native';
import { Colors } from '../Utils/Constants';
import { byHeight, byWidth, byFont } from '../Utils/Functions';

const Styles = StyleSheet.create({
   main: {
      backgroundColor: Colors.white,
      height: byHeight(100),
      width: byWidth(100),
   },
   // SignUp
   header: {
      height: byHeight(12),
      width: byWidth(100),
      justifyContent: 'flex-end',
      alignItems: 'center',
   },
   heading: {
      color: Colors.blue,
      fontSize: byFont(9),
   },
   heading1: {
      color: Colors.blue1,
      fontSize: byFont(7),
      fontWeight: '400',
   },
   form: {
      // height:byHeight(13),
      width: byWidth(100),
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      gap: byHeight(2),
   },
   t1: {
      color: Colors.black,
      fontSize: byFont(7),
      fontWeight: '400',
      marginLeft: byWidth(1),
   },
   textInput: {
      backgroundColor: '#C4C4C420',
      fontSize: byFont(7),
      borderRadius: 8,
      height: byHeight(5),
      width: byWidth(90),
   },
   // Radio Button:
   genderCont: {
      flexDirection: 'column',
      width: byWidth(90),
   },
   radioGroup: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      borderRadius: 8,
      padding: 10,
      elevation: 4,
      backgroundColor: 'white',
      shadowColor: Colors.shadow,
   },
   radioButton: {
      flexDirection: 'row',
      alignItems: 'center',
   },
   radioLabel: {
      marginLeft: 8,
      fontSize: 16,
      color: '#333',
   },
   checkContMain: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignContent:'center',
   },
   checkbox: {
      flexDirection: 'row',
      alignContent:'center',
      justifyContent: 'center',
   },
   checkText:{
      alignSelf:'center',
      color: Colors.black,
      fontSize: byFont(6),
   },
   // Dropdown
   dropdownCont:{
      alignContent:'center',
      justifyContent: 'center',
   },
   dropdown: {
      height: byHeight(5),
      width:byWidth(35),
      borderBottomColor: 'gray',
      borderWidth: 0.8,
    },
    placeholderStyle: {
      fontSize: byFont(6),
   },
   selectedTextStyle: {
      fontSize: byFont(6),
      marginLeft:byWidth(4),
    },
    inputSearchStyle: {
      height: 40,
      fontSize: byFont(5),
    },
    iconStyle: {
      width: byWidth(4),
      height: byWidth(5),
    },
   //  Save Button
   saveCont:{
      height: byHeight(5),
      width:byWidth(30),
      justifyContent: 'center',
      alignItems:'center',
   },
   saveButton: {
      height: byHeight(5),
      width:byWidth(30),
      justifyContent: 'center',
      alignItems:'center',
      borderRadius:25,
      backgroundColor:Colors.blue,
   },
   saveText:{
      fontSize:byFont(7),
      color:Colors.white,
   },
});

export default Styles;
