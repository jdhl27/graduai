import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    zIndex: 1,
  },
  contentForm: {
    width: '100%',
  },
  contentEllipse: {
    position: 'absolute',
    zIndex: 999,
    right: 0,
    top: -240,
  },
  ellipse: {
    width: 100,
    resizeMode: 'contain',
  },
});
