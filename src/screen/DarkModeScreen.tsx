import {createBox, createText, ThemeProvider} from '@shopify/restyle';
import React, {useState} from 'react';
import {Switch} from 'react-native';
import {darkTheme} from '../Theme/CustomTheme';
import {Theme, theme} from '../Theme/Default';

export const Box = createBox<Theme>();
export const Text = createText<Theme>();

const DarkModeScreen = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    // <ThemeProvider theme={theme}>
    <ThemeProvider theme={darkMode ? darkTheme : theme}>
      <Box padding="m" backgroundColor="mainBackground" flex={1}>
        <Box
          backgroundColor="primaryCardBackground"
          margin="s"
          padding="m"
          flexGrow={1}>
          <Text variant="body" color="primaryCardText">
            Primary Card
          </Text>
        </Box>
        <Box
          backgroundColor="secondaryCardBackground"
          margin="s"
          padding="m"
          flexGrow={1}>
          <Text variant="body" color="secondaryCardText">
            Secondary Card
          </Text>
        </Box>
        <Box marginTop="m">
          <Switch
            value={darkMode}
            onValueChange={(value: boolean) => setDarkMode(value)}
          />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default DarkModeScreen;
