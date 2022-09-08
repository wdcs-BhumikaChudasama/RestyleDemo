import React from 'react';
import {Text, View} from 'react-native';
import {BoxTheme, TextTheme, Theme} from '../Theme/Default';
import {
  createVariant,
  createRestyleComponent,
  VariantProps,
  createRestyleFunction,
} from '@shopify/restyle';
import {CustomTheme} from '../Theme/CustomTheme';

export const Restyle = () => {
  const transparency = createRestyleFunction({
    property: 'transparency',
    styleProperty: 'opacity',
    transform: ({value}: {value: number}) => 1 - value,
  });

  const TransparentComponent = createRestyleComponent([transparency]);

  const variant = createVariant<Theme>({
    themeKey: 'cardVariants',
    defaults: {
      // margin: {
      //   phone: 's',
      // },
      backgroundColor: 'cardRegularBackground',
    },
  });

  const Card = createRestyleComponent<
    VariantProps<Theme, 'cardVariants'>,
    Theme
  >([variant]);

  return (
    <>
      <TextTheme variant="title" style={{paddingTop: 20}}>
        Find Your OutFit
      </TextTheme>
      <TextTheme variant="body" style={{paddingTop: 10}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </TextTheme>
      <Card variant="elevated" style={{margin: 20, height: 50}}></Card>
      <BoxTheme
        style={{margin: 20, height: 50, backgroundColor: 'green'}}></BoxTheme>
      <Card variant="elevated" style={{margin: 20, height: 50}}></Card>
      <TransparentComponent transparency={0.5}>
        <TextTheme variant="title2" style={{paddingTop: 20}}>
          Custom Restyle Functions
        </TextTheme>
      </TransparentComponent>

      <Card variant="elevated">
        <Text> Lorem ipsum dolor</Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod
        </Text>
      </Card>
    </>
  );
};
