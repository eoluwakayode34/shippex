/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useRef} from 'react';
import {View, StyleSheet, Animated} from 'react-native';
import {ShippexLogo} from '../../assets/image/authImage';
import {appColors} from '../../utils/colors';

function WelcomeScreen(): React.JSX.Element {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);
  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.container,
          opacity: fadeAnim,
        }}>
        <ShippexLogo />
      </Animated.View>
    </View>
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
});

export default WelcomeScreen;
