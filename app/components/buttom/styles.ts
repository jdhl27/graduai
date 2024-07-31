import {StyleSheet, Platform} from 'react-native';
import themes from '@app/themes';
export const styles = StyleSheet.create({
  button: {
    borderRadius: 12,
    padding: 15,
    width: '100%',
  },
  buttonPrimary: {
    backgroundColor: themes.colors.primary,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.24, // Cambiado de 0.3 a 0.24 para reflejar 0x3D en hexadecimal
        shadowRadius: 2,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  buttonSecondary: {
    backgroundColor: themes.colors.white,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.24, // Cambiado de 0.3 a 0.24 para reflejar 0x3D en hexadecimal
        shadowRadius: 2,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  buttonNeutral: {
    borderWidth: 1,
    borderColor: themes.colors.primary,
  },
  text: {
    textAlign: 'center',
    color: themes.colors.white,
  },
  contentIcon: {
    alignSelf: 'center',
  },
});
