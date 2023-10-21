import auth from '@react-native-firebase/auth';
import {useEffect, useState} from 'react';
import {fetchUserById} from '../firebase-services';

const useMainNavigator = () => {
  const [user, setUser] = useState<any>(null);
  const [type, setType] = useState<string>('initialising');

  function onAuthStateChanged(user: any) {
    if (user) {
      fetchUserById(user.email).then(querySnapshot => {
        if (querySnapshot.docs.length > 0) {
          setUser(querySnapshot.docs[0].data());
        }
      });

      setType('authenticated');
    } else {
      setType('unauthenticated');
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  return {
    user,
    setUser,
    type,
  };
};

export default useMainNavigator;
