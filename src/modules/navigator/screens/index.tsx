import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ROUTES from '../../../constants/routes';
import LoginScreen from '../../login/screens';
import StoreDetailScreen from '../../store-detail/screens';
import StoreListScreen from '../../store-list/screens';
import AuthContext from '../context';
import useMainNavigator from '../hooks';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  const authData = useMainNavigator();

  const renderNavigator = () => {
    if (authData.type === 'initialising') {
      return null;
    } else if (authData.type === 'authenticated' && authData.user) {
      return (
        <Stack.Navigator>
          <Stack.Screen
            name={ROUTES.STORE_LIST}
            component={StoreListScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={ROUTES.STORE_DETAIL}
            component={StoreDetailScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      );
    } else if (authData.type === 'unauthenticated') {
      return (
        <Stack.Navigator>
          <Stack.Screen
            name={ROUTES.LOGIN}
            component={LoginScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      );
    } else {
      return null;
    }
  };

  return (
    <AuthContext.Provider value={authData}>
      {renderNavigator()}
    </AuthContext.Provider>
  );
};

export default MainNavigator;
