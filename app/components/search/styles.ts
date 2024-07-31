
import {StyleSheet} from 'react-native';
import themes from '@app/themes';
export const styles = StyleSheet.create({
    content: {
        ...themes.layoutPaddigHorizontal,
        backgroundColor: themes.colors.primary,
        paddingBottom: 40,
        borderBottomEndRadius: 30,
        borderBottomLeftRadius: 30,
    },
    text: {
        color: themes.colors.white,
        fontSize: 20
    },
    secondText: {
        color: themes.colors.seconday
    },
    contentInput: {
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
    },
    input: {
        width: '80%'
    },
    buttom: {
        width: '18%'
    }
});
