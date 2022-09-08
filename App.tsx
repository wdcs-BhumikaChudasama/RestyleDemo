/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {ThemeProvider} from '@shopify/restyle';
import React, {useState} from 'react';
import {Navigation} from './src/navigation/Navigation';
import {HomeScreen} from './src/screen/HomeScreen';
import {theme} from './src/Theme/Default';
import {Switch} from 'react-native';
import {Box, darkTheme, lightTheme, Text} from './src/Theme/CustomTheme';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <ThemeProvider theme={theme}>
      {/* <ThemeProvider theme={darkMode ? darkTheme : lightTheme}></ThemeProvider> */}
      <Navigation>
        <HomeScreen
          isDarkEnable={(isDarkMode: boolean) => {
            console.log(
              'log::::::::::::::::::::::::::::: isDarkMode--------------',
              isDarkMode,
            );
            setDarkMode(isDarkMode);
          }}
        />
      </Navigation>
    </ThemeProvider>
  );
};

export default App;
