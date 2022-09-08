import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../screen/HomeScreen';
import {Upload} from '../screen/Upload';
import {Restyle} from '../screen/Restyle';
import DarkModeScreen from '../screen/DarkModeScreen';
import {SettingScreen} from '../screen/SettingScreen';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Upload" component={Upload} />
        <Stack.Screen name="Restyle" component={Restyle} />
        <Stack.Screen name="DarkModeScreen" component={DarkModeScreen} />
        <Stack.Screen name="SettingScreen" component={SettingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
