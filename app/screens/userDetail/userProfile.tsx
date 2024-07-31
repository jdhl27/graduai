import React from 'react';
import {ScrollView, Image, View, Text} from 'react-native'

import { styles } from './styles';
import UserIcon from '@app/assets/icons/user-plus.svg';
import GithubIcon from '@app/assets/icons/github.svg';
import HashIcon from '@app/assets/icons/hash.svg';
import {commonStyles as stylesCommon} from '@app/styles/common';
import Margin from '@app/components/shared/margin';
import {userDetailType} from '@app/types/hooks/useSearch';

type dataUserType = {
    dataUser: userDetailType | null;
}
function Index({dataUser}: dataUserType) {

    const commonStyles   = stylesCommon(); 

    return  <ScrollView style={styles.content}>
                <Image style={styles.avatar} source={{uri: dataUser?.avatar_url}} />
                <View style={styles.contentMetadata}>
                    <View style={styles.contenItemMetadata}>
                        <UserIcon />
                        <Margin bottom={10}/>
                        <Text style={[commonStyles.txt_neutral_light]}>{dataUser?.followers}</Text>
                    </View>

                    <View style={styles.contenItemMetadata}>
                        <GithubIcon stroke={'black'} />
                        <Margin bottom={10}/>
                        <Text style={[commonStyles.txt_neutral_light]}>{dataUser?.public_repos}</Text>
                    </View>

                    <View style={styles.contenItemMetadata}>
                        <HashIcon stroke={'black'} />
                        <Margin bottom={10}/>
                        <Text style={[commonStyles.txt_neutral_light]}>{dataUser?.id}</Text>
                    </View>
                </View>
            </ScrollView>
}

export default Index;