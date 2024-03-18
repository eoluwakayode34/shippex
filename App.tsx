/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';

import Splash from './src/components/layout/splash';
import WelcomeScreen from './src/screens/auth/welcome';

function App(): React.JSX.Element {
  const [closeSplash, setCloseSplash] = useState(true);
  return closeSplash ? (
    <Splash setCloseSplash={setCloseSplash} />
  ) : (
    <WelcomeScreen />
  );
}

export default App;
