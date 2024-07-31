import {StyleSheet} from 'react-native';
import themes from '@app/themes';
export const styles = StyleSheet.create({
  container: {},
  input: {
    width: '100%',
    height: 54,
    borderColor: '#E9E9F1',
    borderWidth: 1,
    paddingHorizontal: 10,
    color: themes.colors.grayDark,
    backgroundColor: themes.colors.white,
    borderRadius: 12,
    fontSize: 14,
  },

  contentIcon: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  labelerror: {
    fontSize: 12,
    color: 'red',
    marginTop: 5,
  },
  label: {
    color: '#161C2B',
  },
});
