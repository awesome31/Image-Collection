import firestore from '@react-native-firebase/firestore';

const fetchUserById = (email: string) =>
  firestore().collection('users').where('userId', '==', email).get();

export {fetchUserById};
