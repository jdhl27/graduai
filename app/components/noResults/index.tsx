import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import {commonStyles as stylesCommon} from '@app/styles/common';

const Index = () => {
    const commonStyles = stylesCommon();
    return  <View style={styles.contentNoResults}>
                <Text style={[
                    commonStyles.txt_neutral_light,
                    styles.textNoResults
                ]}>No results found</Text>
            </View>
};

export default React.memo(Index);
