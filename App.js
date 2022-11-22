import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import TelaUm from './src/TelaUm';
import TelaDois from './src/TelaDois';


const Stack = createStackNavigator();

function MyStack(){
  return(
    <Stack.Navigator>
    <Stack.Screen name="TelaUm" component={TelaUm} />
    <Stack.Screen name="TelaDois" component={TelaDois} />
    </Stack.Navigator>



  );
}



export default function App() {
return(
  <NavigationContainer>
    <MyStack/>
  </NavigationContainer>

)

}
