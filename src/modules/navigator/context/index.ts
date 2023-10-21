import {createContext} from 'react';
import {MainNavigatorData} from '../hooks/types';

const AuthContext = createContext<MainNavigatorData | null>(null);

export default AuthContext;
