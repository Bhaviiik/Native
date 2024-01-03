import React from 'react';
// import {} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import SignUp from '../Modules/SignUp';
import Dashboard from '../Modules/Dashboard';
import SignIn from '../Modules/SignIn';


const Routes = () => {
   const Stack = createNativeStackNavigator();
   return (
      <NavigationContainer>
         <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen name="SignIn" component={SignIn} />
         </Stack.Navigator>
      </NavigationContainer>
   );
};

export default Routes;
