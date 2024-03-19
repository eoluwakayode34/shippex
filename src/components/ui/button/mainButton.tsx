/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {Text} from 'react-native-paper';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {appColors} from '../../../utils/colors';

type AppButtonProps = {
  onPress: () => void;
  text: string;
};

function AppButton({onPress, text}: AppButtonProps): JSX.Element {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText} variant="bodyLarge">
        {text}
      </Text>
    </TouchableOpacity>
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

export default AppButton;
