import {DefaultTheme} from '@react-navigation/native';

const themes = {
  ...DefaultTheme,
  colors: {
    white: '#ffffff',
    black: '#000000',
    gray: '#eeeeee',
    primary: '#4E74F9',
    seconday: '#13aa9c',
    grayDark: '#2C2C2C',
    yellow: '#F9D048',
    magenta: '#F78181',
    cian: '#02B1EE',
    cianlight: '#01B6CB',
    inputPlaceholderColor: '#9aa0a6',
  },
  font: {
    inter: {
      bold: 'Inter-Black',
      light: 'Inter-Light',
      regular: 'Inter-Regular',
      medium: 'Inter-Medium',
    },
    size: {
      xsmall: 9,
      msmall: 10,
      small: 12,
      normal: 14,
      neutral: 16,
      medium: 18,
      lmedium: 20,
      large: 24,
      mlarge: 28,
      nlarge: 30,
      hlarge: 48,
      xlarge: 35,
      xlargebig: 96,
    },
  },
  layoutPaddigHorizontal: {
    paddingHorizontal: 30,
  },
};
export default themes;
