import * as React from 'react';
import {Image, View, Text} from 'react-native';
import Layaut from '@app/components/layouts/content';
import Margin from '@app/components/shared/margin';
import {SingScreen} from '@app/types/navigation';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import {commonStyles as stylesCommon} from '@app/styles/common';
import Buttom from '@app/components/buttom';
import Ellipses from '@app/components/ellipsesIntro';
import {styles} from './styles';

function Index() {
  const commonStyles = stylesCommon();
  const navigation = useNavigation<StackNavigationProp<SingScreen>>();

  return (
    <Layaut>
      <Ellipses />
      <Image
        source={require('@app/assets/images/Ornament.png')}
        style={styles.ornament}
      />
      <View style={styles.container}>
        <Text style={[commonStyles.txt_h1_bold]}>Descubre</Text>
        <Text style={[commonStyles.txt_h1_bold]}>Tu Pasión</Text>
        <Margin top={20} />
        <Text style={[commonStyles.txt_p_regular_light]}>
          Encuentra la Carrera de tus Sueños. Explora tus Intereses y
          Habilidades para un Futuro Profesional Gratificante.
        </Text>
        <Image
          source={require('@app/assets/images/young.png')}
          style={styles.young}
        />
        <Margin top={20} />
        <Margin top={20} />
        <View style={styles.btncontent}>
          <Buttom
            onSubmit={() => navigation.navigate('SingUp', {})}
            label="Siguiente"
            style="primary"
          />
        </View>
      </View>
    </Layaut>
  );
}

export default Index;
