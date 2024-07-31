import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {itemsType} from '@app/types/hooks/useSearch';
import {commonStyles as stylesCommon} from '@app/styles/common';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import {UserDetailScreen} from '@app/types/navigation';

type dataPropsType = {
    dataUser: itemsType
}
const Index = ({dataUser}: dataPropsType) => {
    const navigation = useNavigation<StackNavigationProp<UserDetailScreen>>();
    const commonStyles = stylesCommon();
    return  <TouchableOpacity 
                onPress={
                    () => navigation.navigate('UserDetail', {userLogin: dataUser.login})
                }
                style={styles.content}>
                <Image
                    source={{uri: dataUser.avatar_url}}
                    style={styles.avatar}
                />
                <View>
                    <Text style={commonStyles.txt_neutral}>{dataUser.login}</Text>
                    <Text style={commonStyles.txt_neutral_light}>#id {dataUser.id}</Text>
                </View>
                
            </TouchableOpacity>
    
};

export default React.memo(Index);