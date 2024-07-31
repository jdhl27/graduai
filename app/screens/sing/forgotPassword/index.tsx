import * as React from 'react';
import {Image, View, Text} from 'react-native';
import Layaut from '@app/components/layouts/content';
import LayautForm from '@app/components/layouts/forms';
import Buttom from '@app/components/buttom';
import Margin from '@app/components/shared/margin';
import Input from '@app/components/forms/input';
import {SingScreen} from '@app/types/navigation';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import {commonStyles as stylesCommon} from '@app/styles/common';
import {useFormik} from 'formik';
import {validationSchemaForgotPassword} from '@app/validations/auth';
import {styles} from './styles';

function Index() {
  const commonStyles = stylesCommon();
  const navigation = useNavigation<StackNavigationProp<SingScreen>>();

  const formik = useFormik({
    initialValues: {identification: ''},
    validationSchema: validationSchemaForgotPassword,
    onSubmit: values => {
      console.log('Formulario enviado:', values);
    },
  });

  return (
    <Layaut>
      <View style={styles.container}>
        <LayautForm>
          <Image
            source={require('@app/assets/logos/isotipo.png')}
            style={{width: 200, height: 100, resizeMode: 'contain'}}
          />
          <Margin top={20} />
          <Text style={commonStyles.txt_h2_bold}>Bienvenido a Cirucrédito</Text>
          <Text style={commonStyles.txt_p_regular_light}>
            Financiamos tus Sueños
          </Text>

          <Margin top={20} />
          <View style={styles.contentForm}>
            <Input
              placeholder="Número de cedula"
              onChangeText={formik.handleChange('identification')}
              value={formik.values.identification}
              error={formik.errors.identification}
            />
            <Margin top={20} />
            <Buttom
              onSubmit={formik.handleSubmit}
              label="Recuperar Contraseña"
            />
            <Margin top={20} />
            <Buttom
              onSubmit={() => navigation.navigate('SingIn', {})}
              label="Login"
              style="neutral"
            />
          </View>
        </LayautForm>
      </View>
    </Layaut>
  );
}

export default Index;
