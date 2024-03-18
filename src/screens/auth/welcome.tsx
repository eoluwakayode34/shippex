/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import * as React from 'react';
import {Text} from 'react-native-paper';
import {useEffect, useRef} from 'react';
import {View, StyleSheet, Animated, TouchableOpacity} from 'react-native';
import {ShippexLogo} from '../../assets/image/authImage';
import {appColors} from '../../utils/colors';

function WelcomeScreen(): React.JSX.Element {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
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

      <View style={styles.buttonContainer}>
        <Animated.View
          style={{
            opacity: fadeAnim,
          }}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText} variant="bodyLarge">
              Login
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
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
  button: {
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 14,
    width: '100%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonContainer: {
    width: '100%',
    paddingBottom: 36,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: appColors.primary,
  },
});

export default WelcomeScreen;
