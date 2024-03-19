/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import * as React from 'react';
import {useEffect, useRef} from 'react';
import {View, StyleSheet, Animated} from 'react-native';
import {ShippexLogo} from '../../assets/image/authImage';
import {appColors} from '../../utils/colors';
import LoginBottomSheet from './login/loginBottomSheet';
import AppButton from '../../components/ui/button/mainButton';
import BottomSheet from '@gorhom/bottom-sheet';
import {Easing} from 'react-native-reanimated';

function WelcomeScreen(): React.JSX.Element {
  const loginSheetRef = useRef<BottomSheet>(null);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const strollIn = useRef(new Animated.Value(200)).current;
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
    Animated.timing(strollIn, {
      toValue: 0,
      duration: 1200,
      delay: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim, strollIn]);

  return (
    <>
      <View style={styles.container}>
        <Animated.View
          style={{
            ...styles.container,
            opacity: fadeAnim,
          }}>
          <ShippexLogo />
        </Animated.View>

        <View style={styles.buttonContainer}>
          <Animated.View
            style={{
              translateY: strollIn,
              opacity: fadeAnim,
            }}>
            <AppButton
              text="Login"
              onPress={() =>
                loginSheetRef.current?.expand({
                  duration: 300,
                  easing: Easing.linear,
                })
              }
            />
          </Animated.View>
        </View>
      </View>
      <LoginBottomSheet sheetRef={loginSheetRef} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    backgroundColor: appColors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonContainer: {
    width: '100%',
    paddingBottom: 36,
    paddingHorizontal: 20,
  },
});

export default WelcomeScreen;
