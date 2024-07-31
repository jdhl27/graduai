import themes from '@app/themes';
import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');
export const styles = StyleSheet.create({
  container: {
    height: '100%',
    position: 'relative',
    zIndex: 100,
  },
  contentForm: {
    width: '100%',
  },
  containerHaveCode: {
    top: 0,
    left: 0,
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
    position: 'absolute',
    backgroundColor: 'white',
    width: width,
    height: height,
  },
  titlehavecode: {
    fontSize: 30,
  },

  containerInputsHaveCode: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginVertical: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: themes.colors.primary,
    borderRadius: 5,
    width: '20%',
    textAlign: 'center',
    fontSize: 20,
    paddingVertical: 10,
  },
  contentEllipse: {
    position: 'absolute',
    zIndex: 999,
    right: 0,
    bottom: -240,
  },
  ellipse: {
    width: 100,
    resizeMode: 'contain',
  },
});
