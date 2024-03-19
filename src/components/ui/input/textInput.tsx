/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {Text, View} from 'react-native';

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
    <View style={{width: '100%'}}>
      <View
        style={{
          justifyContent: 'flex-start',
          alignItems: 'center',
          width: '100%',
          marginTop: 20,
          backgroundColor: appColors.inputBg,
          paddingHorizontal: 14,
          borderRadius: 10,
          borderWidth: 1,
          borderColor: isFocused ? appColors.primary : appColors.white,
          paddingVertical: 2,
          flexDirection: 'row',
        }}>
    
        <TextInput
          mode="flat"
          label={
            <Text
              style={{
                color: isFocused ? appColors.black300 : appColors.black200,
                backgroundColor: appColors.transparent,
                paddingHorizontal: 2,
              }}>
              {label}
            </Text>
          }
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
          style={[
            {
              width: '100%',
              backgroundColor: appColors.transparent,
              fontSize: 16,
              color: appColors.transparent,
              height: 60,
              paddingHorizontal: 6,
            },
            style,
          ]}
          error={error}
          activeOutlineColor={appColors.primary}
          outlineColor={appColors.white}
          textColor={appColors.primary}
          placeholderTextColor={appColors.black200}
          underlineStyle={{
            borderWidth: 0,
            borderRadius: 5,
            backgroundColor: appColors.inputBg,
          }}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...otherProps}
        />
      </View>
      {error && <Text style={{color: 'red', fontSize: 12}}>{error}</Text>}
    </View>
  );
}

export default FormInput;
