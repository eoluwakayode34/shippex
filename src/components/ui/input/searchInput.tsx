import React from 'react';
import {Text, View} from 'react-native';

import {TextInput, useTheme} from 'react-native-paper';
import {appColors} from '../../../utils/colors';

export const FormInput2 = ({label, error, style, ...otherProps}: any) => {
  const theme = useTheme();

  return (
    <>
      <View
        style={{
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          width: '100%',
          marginTop: 20,
        }}>
        <TextInput
          mode="outlined"
          theme={{
            fonts: {
              bodyLarge: {
                ...theme.fonts.bodyLarge,
                fontFamily: 'Poppins',
              },
            },
          }}
          placeholder={label}
          style={[
            {
              width: '100%',
              fontFamily: 'Poppins',
              backgroundColor: appColors.transparent,
              fontSize: 16,
              color: appColors.transparent,
              height: 40,
            },
            style,
          ]}
          error={error}
          activeOutlineColor={appColors.grayBorder}
          outlineColor={appColors.grayBorder}
          textColor={appColors.dark200}
          placeholderTextColor={appColors.grayBorder}
          outlineStyle={{borderWidth: 1, borderRadius: 10}}
          {...otherProps}
        />
      </View>
      {error && <Text style={{color: 'red', fontSize: 12}}>{error}</Text>}
    </>
  );
};
export const FormSearchInput = ({label, style, ...otherProps}: any) => {
  const theme = useTheme();

  return (
    <>
      <View
        style={{
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          width: '100%',
          marginTop: 20,
        }}>
        <TextInput
          mode="outlined"
          theme={{
            fonts: {
              bodyLarge: {
                ...theme.fonts.bodyLarge,
                fontFamily: 'Poppins',
              },
            },
          }}
          placeholder={label}
          style={[
            {
              width: '100%',
              fontFamily: 'Poppins',
              backgroundColor: appColors.notifyBg,
              fontSize: 16,
              // color: appColors.transparent,
              // height: 53,
              // paddingHorizontal: 6,
            },
            style,
          ]}
          activeOutlineColor={appColors.grayBorder}
          outlineColor={appColors.grayBorder}
          textColor={appColors.dark200}
          placeholderTextColor={appColors.grayBorder}
          outlineStyle={{borderWidth: 1, borderRadius: 10}}
          {...otherProps}
        />
      </View>
    </>
  );
};
