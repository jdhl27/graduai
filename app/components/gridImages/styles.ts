import themes from '@app/themes';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  content: {
    backgroundColor: themes.colors.white,
    paddingTop: 20,
  },
  contentCards: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardYellow: {
    backgroundColor: themes.colors.yellow,
    width: 138,
    height: 130,
    borderRadius: 15,
    alignItems: 'center',
  },

  cardmagenta: {
    backgroundColor: themes.colors.magenta,
    width: 113,
    height: 112,
    borderTopLeftRadius: 33,
    borderRadius: 15,
    alignItems: 'center',
  },

  cardcian: {
    backgroundColor: themes.colors.cian,
    width: 151,
    height: 138,
    borderRadius: 15,
    alignItems: 'center',
  },

  cardcianlight: {
    backgroundColor: themes.colors.cianlight,
    width: 151,
    height: 138,
    borderRadius: 15,
    alignItems: 'center',
  },

  image: {
    width: 130,
    height: 130,
    position: 'absolute',
    bottom: 0,
  },
});
