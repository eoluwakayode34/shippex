/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';

import Splash from './src/components/layout/splash';
import WelcomeScreen from './src/screens/auth/welcome';
import {MD3LightTheme as DefaultTheme, PaperProvider} from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#2F50C1',
  },
};

function App(): React.JSX.Element {
  const [closeSplash, setCloseSplash] = useState(true);
  return (
    <PaperProvider theme={theme}>
      {closeSplash ? (
        <Splash setCloseSplash={setCloseSplash} />
      ) : (
        <WelcomeScreen />
      )}
    </PaperProvider>
  );
}

export default App;
