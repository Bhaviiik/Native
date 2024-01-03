/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import {
   Image,
   Text,
   TouchableOpacity,
   View,
   ScrollView,
   TextInput,
} from 'react-native';

import Styles from '../Styles/Styles';
import { Icons, Colors } from '../Utils/Constants';


const Home = ({ navigation }) => {
   return (
      <View style={Styles.main}>
         <View style={Styles.header}>
            <Text style={Styles.text1}>This is Dashboard</Text>
         </View>
      </View>
   );

};

export default Home;
