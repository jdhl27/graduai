
import {StyleSheet} from 'react-native';
import themes from '@app/themes';

export const styles = StyleSheet.create({
    btn: {
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: themes.colors.seconday,
        position: 'absolute',
        right: 10,
        bottom: 20,
        width: 50,
        height: 50,
        alignItems: 'center',
        borderRadius: 60
    },
});
