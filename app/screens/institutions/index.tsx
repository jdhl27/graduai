import React, {useEffect, useState} from 'react';
import {Text, View, TouchableOpacity, Image, FlatList} from 'react-native';
import Layout from '@app/components/layouts/content';
import {commonStyles as stylesCommon} from '@app/styles/common';
import Margin from '@app/components/shared/margin';
import Polygon from '@app/assets/icons/polygon.svg';
import {RouteProp, useRoute} from '@react-navigation/native';
import {DashboardStack} from '@app/types/navigation';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';

function Index() {
  const route = useRoute<RouteProp<DashboardStack, 'InstituionsScreen'>>();
  const navigation = useNavigation<StackNavigationProp<DashboardStack>>();
  const {institutions} = route.params;

  const commonStyles = stylesCommon();

  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    function sortByInstitution(array: any, targetInstitution: any) {
      // Ordenar el array moviendo el objeto con la institución específica al principio
      array.sort((a: any, b: any) => {
        if (a.NOMBRE_INSTITUCION === targetInstitution) return -1; // Poner 'targetInstitution' primero
        if (b.NOMBRE_INSTITUCION === targetInstitution) return 1; // Poner 'targetInstitution' primero
        return 0; // Mantener el orden original para otros elementos
      });

      return array;
    }

    const targetInstitution = 'TECNOLOGICO DE ANTIOQUIA';
    const sortedData = sortByInstitution(institutions, targetInstitution);
    setData(sortedData);
    console.log({sortedData});
  }, []);
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
          <Text
            style={[
              commonStyles.txt_h2,
              commonStyles.txt_center,
              {fontSize: 24},
            ]}>
            Instituciones que ofrecen el programa academico:{' '}
            {institutions?.[0]?.PROGRAMA}
          </Text>

          <Margin top={30} />

          <FlatList
            data={data}
            style={{paddingHorizontal: 10}}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => navigation.navigate('UniversityScreen', {item})}
                style={styles.item}>
                <View
                  style={{
                    width: '90%',
                  }}>
                  <View>
                    <Text
                      numberOfLines={2}
                      style={[commonStyles.txt_h1_bold, {fontSize: 12}]}>
                      {item.NOMBRE_INSTITUCION}
                    </Text>
                  </View>
                </View>
                <Polygon />
              </TouchableOpacity>
            )}
            keyExtractor={item => item.id}
            ListFooterComponent={() => <Margin top={300} />}
          />
        </View>
      </Layout>
    </>
  );
}

export default Index;
