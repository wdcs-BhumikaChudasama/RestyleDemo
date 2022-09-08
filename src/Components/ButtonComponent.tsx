import {createBox} from '@shopify/restyle';
import React from 'react';
import {TextStyle, TouchableOpacity, TouchableOpacityProps, ViewStyle} from 'react-native';
import {TextTheme, Theme} from '../Theme/Default';

interface ButtonProps {
  title: string;
  onPressButton: () => void;
  buttonBg: string;
  buttonStyle: ViewStyle;
  textStyle: TextStyle;
}

export const ButtonComponents: React.FC<ButtonProps> = props => {
  const BaseButton = createBox<Theme, TouchableOpacityProps>(TouchableOpacity);

  return (
    <>
      <BaseButton
        style={props?.buttonStyle}
        backgroundColor={props?.buttonBg}
        onPress={props?.onPressButton}
        margin={'xl'}
        {...props}>
        <TextTheme variant="buttonViewText" style={props?.textStyle} >
          {props?.title}
        </TextTheme>
      </BaseButton>
    </>
  );
};
