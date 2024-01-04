/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import {
   Text,
   TouchableOpacity,
   View,
   TextInput,
   StatusBar,
   FlatList,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { RadioButton } from 'react-native-paper';
import { Dropdown } from 'react-native-element-dropdown';

import Styles from '../Styles/Styles';
import { Icons, Colors } from '../Utils/Constants';
import { byHeight, byWidth } from '../Utils/Functions';

const initialState = {
   Linkedin: false,
   Friends: false,
   JobPortal: false,
   Others: false,
};

const data = [
   { label: 'Mumbai', value: '1' },
   { label: 'Pune', value: '1' },
   { label: 'Ahmedabad', value: '3' },
];

const data1 = [
   { label: 'Maharashtra', value: '1' },
   { label: 'Karnataka', value: '0' },
   { label: 'Gujarat', value: '3' },
];

const Home = ({ navigation }) => {
   const [selectedValue, setSelectedValue] = useState('option1');
   const [state, setState] = useState(initialState);
   const [toggleCheckBox, setToggleCheckBox] = useState(false);
   const [value, setValue] = useState(null);

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
            {/* Password */}
            <View>
               <Text style={Styles.t1}>Password</Text>
               <TextInput
                  style={Styles.textInput}
                  secureTextEntry={true}
                  placeholder="type here..."
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
                        color={Colors.blue}
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
                        color={Colors.blue}
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
                        color={Colors.blue}
                     />
                     <Text style={Styles.radioLabel}>
                        Others
                     </Text>
                  </View>
               </View>
            </View>
            <View style={{ marginVertical: byHeight(1) }}>
               <View style={{ marginLeft: byWidth(2) }}>
                  <Text style={Styles.t1}>How did you hear about this?</Text>
               </View>
               <View style={Styles.checkContMain}>
                  <View style={Styles.checkbox}>
                     <CheckBox
                        disabled={false}
                        value={state.Linkedin}
                        tintColors={{ true: Colors.blue, false: Colors.blue }}
                        onValueChange={(value) => setState({ ...state, Linkedin: value })}
                     />
                     <Text style={Styles.checkText}>LinkedIn</Text>
                  </View>
                  <View style={Styles.checkbox}>
                     <CheckBox
                        disabled={false}
                        value={state.Friends}
                        tintColors={{ true: Colors.blue, false: Colors.blue }}
                        onValueChange={(value) => setState({ ...state, Friends: value })}
                     />
                     <Text style={Styles.checkText}>Friends</Text>
                  </View>

                  <View style={Styles.checkbox}>
                     <CheckBox
                        disabled={false}
                        value={state.JobPortal}
                        tintColors={{ true: Colors.blue, false: Colors.blue }}
                        onValueChange={(value) => setState({ ...state, JobPortal: value })}
                     />
                     <Text style={Styles.checkText}>Job Portal</Text>
                  </View>
                  <View style={Styles.checkbox}>
                     <CheckBox
                        disabled={false}
                        value={state.Others}
                        tintColors={{ true: Colors.blue, false: Colors.blue }}
                        onValueChange={(value) => setState({ ...state, Others: value })}
                     />
                     <Text style={Styles.checkText}>Others</Text>
                  </View>
               </View>
            </View>
            <View style={Styles.dropdownContMain}>
               {/* City */}
               <View style={Styles.dropdownCont}>
                  <View>
                     <Text style={Styles.t1}>City</Text>
                  </View>
                  <Dropdown
                     style={Styles.dropdown}
                     placeholderStyle={Styles.placeholderStyle}
                     selectedTextStyle={Styles.selectedTextStyle}
                     inputSearchStyle={Styles.inputSearchStyle}
                     iconStyle={Styles.iconStyle}
                     data={data}
                     search={false}
                     maxHeight={200}
                     labelField="label"
                     valueField="value"
                     placeholder="Select item"
                     searchPlaceholder="Search..."
                     value={value}
                     onChange={item => {
                        setValue(item.value);
                     }}
                  />
               </View>
               {/* State */}
               <View style={Styles.dropdownCont}>
                  <View>
                     <Text style={Styles.t1}>State</Text>
                  </View>
                  <Dropdown
                     style={Styles.dropdown}
                     placeholderStyle={Styles.placeholderStyle}
                     selectedTextStyle={Styles.selectedTextStyle}
                     inputSearchStyle={Styles.inputSearchStyle}
                     iconStyle={Styles.iconStyle}
                     data={data1}
                     search
                     maxHeight={200}
                     labelField="label"
                     valueField="value"
                     placeholder="Select item"
                     searchPlaceholder="Search..."
                     value={value}
                     onChange={item => {
                        setValue(item.value);
                     }}
                  />
               </View>
            </View>

            <View style={Styles.saveCont}>
               <TouchableOpacity
                  style={Styles.saveButton}
               // onPress={() => navigation.navigate('Dashboard')}
               >
                  <Text style={Styles.saveText}>Sign-Up</Text>
               </TouchableOpacity>
            </View>
         </View>
         {/* Signin Option */}
         <View style={Styles.signInCont}>
            <Text style={Styles.signIntext}>Alread Have An Account? </Text>
            <TouchableOpacity
               onPress={() => navigation.navigate('SignIn')}
            >
               <Text style={Styles.text}>Sign-In</Text>
            </TouchableOpacity>
         </View>
         <View>
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
