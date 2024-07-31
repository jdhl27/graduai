import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {MarginProps} from '@app/types/components/margin';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import { styles } from './styles';
const Margin: React.FC<MarginProps> = () => {
    const navigation = useNavigation<StackNavigationProp<any>>();
    const {t} = useTranslation();
    
    return  <TouchableOpacity 
                style={styles.btn}
                onPress={()=> navigation.goBack()}>
                <Text style={styles.backText}>{t('back')}</Text>
            </TouchableOpacity>
    
};

export default React.memo(Margin);
