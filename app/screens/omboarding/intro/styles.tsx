import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: '100%',
    zIndex: -11,
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
  young: {
    width: 513,
    height: 580,
    resizeMode: 'contain',
    position: 'absolute',
    bottom: 0,
    right: -100,
    zIndex: 4,
  },
  btncontent: {
    width: '100%',
    position: 'absolute',
    bottom: 10,
    zIndex: 999,
  },
  ornament: {
    position: 'absolute',
    width: 450,
    height: 450,
    left: -100,
    top: -100,

    zIndex: 100,
  },
});
