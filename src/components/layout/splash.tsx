import React from 'react';
import {StyleSheet, View} from 'react-native';
import LottieView from 'lottie-react-native';

export default function Splash() {
  return (
    <View style={styles.container}>
      <LottieView source={require('../assets/splash.json')} autoPlay loop />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
