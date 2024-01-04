/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import {
   Text,
   TouchableOpacity,
   View,
   ScrollView,
   Image,
   TextInput,
} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

import Styles from '../Styles/Styles';
import { Icons, Colors } from '../Utils/Constants';

const data = [
   { label: 'A-Z', value: '1' },
   { label: ' Z-A', value: '2' },
   { label: 'Last modified', value: '3' },
   { label: 'Last Inserted', value: '4' },
];

const Home = ({ navigation }) => {
   const [value, setValue] = useState(null);

   return (
      <View style={Styles.main}>
         <View style={Styles.dashboardHeader}>
            <Text style={Styles.heading}>Dashboard</Text>
         </View>
         <View style={Styles.topCont}>
            <View>
               <TextInput
                  style={Styles.textInputSearch}
                  keyboardType="default"
                  placeholder="Search Here..." />
            </View>
            <View style={Styles.sortCont}>
               <Dropdown
                  style={Styles.dropdownFilter}
                  placeholderStyle={Styles.placeholderStyleFilter}
                  selectedTextStyle={Styles.selectedTextStyleFilter}
                  inputSearchStyle={Styles.inputSearchStyleFilter}
                  iconStyle={Styles.iconStyleFilter}
                  data={data}
                  search={false}
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  placeholder="Sort By"
                  value={value}
                  onChange={item => {
                     setValue(item.value);
                  }}
               />
            </View>
         </View>
         <View style={Styles.userCont}>
            <Text style={Styles.userText}>Users</Text>
         </View>
         <View style={Styles.viewStyleForLine} />

         <ScrollView>
            <View style={Styles.cardCont}>
               <TouchableOpacity style={Styles.userCard}>
                  <View style={Styles.detailsCont}>
                     <Text style={Styles.detailText}>Name: Miles Moralis</Text>
                     <Text style={Styles.detailText}>E-Mail: miles123@gmail.com</Text>
                     <Text style={Styles.detailText}>Numebr: 1234567899</Text>
                  </View>
                  <View style={Styles.iconCont}>
                     <TouchableOpacity>
                        <Image style={Styles.editIcon} source={Icons.edit} />
                     </TouchableOpacity>
                     <TouchableOpacity>
                        <Image style={Styles.deleteIcon} source={Icons.Delete} />
                     </TouchableOpacity>
                  </View>
               </TouchableOpacity>
            </View>
         </ScrollView>

         {/* Floating Button */}
         <TouchableOpacity
            style={Styles.addUserCont}
         >
            <Text style={Styles.addUserText}>Add User</Text>
         </TouchableOpacity>
      </View>
   );

};

export default Home;
