/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';

import {TextInput, useTheme} from 'react-native-paper';
import {appColors} from '../../../utils/colors';

function FormInput({label, error, style, ...otherProps}: any): JSX.Element {
  const theme = useTheme();
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.inputContainer,
          {borderColor: isFocused ? appColors.primary : appColors.transparent},
        ]}>
        <TextInput
          mode="flat"
          theme={{
            fonts: {
              bodyLarge: {
                ...theme.fonts.bodyLarge,
                fontFamily: 'sf-pro-text-regular',
                fontSize: 16,
              },
            },
          }}
          placeholder={label}
          style={[styles.input, style]}
          error={error}
          activeOutlineColor={appColors.primary}
          outlineColor={appColors.white}
          textColor={appColors.primary}
          placeholderTextColor={appColors.black200}
          underlineStyle={styles.underlineStyle}
          onFocus={handleFocus}
          onBlur={handleBlur}
          left={otherProps.left && isFocused ? otherProps.left : null}
          {...otherProps}
        />
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}

export default FormInput;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  inputContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
    backgroundColor: appColors.inputBg,
    paddingHorizontal: 14,
    borderRadius: 10,
    borderWidth: 1,
    paddingVertical: 2,
    flexDirection: 'row',
  },
  labelText: {
    color: appColors.black200,
    backgroundColor: appColors.transparent,
    paddingHorizontal: 2,
  },
  input: {
    width: '100%',
    backgroundColor: appColors.transparent,
    fontSize: 16,
    color: appColors.transparent,
    height: 60,
    paddingHorizontal: 6,
  },
  underlineStyle: {
    borderWidth: 0,
    borderRadius: 5,
    backgroundColor: appColors.inputBg,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
  },
});
