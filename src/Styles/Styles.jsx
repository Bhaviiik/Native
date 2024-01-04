/* eslint-disable no-unused-vars */
import { StyleSheet, PixelRatio } from 'react-native';
import { Colors } from '../Utils/Constants';
import { byHeight, byWidth, byFont } from '../Utils/Functions';

const Styles = StyleSheet.create({
   main: {
      backgroundColor: Colors.white,
      height: byHeight(120),
      width: byWidth(100),
   },
   viewStyleForLine: {
      borderBottomColor: Colors.black1,
      borderBottomWidth: StyleSheet.hairlineWidth,
      alignSelf: 'stretch',
   },
   // SignUp
   header: {
      height: byHeight(12.5),
      width: byWidth(100),
      justifyContent: 'flex-end',
      alignItems: 'center',
   },
   heading: {
      color: Colors.blue,
      fontSize: byFont(12),
   },
   heading1: {
      color: Colors.blue2,
      fontSize: byFont(7),
      fontWeight: '400',
   },
   form: {
      // height:byHeight(80),
      width: byWidth(100),
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      gap: byHeight(0.5),
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
      padding: 2,
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
   // Gender Buttons
   checkContMain: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignContent: 'center',
   },
   checkbox: {
      flexDirection: 'row',
      alignContent: 'center',
      justifyContent: 'center',
   },
   checkText: {
      alignSelf: 'center',
      color: Colors.black,
      fontSize: byFont(6),
   },
   // Dropdown
   dropdownContMain: {
      flexDirection: 'row',
      alignContent: 'center',
      justifyContent: 'space-around',
      width: byWidth(100),
   },
   dropdownCont: {
      alignContent: 'center',
      justifyContent: 'center',
   },
   dropdown: {
      height: byHeight(5),
      width: byWidth(35),
      padding: byWidth(2),
      borderColor: Colors.blue,
      borderWidth: 0.8,
      borderRadius: 8,
   },
   placeholderStyle: {
      fontSize: byFont(6),
   },
   selectedTextStyle: {
      fontSize: byFont(6),
      marginLeft: byWidth(4),
   },
   inputSearchStyle: {
      height: 40,
      fontSize: byFont(5),
   },
   iconStyle: {
      width: byWidth(4),
      height: byWidth(5),
   },
   //  SignUp/SignIn Button
   signInCont: {
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
   },
   saveCont: {
      height: byHeight(5),
      width: byWidth(30),
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: byHeight(0.5),
   },
   saveButton: {
      height: byHeight(5),
      width: byWidth(30),
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 25,
      backgroundColor: Colors.blue,
   },
   saveText: {
      fontSize: byFont(7),
      color: Colors.white,
   },
   signIntext: {
      fontSize: byFont(5.5),
      color: Colors.black,
   },
   text: {
      fontSize: byFont(6),
      color: Colors.blue,
      fontWeight: '400',
   },
   //
   // Dashboard-->
   dashboardHeader: {
      height: byHeight(9),
      width: byWidth(100),
      justifyContent: 'flex-end',
      alignItems: 'center',
   },
   topCont: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      marginVertical: byHeight(1),
   },
   textInputSearch: {
      backgroundColor: Colors.blue1,
      fontSize: byFont(7),
      borderRadius: 8,
      width: byWidth(66),
   },
   sortCont: {
      flexDirection: 'column',
   },
   dropdownFilter: {
      height: byHeight(5.5),
      width: byWidth(26),
      borderRadius: 8,
      backgroundColor: Colors.blue1,
   },
   placeholderStyleFilter: {
      fontSize: byFont(6),
      marginLeft: byWidth(2),
   },
   selectedTextStyleFilter: {
      fontSize: byFont(5),
      marginLeft: byWidth(4),
   },
   inputSearchStyleFilter: {
      height: 40,
      fontSize: byFont(5),
   },
   iconStyleFilter: {
      width: byWidth(4),
      height: byWidth(5),
   },
   addUserCont: {
      position: 'absolute',
      bottom: byHeight(18),
      right: byWidth(5),
      height: byHeight(5.5),
      width: byWidth(26),
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors.blue,
      borderRadius: 25,
      elevation: 4,
   },
   addUserButton: {
      height: byHeight(5.5),
      width: byWidth(26),
   },
   addUserText: {
      fontSize: byFont(7),
      color: Colors.white,
      fontWeight: '300',
   },
   userCont: {
      justifyContent: 'center',
      alignSelf: 'center',
      width: byWidth(90),
   },
   userText: {
      fontSize: byFont(8),
      color: Colors.blue,
      fontWeight: '400',
   },
   cardCont: {
      alignItems: 'center',
      justifyContent: 'center',
   },
   userCard: {
      flexDirection:'row',
      height: byHeight(15),
      width: byWidth(95),
      borderRadius: 10,
      backgroundColor: Colors.white,
      justifyContent: 'space-between',
      alignItems: 'center',
      marginVertical: byHeight(1),
      elevation: 4,
      paddingHorizontal:byWidth(2),
   },
   detailsCont:{
      height:'95%',
      width:'85%',
      overflow:'hidden',
      justifyContent: 'center',
   },
   iconCont:{
      height:'95%',
      width:'12%',
      flexDirection:'column',
      justifyContent: 'space-evenly',
      alignItems: 'center',
   },
   detailText:{
      fontSize: byFont(7),
      color: Colors.blue,
      fontWeight: '400',
   },
   editIcon: {
      width: byWidth(7),
      height: byHeight(4),
      resizeMode: 'contain',
   },
   deleteIcon: {
      width: byWidth(6),
      height: byHeight(4),
      resizeMode: 'contain',
   },
});

export default Styles;
