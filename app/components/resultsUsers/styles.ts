
import themes from '@app/themes';
import {Dimensions} from 'react-native'
import {StyleSheet} from 'react-native';

const height = Dimensions.get("window").height

export const styles = StyleSheet.create({
    content: {
        backgroundColor: themes.colors.white,
        height,
        paddingTop: 20,
        ...themes.layoutPaddigHorizontal
    }
});
