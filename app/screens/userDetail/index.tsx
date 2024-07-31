import React from 'react';
import {ActivityIndicator, View, Text} from 'react-native'
import Layout from '@app/components/layouts/content';
import Head from '@app/components/shared/head';
import {
    RouteProp,
    useRoute,
} from '@react-navigation/native';
import {UserDetailScreen} from '@app/types/navigation';
import {useUserDetail} from '@app/hooks/useUserDetail';
import { styles } from './styles';
import {commonStyles as stylesCommon} from '@app/styles/common';
import showToast from '@app/helpers/showToast';
import UserProfile from './userProfile';

function Index() {
    const commonStyles   = stylesCommon(); 
    const route = useRoute<RouteProp<UserDetailScreen, 'UserDetail'>>();
    const {userLogin} = route.params;

    const {data, loading, error} = useUserDetail(userLogin);

    if(error){
        showToast('error', 'Error', error.message || 'An error occurred during the search.');
    }

    return  <Layout colorBar='white' barStyle='dark-content' backgroundColor='white'>
                <View style={styles.content}>
                    <Head title={userLogin} backButton={true} />
                    {loading ? (
                        <ActivityIndicator />
                    ): error ? (
                    <View style={styles.contentError}>
                            <Text style={[commonStyles.txt_neutral_light]}>{error.message}</Text>
                    </View>
                    ): (
                        <UserProfile dataUser={data} />
                    )}
                </View>
            </Layout>   
}

export default Index;   