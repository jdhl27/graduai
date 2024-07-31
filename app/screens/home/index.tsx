import React from 'react';
import {Text, View} from 'react-native';
import Layout from '@app/components/layouts/content';
import GridImages from '@app/components/gridImages';
import {commonStyles as stylesCommon} from '@app/styles/common';
import Margin from '@app/components/shared/margin';
import Buttom from '@app/components/buttom';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';

function Index() {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const commonStyles = stylesCommon();

  return (
    <>
      <Layout showLogout={true}>
        <GridImages />
        <Margin top={60} />
        <Text style={[commonStyles.txt_h2, {fontSize: 30}]}>
          Encuentra Tu Perfil Profesional Ideal
        </Text>
        <Margin top={60} />
        <View style={styles.btncontent}>
          <Buttom
            onSubmit={() => navigation.navigate('QuizScreen', {})}
            label="Iniciar Test"
            style="primary"
          />
        </View>
      </Layout>
    </>
  );
}

export default Index;
