import auth from '@react-native-firebase/auth';
import {ToastAndroid} from 'react-native';
import STRINGS from '../constants';

const firebaseLogin = async (username: string, password: string) => {
  return auth()
    .signInWithEmailAndPassword(
      `${username}imagecollection3@gmail.com`,
      password,
    )
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        ToastAndroid.show(STRINGS.emailAlreadyInUse, ToastAndroid.SHORT);
      }

      if (error.code === 'auth/invalid-email') {
        ToastAndroid.show(STRINGS.invalidEmail, ToastAndroid.SHORT);
      }

      ToastAndroid.show(STRINGS.emailOrPasswordIncorrect, ToastAndroid.SHORT);
    });
};

export {firebaseLogin};
