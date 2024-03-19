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
import AppButton from '../../components/ui/button/mainButton';

function DashboardScreen(): React.JSX.Element {
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
      duration: 550,
      delay: 200,
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
            <AppButton text="user now loggedin" onPress={() => {}} />
          </Animated.View>
        </View>
      </View>
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

export default DashboardScreen;
