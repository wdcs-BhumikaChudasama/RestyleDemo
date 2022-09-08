import {BaseTheme, createBox, createText, createTheme} from '@shopify/restyle';
export const theme = createTheme({
  colors: {
    mainBackground: '#EEE',
    mainForeground: '#111',

    primaryCardBackground: '#5A31F4',
    secondaryCardBackground: '#FFF',
    primaryCardText: '#FFF',
    secondaryCardText: '#111',
    secondaryCardBackground2: '#111',
    lightGrey: '#D3D3D3',

    primary: 'white',
    body: 'grey',
    body2: 'grey',
    title2: 'green',
    ViewOutlet: 'black',
    cardRegularBackground: 'red',
    elevated: 'green',
    black: '#0B0B0B',
    buttonViewText: 'red',
    blue: '#00008B',
    aquar: '#85b0bd',
  },
  spacing: {
    xs: 6,
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
    xxl: 50,
  },
  cardVariants: {
    ViewOutlet: {
      bg: 'red',
    },

    // CardView: {
    //   bg:
    // },

    elevated: {
      // padding: {
      //   phone: 's',
      // },
      shadowColor: 'primary',
      shadowOpacity: 0.2,
      shadowOffset: {width: 0, height: 5},
      shadowRadius: 15,
      elevation: 5,
    },
    //
    primary: {
      backgroundColor: 'white',
      opacity: 0.5,
      ml: 10,
    },
  },
  textVariants: {
    title: {
      fontSize: 18,
      textAlign: 'left',
      ml: 's',
    },
    body: {
      fontSize: 18,
      alignSelf: 'center',
      ml: 's',
    },
    title2: {
      fontSize: 26,
      textAlign: 'center',
    },
    buttonViewText: {
      fontSize: 16,
      textAlign: 'center',
      fontWeight: 'bold',
    },
    stitle: {
      fontSize: 18,
      textAlign: 'left',
    },
    cardText: {
      fontSize: 18,
      textAlign: 'left',
      ms: 's',
      fontWeight: 'bold',
    },
    cardText2: {
      fontSize: 11,
      ml: 'xs',
      mt: 'xs',
    },
    cardText3: {
      fontSize: 8,
      ml: 'xs',
      mt: 'xs',
    },
    cardDescriptionTextView: {
      m: 'l',
      bagroundColor: 'ViewOutlet',
      padding: 'xs',
    },
  },
  breakpoints: {},
});
export type Theme = typeof theme;
export const TextTheme = createText<Theme>();
export const BoxTheme = createBox<Theme>();

export const darktheme: Theme = {
  ...theme,
  colors: {
    ...theme.colors,
    mainBackground: '#111',
    mainForeground: '#FFF',

    secondaryCardBackground: '#333',
    secondaryCardText: '#FFF',
    secondaryCardBackground2: '#FFF',
    primaryCardText: '#111',
    lightGrey: '#111',
  },
  textVariants: {
    ...theme.textVariants,
  },
};
export type ThemeDark = typeof darktheme;
