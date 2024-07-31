import {StyleSheet} from 'react-native';
import themes from '@app/themes';

export const stylesLayout = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    content: {
      paddingTop: 20,
      paddingHorizontal: 30,
      backgroundColor: 'white',
    },
    backButtonContent: {
      position: 'absolute',
      bottom: 20,
      width: '90%',
      alignSelf: 'center',
      textAlign: 'center',
    },
    backButton: {
      backgroundColor: themes.colors.white,
      borderRadius: 5,
      textAlign: 'center',
      padding: 10,
    },
    textBack: {
      color: themes.colors.black,
      alignSelf: 'center',
    },
    text: {
      color: 'white',
    },
    logout: {
      width: 35,
      height: 35,
      zIndex: 999,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      right: 10,
      top: 0,
      backgroundColor: themes.colors.magenta,
      borderRadius: 100,
    },
  });
};
