import * as yup from 'yup';

const validationSchemaSingIn = yup.object().shape({
  nombres: yup.string().required('Nombres requerida'),
  identificacion: yup.string().required('Cedula requerida'),
  telefono: yup.string().required('Telefono requerida'),
  email: yup.string().email('Email inválido').required('Email requerido'),
  password: yup.string().required('Contraseña requerida'),
});

const validationSchemaForgotPassword = yup.object().shape({
  identification: yup.string().required('Cedula requerido'),
});

export {validationSchemaSingIn, validationSchemaForgotPassword};
