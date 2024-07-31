import React, { useState } from 'react';
import { View, Text, Image, Alert } from 'react-native';
import Layaut from '@app/components/layouts/content';
import LayautForm from '@app/components/layouts/forms';
import Buttom from '@app/components/buttom';
import Margin from '@app/components/shared/margin';
import Head from '@app/components/shared/head';
import { Input } from '@app/components/forms/';
import { commonStyles as stylesCommon } from '@app/styles/common';
import { useFormik } from 'formik';
import { styles } from './styles';

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

function Index() {
  const commonStyles = stylesCommon();

  const [loading, setLoading] = useState<boolean>(false);

  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      email: '',
      password: '',
    },
    onSubmit: async values => {
      if (loading) {
        return;
      }
      setLoading(true);

      try {
        const userCredential = await auth().createUserWithEmailAndPassword(
          values.email,
          values.password,
        );

        const user = userCredential.user;

        await firestore().collection('users').doc(user.uid).set({
          name: values.name,
          phone: values.phone,
          email: values.email,
        });

        setLoading(false);
        console.log('User account created & data saved in Firestore!');
      } catch (error: any) {
        setLoading(false);
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('That email address is already in use!');

        } else if (error.code === 'auth/invalid-email') {
          Alert.alert('That email address is invalid!');

        } else if (error.code === 'auth/weak-password') {
          Alert.alert('The given password is invalid');

        } else {
          console.error(error);
        }
      }
    },
  });

  return (
    <Layaut>
      <View style={[styles.contentEllipse]}>
        <Image
          source={require('@app/assets/images/Ellipse1.png')}
          style={styles.ellipse}
        />
      </View>
      <View style={styles.container}>
        <Head backButton={true} />

        <LayautForm>
          <Margin top={20} />
          <Text style={commonStyles.txt_h2_bold}>Crea tu cuenta</Text>

          <Margin top={20} />
          <View style={styles.contentForm}>
            <Input
              label="Nombres y Apellidos"
              onChangeText={formik.handleChange('name')}
              value={formik.values.name}
              error={formik.errors.name}
            />
            <Margin top={20} />
            <Input
              label="Email"
              inputType="email"
              onChangeText={formik.handleChange('email')}
              value={formik.values.email}
              error={formik.errors.email}
            />
            <Margin top={20} />
            <Input
              label="Telefono"
              onChangeText={formik.handleChange('phone')}
              value={formik.values.phone}
              error={formik.errors.phone}
            />
            <Margin top={20} />
            <Input
              onChangeText={formik.handleChange('password')}
              value={formik.values.password}
              label="Contraseña"
              secureTextEntry
              error={formik.errors.password}
            />
            <Margin top={40} />
            <Buttom
              onSubmit={formik.handleSubmit}
              label="Registrarme"
              loading={loading}
            />
            <Margin top={20} />
          </View>
        </LayautForm>
      </View>
    </Layaut>
  );
}

export default Index;
