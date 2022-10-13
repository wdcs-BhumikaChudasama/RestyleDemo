import {createBox, createText, ThemeProvider} from '@shopify/restyle';
import React, {useCallback, useState} from 'react';
import {
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Switch,
  TextInput,
  View,
} from 'react-native';
import {assets} from '../assets/assets';
import {ButtonComponents} from '../Components/ButtonComponent';
import {darktheme, TextTheme, theme, Theme} from '../Theme/Default';

export const SettingScreen = () => {
  const Box = createBox<Theme>();
  const [darkMode, setDarkMode] = useState(false);
  const [isAccountDetailsVisible, setIsAccountDetailsVisible] = useState(false);

  const getInAdvance = useCallback(() => {
    setIsAccountDetailsVisible(true);
  }, [isAccountDetailsVisible]);

  return (
    <ThemeProvider theme={darkMode ? darktheme : theme}>
      <ScrollView>
        <Box backgroundColor="mainBackground" style={{flex: 1}}>
          <TextTheme variant="body" margin="s" color="secondaryCardText">
            Dark Mode
          </TextTheme>
          <Box
            padding="s"
            margin="s"
            backgroundColor="secondaryCardBackground"
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              borderRadius: 8,
              borderWidth: 0.1,
              borderColor: 'secondaryCardBackground2',
            }}>
            <TextTheme variant="body" color="secondaryCardText">
              Dark Mode
            </TextTheme>

            <Switch
              value={darkMode}
              onValueChange={(value: boolean) => setDarkMode(value)}
            />
          </Box>
          <Box
            padding="s"
            margin="s"
            backgroundColor="secondaryCardBackground"
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              borderRadius: 8,
              borderWidth: 0.1,
              borderColor: 'secondaryCardBackground2',
            }}>
            <TextTheme variant="body" color="secondaryCardText">
              Profile
            </TextTheme>

            <Image
              source={assets.images.rightIcon}
              resizeMode={'center'}
              style={styles.imageContainer(darkMode ? 'white' : 'black')}
            />
          </Box>

          <Box
            padding="s"
            margin="l"
            backgroundColor="secondaryCardBackground"
            style={{
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
            <Box
              padding="l"
              ml="xl"
              backgroundColor="mainForeground"
              style={{
                width: 202,
                alignItems: 'center',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <TextTheme variant="cardText" color="primaryCardText">
                  850.04
                </TextTheme>
                <TextTheme variant="cardText2" color="lightGrey">
                  USD
                </TextTheme>
              </View>
              <TextTheme variant="cardText3" color="lightGrey">
                PNC Bank is checking your balance...
              </TextTheme>
            </Box>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Box
                padding="l"
                mt="m"
                backgroundColor="lightGrey"
                style={{width: 150}}>
                <TextTheme variant="buttonViewText" color="secondaryCardText">
                  $200
                </TextTheme>
              </Box>
              <Box
                padding="l"
                mt="m"
                backgroundColor="lightGrey"
                style={{width: 150}}>
                <TextTheme variant="buttonViewText" color="secondaryCardText">
                  $200
                </TextTheme>
              </Box>
            </View>
          </Box>
          <ButtonComponents
            title={'Get In Advance'}
            onPressButton={getInAdvance}
            buttonBg={'aquar'}
            buttonStyle={{margin: 20, marginLeft: 40, marginRight: 40}}
            textStyle={{
              margin: 20,
              color: 'white',
              textAlign: 'center',
              fontWeight: 'bold',
            }}
          />
          {isAccountDetailsVisible ? (
            <>
              <TextTheme variant="title" margin="s" color="secondaryCardText">
                Account Details
              </TextTheme>
              <Box
                padding="s"
                margin="s"
                backgroundColor="secondaryCardBackground"
                style={{
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}>
                <TextTheme variant="title" margin="s" color="secondaryCardText">
                  Account Number
                </TextTheme>
                <TextInput
                  style={{
                    backgroundColor: 'secondaryCardBackground',
                    color: 'secondaryCardText',
                    padding: 8,
                    borderWidth: 1,
                    margin: 8,
                    borderRadius: 8,
                  }}
                />

                <Box
                  mt="s"
                  padding="s"
                  backgroundColor="secondaryCardBackground"
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    borderRadius: 8,
                    borderWidth: 0.1,
                    borderColor: 'secondaryCardBackground2',
                  }}>
                  <TextTheme variant="body" color="secondaryCardText">
                    Dark Mode
                  </TextTheme>

                  <Switch
                    value={darkMode}
                    onValueChange={(value: boolean) => setDarkMode(value)}
                  />
                </Box>
                <Box mt="l" marginBottom="xl">
                  <TextTheme variant="title" color="secondaryCardText">
                    Bank Details
                  </TextTheme>
                </Box>
              </Box>

              {/* <Linking /> */}
            </>
          ) : null}
        </Box>
      </ScrollView>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  imageContainer: (color: string) => ({
    tintColor: color,
    height: 20,
    width: 20,
  }),
});
