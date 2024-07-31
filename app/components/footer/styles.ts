
import {StyleSheet} from 'react-native';
import themes from '@app/themes';

export const styles = StyleSheet.create({
    content: {
        zIndex: 100,
        backgroundColor: themes.colors.black,
        flexDirection: "row",
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingVertical: 15,
        alignItems: 'center'
    },

    text: {
        color: 'white',
        marginHorizontal: 10
    },
    poweredby: {
        flexDirection: 'row',
        alignItems: 'center'
    },
   
});
