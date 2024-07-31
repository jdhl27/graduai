import React from 'react';
import {Text, View, Image, ScrollView} from 'react-native';
import Layout from '@app/components/layouts/content';
import {commonStyles as stylesCommon} from '@app/styles/common';
import Margin from '@app/components/shared/margin';
import {RouteProp, useRoute} from '@react-navigation/native';
import {DashboardStack} from '@app/types/navigation';
import {becas} from '@app/assets/data/becas';
import {styles} from './styles';

function Index() {
  const route = useRoute<RouteProp<DashboardStack, 'UniversityScreen'>>();
  const {item} = route.params;

  const commonStyles = stylesCommon();

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
        <View
          style={[
            {
              position: 'absolute',
              height: '100%',
              right: -10,
              bottom: 0,
              zIndex: 1,
            },
          ]}>
          <Image
            source={require('@app/assets/images/Ellipse1.png')}
            style={[{width: 80, resizeMode: 'contain', zIndex: 3}]}
          />
        </View>
        <View style={{zIndex: 999}}>
          <Margin top={20} />

          <View style={styles.card}>
            <Text
              style={[
                commonStyles.txt_h2_bold,
                commonStyles.txt_center,
                {fontSize: 20},
              ]}>
              {item.NOMBRE_INSTITUCION}
            </Text>
            <Margin top={5} />
            <Text
              style={[
                commonStyles.txt_medium,
                ,
                commonStyles.txt_center,
                {fontSize: 13},
              ]}>
              Programa: {item.PROGRAMA.toLowerCase()}
            </Text>
            <Margin top={20} />
            <Margin top={10} />
            <View>
              <Text style={[commonStyles.txt_medium, {fontSize: 13}]}>
                Valor de matricula: {item.COSTO}
              </Text>
              <Margin top={10} />
              <Text style={[commonStyles.txt_medium, {fontSize: 13}]}>
                Departamento: Antioquia
              </Text>
              <Margin top={10} />
              <Text style={[commonStyles.txt_medium, {fontSize: 13}]}>
                Municipio: {item.MUNICIPIO_OFERTA_PROGRAMA}
              </Text>
            </View>
          </View>

          <Margin top={40} />

          <Text style={[commonStyles.txt_h2, {fontSize: 20}]}>
            Programas de becas a los que podrías aplicar según tu perfil
          </Text>

          <Margin top={20} />

          <View style={styles.contentbecas}>
            <ScrollView horizontal style={{paddingVertical: 10}}>
              {becas.map((item, key) => (
                <Becas data={item} key={key} />
              ))}
            </ScrollView>
          </View>
        </View>
      </Layout>
    </>
  );
}

export default Index;
