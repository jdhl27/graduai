import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import ChartIcon from '@app/assets/icons/bar-chart-2.svg';
import {styles} from './styles';
import Modal from './modal';
import {AppStateType} from '@app/redux/store';
import {useSelector} from 'react-redux';

function Index() {
    const [modalVisible, setModalVisible] = useState(false);
    const {users} = useSelector((state: AppStateType) => state.usersSlice);

    return (
       <>
        {users.length > 0 &&
            <TouchableOpacity 
                onPress={() => setModalVisible(true)} 
                style={styles.btn}>
                <ChartIcon stroke={'white'}/>
            </TouchableOpacity>
        }
          {modalVisible &&
            <Modal 
                dataUsers={users}
                modalVisible={modalVisible} 
                setModalVisible={setModalVisible} />
          }
          
       </>
    );
}

export default Index;

