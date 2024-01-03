/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import {
   Image,
   Text,
   TouchableOpacity,
   View,
   ScrollView,
   TextInput,
   StatusBar,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { RadioButton } from 'react-native-paper';

import Styles from '../Styles/Styles';
import { Icons, Colors } from '../Utils/Constants';


const Home = ({ navigation }) => {
   const [selectedValue, setSelectedValue] = useState('option1');
   const [toggleCheckBox, setToggleCheckBox] = useState(false);

   return (
      <View style={Styles.main}>
         <StatusBar
            translucent={true}
            backgroundColor="transparent"
            barStyle="dark-content"
         />
         <View style={Styles.header}>
            <Text style={Styles.heading}>Get Started</Text>
            <Text style={Styles.heading1}>By creating an account.</Text>
         </View>

         <View style={Styles.form}>
            {/* Name */}
            <View>
               <Text style={Styles.t1}>Name</Text>
               <TextInput
                  style={Styles.textInput}
                  placeholder="type name..."
               />
            </View>
            {/* E-Mail */}
            <View>
               <Text style={Styles.t1}>E-Mail</Text>
               <TextInput
                  style={Styles.textInput}
                  keyboardType="email-address"
                  placeholder="type e-mail..."
               />
            </View>
            {/* Phone Number */}
            <View>
               <Text style={Styles.t1}>Phone Number</Text>
               <TextInput
                  style={Styles.textInput}
                  keyboardType="number-pad"
                  placeholder="type number..."
               />
            </View>
            {/* Gender */}
            <View style={Styles.genderCont}>
               <Text style={Styles.t1}>Gender</Text>
               <View style={Styles.radioGroup}>
                  <View style={Styles.radioButton}>
                     <RadioButton.Android
                        value="option1"
                        status={selectedValue === 'option1' ?
                           'checked' : 'unchecked'}
                        onPress={() => setSelectedValue('option1')}
                        color="#007BFF"
                     />
                     <Text style={Styles.radioLabel}>
                        Male
                     </Text>
                  </View>

                  <View style={Styles.radioButton}>
                     <RadioButton.Android
                        value="option2"
                        status={selectedValue === 'option2' ?
                           'checked' : 'unchecked'}
                        onPress={() => setSelectedValue('option2')}
                        color="#007BFF"
                     />
                     <Text style={Styles.radioLabel}>
                        Female
                     </Text>
                  </View>

                  <View style={Styles.radioButton}>
                     <RadioButton.Android
                        value="option3"
                        status={selectedValue === 'option3' ?
                           'checked' : 'unchecked'}
                        onPress={() => setSelectedValue('option3')}
                        color="#007BFF"
                     />
                     <Text style={Styles.radioLabel}>
                        Others
                     </Text>
                  </View>
               </View>
            </View>
            <View>
               <Text style={Styles.t1}>How did you hear about this?</Text>
               <View style={Styles.checkCont}>
                  <View style={Styles.checkbox}>
                     <CheckBox
                        onCheckColor="red"
                        onFillColor="red"
                        disabled={false}
                        value={toggleCheckBox}
                        onValueChange={(newValue) => setToggleCheckBox(newValue)}
                     />
                     <Text style={Styles.checkText}>LinkedIn</Text>
                  </View>
                  <View style={Styles.checkbox}>
                     <CheckBox
                        disabled={false}
                        value={toggleCheckBox}
                        onValueChange={(newValue) => setToggleCheckBox(newValue)}
                     />
                     <Text style={Styles.checkText}>Friends</Text>
                  </View>
                  <View style={Styles.checkbox}>
                     <CheckBox
                        disabled={false}
                        value={toggleCheckBox}
                        onValueChange={(newValue) => setToggleCheckBox(newValue)}
                     />
                     <Text style={Styles.checkText}>Job Portal</Text>
                  </View>
                  <View style={Styles.checkbox}>
                     <CheckBox
                        disabled={false}
                        value={toggleCheckBox}
                        onValueChange={(newValue) => setToggleCheckBox(newValue)}
                     />
                     <Text style={Styles.checkText}>Others</Text>
                  </View>
               </View>
            </View>
         </View>



         <View style={{ marginTop: 100 }}>
            <TouchableOpacity
               onPress={() => navigation.navigate('SignIn')}
            >
               <Text style={Styles.text}>Go to Sign-In</Text>
            </TouchableOpacity>
            <TouchableOpacity
               onPress={() => navigation.navigate('Dashboard')}
            >
               <Text style={Styles.text}>Go to Dashboard</Text>
            </TouchableOpacity>
         </View>
      </View>
   );

};

export default Home;
