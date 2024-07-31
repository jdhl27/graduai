import {StyleSheet, Platform} from 'react-native';

export const styles = StyleSheet.create({
  btncontent: {
    width: '100%',
    zIndex: 999,
  },
  item: {
    backgroundColor: '#F3F3F3',
    height: 46,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.4,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
});
