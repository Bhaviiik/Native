/* eslint-disable no-unused-vars */
import { StyleSheet, PixelRatio } from 'react-native';
import { Colors } from '../Utils/Constants';
import { byHeight, byWidth, byFont } from '../Utils/Functions';

const Styles = StyleSheet.create({
   main: {
      backgroundColor: Colors.white,
      height: byHeight(100),
      width: byWidth(100),
      justifyContent: 'center',
      alignItems: 'center',
   },
   header: {
      backgroundColor: Colors.blue,
      height: byHeight(20),
      width: byWidth(100),
      justifyContent: 'center',
      alignItems: 'center',
      gap: byHeight(2),
   },
   text1: {
      color: Colors.white,
      fontSize: byFont(8),
   },
});

export default Styles;
