import {useState} from 'react';
import {firebaseLogin} from '../firebase-services';

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const onUsernameChange = (text: string) => {
    setUsername(text);
  };

  const onPasswordChange = (text: string) => {
    setPassword(text);
  };

  const onLoginPress = () => {
    setLoading(true);

    firebaseLogin(username, password).finally(() => {
      setLoading(false);
    });
  };

  const onEyePress = () => {
    setShowPassword(!showPassword);
  };

  return {
    username,
    password,
    onUsernameChange,
    onPasswordChange,
    onLoginPress,
    loading,
    onEyePress,
    showPassword,
  };
};

export default useLogin;
