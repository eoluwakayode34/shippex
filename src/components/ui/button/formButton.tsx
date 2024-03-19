/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {ActivityIndicator, Text} from 'react-native-paper';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {appColors} from '../../../utils/colors';

type AppButtonProps = {
  onPress: () => void;
  text: string;
  active: boolean;
  isLoading: boolean;
};

function SubmitButton({
  onPress,
  text,
  active,
  isLoading,
}: AppButtonProps): JSX.Element {
  return (
    <TouchableOpacity
      disabled={isLoading}
      onPress={onPress}
      style={[
        styles.button,
        {backgroundColor: active ? appColors.primary : '#EAE7F2'},
      ]}>
      {isLoading ? (
        <ActivityIndicator size={'small'} color="#fff" />
      ) : (
        <Text
          style={[
            styles.buttonText,
            {color: active ? appColors.white : '#A7A3B3'},
          ]}
          variant="bodyLarge">
          {text}
        </Text>
      )}
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
    backgroundColor: appColors.primary,
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
    color: appColors.white,
  },
});

export default SubmitButton;
