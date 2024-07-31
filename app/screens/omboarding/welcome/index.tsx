import * as React from 'react';
import {Image, View, Text} from 'react-native';
import Layaut from '@app/components/layouts/content';
import Margin from '@app/components/shared/margin';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import {commonStyles as stylesCommon} from '@app/styles/common';
import Ellipses from '@app/components/ellipsesWelcome';
import Buttom from '@app/components/buttom';
import {styles} from './styles';

function Index() {
  const commonStyles = stylesCommon();
  const navigation = useNavigation<StackNavigationProp<any>>();

  return (
    <Layaut>
      <Ellipses />
      <View style={styles.container}>
        <View style={[styles.contentEllipse, {left: 50, top: -4, zIndex: 2}]}>
          <Image
            source={require('@app/assets/images/Ellipse5.png')}
            style={[styles.ellipse, {width: 190, zIndex: 3}]}
          />
        </View>
        <Image
          source={require('@app/assets/images/woman.png')}
          style={{
            width: 600,
            height: 400,
            resizeMode: 'contain',
            position: 'relative',
            zIndex: 4,
          }}
        />
        <Margin top={20} />
        <Text style={[commonStyles.txt_h1_bold, commonStyles.txt_center]}>
          ¡Bienvenido A GruaduAI!
        </Text>
        <Margin top={20} />
        <Text
          style={[commonStyles.txt_p_regular_light, commonStyles.txt_center]}>
          Tu Guía para un Futuro Brillante. Explora Carreras, Encuentra la
          Universidad Perfecta y Descubre Oportunidades de Becas.
        </Text>
        <Margin top={20} />
        <View
          style={{
            width: '100%',
            zIndex: 999,
          }}>
          <Buttom
            onSubmit={() => navigation.navigate('Intro', {})}
            label="Iniciar ahora"
            style="primary"
          />
        </View>
      </View>
    </Layaut>
  );
}

export default Index;
