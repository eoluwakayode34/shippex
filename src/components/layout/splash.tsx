import React from 'react';
import {StyleSheet, View} from 'react-native';
import LottieView from 'lottie-react-native';

type SplashProps = {
  setCloseSplash: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Splash({setCloseSplash}: SplashProps) {
  return (
    <View style={styles.container}>
      <LottieView
        source={require('../../assets/shippex-splash.json')}
        autoPlay
        loop={false}
        resizeMode="cover"
        style={styles.lottie}
        onAnimationFinish={() => {
          setCloseSplash(false);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    margin: 0,
  },
  lottie: {
    width: '100%',
    height: '100%',
  },
});
