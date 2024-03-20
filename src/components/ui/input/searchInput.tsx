import React from 'react';

import FormInput from './textInput';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {
  CloseSearchActiveIcon,
  SearchActiveIcon,
  SearchIcon,
} from '../../../assets/icons/dashboardIcon';

export const FormSearchInput = ({
  filterText,
  handleCloseSearch,
  ...otherProps
}: any) => {
  return (
    <View style={styles.inputContainer}>
      <FormInput label="Search" style={styles.input} {...otherProps} />
      <View style={styles.searchContainer}>
        {filterText ? <SearchActiveIcon /> : <SearchIcon />}
      </View>
      {filterText && (
        <TouchableOpacity
          onPress={handleCloseSearch}
          style={styles.closeSeachContainer}>
          <CloseSearchActiveIcon />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {position: 'absolute', top: '45%', left: 10},
  closeSeachContainer: {position: 'absolute', top: '45%', right: 10},
  input: {paddingHorizontal: 20, height: 44},
  inputContainer: {position: 'relative'},
});
