import React from 'react';

import FormInput from './textInput';
import {StyleSheet, View} from 'react-native';
import {SearchIcon} from '../../../assets/icons/dashboardIcon';

export const FormSearchInput = ({...otherProps}: any) => {
  return (
    <View style={styles.inputContainer}>
      <FormInput label="Search" style={styles.input} {...otherProps} />
      <View style={styles.searchContainer}>
        <SearchIcon />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {position: 'absolute', top: '45%', left: 10},
  input: {paddingLeft: 20, height: 44},
  inputContainer: {position: 'relative'},
});
