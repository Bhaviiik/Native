import React from 'react';
// import {} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from '../Modules/Home';


const Routes = () => {
   const Stack = createNativeStackNavigator();
   return (
      <NavigationContainer>
         <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home} />
         </Stack.Navigator>
      </NavigationContainer>
   );
};

export default Routes;
