import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
import themes from '@app/themes';

export const stylesInput = () => {
  const height = Dimensions.get('window').height;
  return StyleSheet.create({
    container: {
      marginVertical: 10,
      width: '100%',
    },
    input: {
      width: 400,
      height: 50,
      borderColor: themes.colors.primary,
      borderWidth: 1,
      paddingHorizontal: 10,
      color: themes.colors.primary,
      marginBottom: 10,
      borderRadius: 15,
    },

    contentDropDown: {
      width: '100%',
      height: 45,
      paddingHorizontal: 15,
      paddingVertical: 5,
      borderColor: themes.colors.primary,
      borderWidth: 1,
      borderRadius: 9,
    },

    chevron: {
      position: 'absolute',
      right: 20,
      top: 15,
    },
    placeholder: {
      color: themes.colors.inputPlaceholderColor,
      fontSize: 12,
    },

    centeredView: {
      flex: 1,
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      height: height - 100,
      width: '100%',
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      paddingHorizontal: 20,
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
    contentItems: {
      width: '100%',
    },

    itemsDropdown: {
      width: '100%',
      paddingVertical: 20,
      paddingHorizontal: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  });
};
