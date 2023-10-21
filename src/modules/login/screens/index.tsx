import useLogin from '../hooks';
import LoginView from '../views';

const LoginScreen = () => {
  const data = useLogin();

  return <LoginView {...data} />;
};

export default LoginScreen;
