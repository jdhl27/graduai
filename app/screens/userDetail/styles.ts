
import {Dimensions} from 'react-native'
import {StyleSheet} from 'react-native';
import themes from '@app/themes';

const height = Dimensions.get("window").height
export const styles = StyleSheet.create({

    content: {
        ...themes.layoutPaddigHorizontal,
        backgroundColor: themes.colors.white,
        height
    },
    contentError: {
        ...themes.layoutPaddigHorizontal
    },
    avatar: {
        marginTop: 50,
        alignSelf: 'center',
        width: 300,
        height: 300,
        resizeMode: "cover",
        borderRadius: 900
    },

    contentMetadata: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },

    contenItemMetadata: {
        flexDirection: 'column',
        alignItems: 'center'
    }
});
