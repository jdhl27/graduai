import firestore from '@react-native-firebase/firestore';
import {useSelector} from 'react-redux';
import {AppStateType} from '@app/redux/store';

export const useQuiz = () => {
  const {uid} = useSelector((state: AppStateType) => state.initLoad);
  const collection = 'users';
  const InsertItem = async (messages: any[]) => {
    try {
      firestore()
        .collection(collection)
        .doc(uid)
        .update({
          quiz: messages,
        })
        .then(() => {
          console.log('User updated!');
        });
    } catch (error) {
      console.log({error});
      throw error;
    }
  };

  const GetItems = async () => {
    try {
      const userDoc = await firestore().collection(collection).doc(uid).get();

      if (userDoc.exists) {
        const userData = userDoc.data();
        const quizData = userData?.quiz;
        if (quizData) {
          return quizData;
        } else {
          return [];
        }
      } else {
        throw new Error('Documento de usuario no encontrado');
      }
    } catch (error) {
      console.log({error});
      throw error;
    }
  };

  return {InsertItem, GetItems};
};
