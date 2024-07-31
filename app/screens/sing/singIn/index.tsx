import * as React from 'react';
import {Image, View, Text} from 'react-native';
import Layaut from '@app/components/layouts/content';
import LayautForm from '@app/components/layouts/forms';
import Buttom from '@app/components/buttom';
import Margin from '@app/components/shared/margin';
import Input from '@app/components/forms/input';
import Link from '@app/components/Link';
import {SingScreen} from '@app/types/navigation';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import {commonStyles as stylesCommon} from '@app/styles/common';
import {styles} from './styles';
import {useFormik} from 'formik';
import {validationSchemaSingIn} from '@app/validations/auth';

function Index() {
  const commonStyles = stylesCommon();
  const navigation = useNavigation<StackNavigationProp<SingScreen>>();

  const formik = useFormik({
    initialValues: {email: '', password: ''},
    validationSchema: validationSchemaSingIn,
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
              placeholder="Email"
              onChangeText={formik.handleChange('email')}
              value={formik.values.email}
              error={formik.errors.email}
            />

            <Margin top={20} />
            <Input
              onChangeText={formik.handleChange('password')}
              value={formik.values.password}
              placeholder="Contraseña"
              secureTextEntry
              error={formik.errors.password}
            />
            <Margin top={10} />
            <Link
              label="Recuperar contraseña"
              action={() => navigation.navigate('ForgotPassword', {})}
            />
            <Margin top={200} />
            <Buttom onSubmit={formik.handleSubmit} label="Iniciar Sesión" />
            <Margin top={20} />
            <Buttom
              onSubmit={() => navigation.navigate('SingUp', {})}
              label="Crear una cuenta"
              style="neutral"
            />
          </View>
        </LayautForm>
      </View>
    </Layaut>
  );
}

export default Index;
