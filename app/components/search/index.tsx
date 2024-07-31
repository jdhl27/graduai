import React, {useState} from 'react';
import {Text, View, Keyboard} from 'react-native';
import {styles} from './styles';
import Input from '@app/components/forms/input';
import Search from '@app/assets/icons/search.svg';
import {commonStyles as stylesCommon} from '@app/styles/common';
import {useSearch} from '@app/hooks/useSearch';
import Buttom from '@app/components/buttom';
import {users} from '@app/redux/slices/users/types';
import {store} from '@app/redux/store';
import showToast from '@app/helpers/showToast';

const Index: React.FC = () => {
    const [search, setSearch] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const commonStyles = stylesCommon();
    
    const SubmitSearch = async () =>{
        try{
            if (search.length < 4) {
                throw new Error('Search text must be at least 4 characters.')
            }
            if (search.toLowerCase() === 'doublevpartners') {
                throw new Error('Search for "doublevpartners" is not allowed.');
            }
            setLoading(true);
            
            const {items} = await useSearch(search);
            store.dispatch(users(items.slice(0, 10)));
            Keyboard.dismiss();
            setLoading(false);
        } catch (error: any) {
            showToast('error', 'Error', error.message || 'An error occurred during the search.');
            setLoading(false);
        }
    }

    return  <View 
                style={styles.content}
            >
                <Text style={[commonStyles.txt_neutral, styles.text]}>Search</Text>
                <Text style={[commonStyles.txt_neutral_light, styles.text]}>
                    <Text style={[commonStyles.txt_neutral_light, styles.text]}>
                        for users <></>
                    </Text>
                    <Text style={
                        [
                            commonStyles.txt_neutral_light, 
                            styles.text,
                            styles.secondText
                        ]
                    }>
                        from Github
                    </Text>
                </Text>

                <View style={styles.contentInput}>
                    <View style={styles.input}>
                        <Input 
                            placeholder='Search' 
                            value={search}
                            onChangeText={setSearch}
                        />
                    </View>

                    <View style={styles.buttom}>
                        <Buttom 
                            Icon={Search}
                            onSubmit={SubmitSearch}
                            loading={loading}
                        />
                    </View>
                    
                </View>
            </View>
    
};

export default React.memo(Index);
