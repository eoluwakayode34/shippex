/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';

import Splash from './src/components/layout/splash';
import WelcomeScreen from './src/screens/auth/welcome';
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
  configureFonts,
} from 'react-native-paper';
import {Platform} from 'react-native';

const fontConfig = {
  customVariant: {
    fontFamily: Platform.select({
      default: 'sf-pro-text-regular',
    }),
    fontWeight: '400',
    letterSpacing: 0.5,
    lineHeight: 22,
    fontSize: 16,
  },
  bodyLarge: {
    fontFamily: 'sf-pro-text-medium',
    fontSize: 17,
    fontWeight: 'bold',
    letterSpacing: 0.15,
    lineHeight: 24,
  },
} as const;

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#2F50C1',
  },
  fonts: configureFonts({config: fontConfig}),
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
