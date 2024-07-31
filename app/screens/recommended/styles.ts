import {StyleSheet, Platform} from 'react-native';
import themes from '@app/themes';

export const styles = StyleSheet.create({
  btncontent: {
    width: '40%',
    zIndex: 999,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F3F3F3',
    height: 46,
    borderRadius: 15,
    paddingHorizontal: 20,
    marginVertical: 10,
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

  card: {
    backgroundColor: themes.colors.primary,
    justifyContent: 'center',
    height: 213.54,
    padding: 30,
    borderRadius: 30,
  },
  imagebeca: {
    width: '100%',
    height: 50,
    resizeMode: 'contain',
  },

  contentbecas: {
    flexDirection: 'row',
  },
  cardBeca: {
    backgroundColor: 'white',
    marginHorizontal: 10,
    borderRadius: 15,
    padding: 30,
    width: 200,
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

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
