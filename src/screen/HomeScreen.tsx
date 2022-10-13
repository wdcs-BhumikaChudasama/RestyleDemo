import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';

import {useResponsiveProp} from '@shopify/restyle';
import {TextTheme, Theme} from '../Theme/Default';
import {ButtonComponents} from '../Components/ButtonComponent';
import {Switch} from 'react-native';

interface darkModeProps {
  isDarkMode: boolean;
  onPress: (isDarkModeEnable: boolean) => void;
}

export const HomeScreen = ({
  label,
  isLoading,
  color = {phone: 'purple'},
  margin,
  isDarkMode,
  onPress,
  ...props
}: Props) => {
  const navigation = useNavigation();

  // Will be 'purple' on phone and 'blue' on tablet
  const textColorProp = useResponsiveProp(color);

  // Can safely perform logic with the extracted value
  const bgColor1 =
    textColorProp === 'purple' ? 'lightPurple' : 'cardRegularBackground';
  const bgColor2 = textColorProp === 'purple' ? 'lightPurple' : 'elevated';
  const bgColor3 = textColorProp === 'purple' ? 'lightPurple' : 'ViewOutlet';

  function movetoUploadScreen() {
    navigation.navigate('Upload');
  }

  function movetoRestyleScreen() {
    navigation.navigate('Restyle');
  }

  function isDarkModeEnable() {
    navigation.navigate('DarkModeScreen');
  }
  function moveToSettingScreen() {
    navigation.navigate('SettingScreen');
  }

  return (
    <>
      <ButtonComponents
        title={'DarkMode'}
        onPressButton={isDarkModeEnable}
        buttonBg={'cardRegularBackground'}
        buttonStyle={{margin: 40}}
        textStyle={{margin: 20, color: 'white', textAlign: 'center'}}
      />

      <ButtonComponents
        title={'UploadScreen'}
        onPressButton={movetoUploadScreen}
        buttonBg={'elevated'}
        buttonStyle={{margin: 40, marginTop: 10}}
        textStyle={{margin: 20, color: 'white', textAlign: 'center'}}
      />

      <ButtonComponents
        title={'Restyle Screen'}
        onPressButton={movetoRestyleScreen}
        buttonBg={bgColor3}
        buttonStyle={{margin: 40}}
        textStyle={{margin: 20, color: 'white', textAlign: 'center'}}
      />

      <ButtonComponents
        title={'Setting Screen'}
        onPressButton={moveToSettingScreen}
        buttonBg={'blue'}
        buttonStyle={{margin: 40}}
        textStyle={{margin: 20, color: 'white', textAlign: 'center'}}
      />
    </>
  );
};
