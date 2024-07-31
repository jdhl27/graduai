import {StyleSheet} from 'react-native';
import themes from '@app/themes';

export const styles = StyleSheet.create({
  content: {
    zIndex: -1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btn: {
    marginTop: 30,
    marginLeft: 30,
  },
  backText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
  },

  backButton: {
    borderRadius: 5,
    textAlign: 'center',
  },
  textBack: {
    color: themes.colors.primary,
    alignSelf: 'center',
  },
  textBackRed: {
    color: themes.colors.white,
    alignSelf: 'center',
    fontSize: 20,
  },
});
