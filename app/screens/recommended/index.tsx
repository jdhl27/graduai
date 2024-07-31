import React from 'react';
import {Text, View, TouchableOpacity, ScrollView, Image} from 'react-native';
import Layout from '@app/components/layouts/content';
import {commonStyles as stylesCommon} from '@app/styles/common';
import Margin from '@app/components/shared/margin';
import Buttom from '@app/components/buttom';
import Polygon from '@app/assets/icons/polygon.svg';
import {RouteProp, useRoute} from '@react-navigation/native';
import {DashboardStack} from '@app/types/navigation';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import {programs} from '@app/assets/data/programs';
import {becas} from '@app/assets/data/becas';
import {AppStateType} from '@app/redux/store';
import {useSelector} from 'react-redux';
import {styles} from './styles';

function Index() {
  const route = useRoute<RouteProp<DashboardStack, 'RecommendedScreen'>>();
  const navigation = useNavigation<StackNavigationProp<DashboardStack>>();
  const {options} = route.params;

  const {nameuser} = useSelector((state: AppStateType) => state.initLoad);

  const commonStyles = stylesCommon();

  const getInstitutions = async (termino: string) => {
    const terminosBusqueda = termino.toLowerCase().split(' ');

    const resultados = await programs.filter(universidad => {
      if (universidad && universidad.PROGRAMA) {
        const nombrePrograma = universidad.PROGRAMA.toLowerCase();
        return terminosBusqueda.every(termino =>
          nombrePrograma.includes(termino.toLowerCase()),
        );
      }
      return false;
    });

    navigation.navigate('InstituionsScreen', {institutions: resultados});
  };

  const Becas = ({data}: {data: any}) => {
    return (
      <View style={styles.cardBeca}>
        <Image
          source={require('@app/assets/images/sapiencia.png')}
          style={styles.imagebeca}
        />
        <Margin top={20} />
        <Text
          style={[
            commonStyles.txt_medium,
            ,
            commonStyles.txt_center,
            {fontSize: 13},
          ]}>
          {data.title}
        </Text>
      </View>
    );
  };

  return (
    <>
      <Layout>
        <Margin top={20} />
        <View style={styles.card}>
          <Text style={[commonStyles.txt_h2, commonStyles.txt_white]}>
            Hola
          </Text>
          <Text style={[commonStyles.txt_p_regular, commonStyles.txt_white]}>
            {nameuser}{' '}
          </Text>
          <Margin top={20} />
          <Text style={[commonStyles.txt_p_regular, commonStyles.txt_white]}>
            Estas son las recomendaciones que mejor se adaptan a tu perfil
          </Text>
          <Margin top={20} />
          <View style={styles.btncontent}>
            <Buttom
              onSubmit={() => navigation.navigate('Home')}
              label="Repetir test"
              style="secondary"
            />
          </View>
        </View>
        <Margin top={20} />
        <Text style={[commonStyles.txt_h2, {fontSize: 24}]}>
          Programas academicos
        </Text>

        <Margin top={30} />

        <ScrollView style={{padding: 10}}>
          {options.map((item, key) => (
            <TouchableOpacity
              key={key}
              onPress={() => [getInstitutions(item)]}
              style={styles.item}>
              <Text
                style={[commonStyles.txt_neutral, commonStyles.txt_capitalize]}>
                {item}
              </Text>
              <Polygon />
            </TouchableOpacity>
          ))}

          <Margin top={40} />
          <Text style={[commonStyles.txt_h2, {fontSize: 24}]}>
            Programas de becas
          </Text>

          <Margin top={20} />

          <View style={styles.contentbecas}>
            <ScrollView horizontal style={{paddingVertical: 10}}>
              {becas.map((item, key) => (
                <Becas data={item} key={key} />
              ))}
            </ScrollView>
          </View>
          <Margin top={400} />
        </ScrollView>
      </Layout>
    </>
  );
}

export default Index;
