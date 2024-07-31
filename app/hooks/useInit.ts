import {useEffect} from 'react';
import {
  isFirstLoad,
  setIsAuth,
  setUid,
  setNameUser,
} from '@app/redux/slices/initLoad/types';
import {store} from '@app/redux/store';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const useInit = () => {
  useEffect(() => {
    const unsubscribeAuth = auth().onAuthStateChanged(async user => {
      if (user) {
        console.log('Sesión activa para el usuario:', user.uid);
        store.dispatch(setUid(user.uid));
        store.dispatch(setIsAuth(true));
        store.dispatch(isFirstLoad(false));
        try {
          const userDoc = await firestore()
            .collection('users')
            .doc(user.uid)
            .get();

          if (userDoc.exists) {
            const userData = userDoc.data();
            store.dispatch(setNameUser(userData?.name));
          } else {
            console.log(
              'No se encontraron datos para este usuario en Firestore',
            );
          }
        } catch (error) {
          console.error('Error al consultar Firestore:', error);
        }
      } else {
        console.log('No hay sesión activa');
        store.dispatch(setIsAuth(false));
        store.dispatch(isFirstLoad(false));
      }
    });
    return unsubscribeAuth;
  }, [auth]);
};
