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
            <Text style={Styles.heading}>Welcome Back</Text>
            <Text style={Styles.heading1}>Sing-In Here</Text>
         </View>
         <View style={Styles.form}>
            {/* E-Mail */}
            <View>
               <Text style={Styles.t1}>E-Mail</Text>
               <TextInput
                  style={Styles.textInput}
                  keyboardType="email-address"
                  placeholder="type e-mail..."
               />
            </View>
            {/* Password */}
            <View>
               <Text style={Styles.t1}>Password</Text>
               <TextInput
                  style={Styles.textInput}
                  secureTextEntry={true}
                  placeholder="type here..."
               />
            </View>
            {/* Button */}
            <View style={Styles.saveCont}>
               <TouchableOpacity
                  style={Styles.saveButton}
               // onPress={() => navigation.navigate('Dashboard')}
               >
                  <Text style={Styles.saveText}>Sign-In</Text>
               </TouchableOpacity>
            </View>
         </View>
      </View>
   );

};

export default Home;
