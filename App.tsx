/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';

import Splash from './src/components/layout/splash';
import WelcomeScreen from './src/screens/auth/welcome';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {QueryClient, QueryClientProvider} from 'react-query';

import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
  configureFonts,
} from 'react-native-paper';
import {Platform} from 'react-native';
import {useUserStore} from './src/stores/userStore';
import DashboardScreen from './src/screens/dashboard/dashboard';

const queryClient = new QueryClient();

const fontConfig = {
  customVariant: {
    fontFamily: Platform.select({
      default: 'sf-pro-text-regular',
    }),
    fontWeight: '400',
    letterSpacing: 0.5,
    lineHeight: 22,
    fontSize: 17,
  },
  bodyLarge: {
    fontFamily: 'sf-pro-text-bold',
    fontSize: 17,
    fontWeight: '500',
    letterSpacing: 0.15,
    lineHeight: 24,
  },
  bodyMedium: {
    fontFamily: 'sf-pro-text-regular',
    fontSize: 17,
    fontWeight: '500',
    letterSpacing: -0.5,
    lineHeight: 24,
  },
  headlineLarge: {
    fontFamily: 'sf-pro-text-semibold',
    fontSize: 34,
    letterSpacing: -1,
    fontWeight: '500',
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
  const user = useUserStore(state => state.user);
  const loadData = useUserStore(state => state.loadData);
  useEffect(() => {
    loadData();
  }, [loadData]);
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <PaperProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          {closeSplash ? (
            <Splash setCloseSplash={setCloseSplash} />
          ) : user ? (
            <DashboardScreen />
          ) : (
            <WelcomeScreen />
          )}
        </QueryClientProvider>
      </PaperProvider>
    </GestureHandlerRootView>
  );
}

export default App;
