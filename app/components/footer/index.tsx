import React from 'react';
import { Text, View } from 'react-native';
import {commonStyles as stylesCommon} from '@app/styles/common';
import IconGitHub from '@app/assets/icons/github.svg';
import {styles} from './styles';
function Index() {
    const commonStyles = stylesCommon(); 

    return (
       <View style={styles.content}>
            <View style={styles.poweredby}>
                <Text style={[commonStyles.txt_p_regular_bold, styles.text]}>
                    Powered by 
                </Text>
                <IconGitHub />
                <Text style={[commonStyles.txt_p_regular_bold, styles.text]}>
                     Carlos Cardenas
                </Text>
                
            </View>
       </View>
    );
}

export default Index;

