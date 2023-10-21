import {NavigationContainer} from '@react-navigation/native';
import {useEffect} from 'react';
import {PaperProvider} from 'react-native-paper';
import MainNavigator from './modules/navigator/screens';

const App = () => {
  useEffect(() => {}, []);

  return (
    <NavigationContainer>
      <PaperProvider>
        <MainNavigator />
      </PaperProvider>
    </NavigationContainer>
  );
};

export default App;
