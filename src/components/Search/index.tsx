import React from 'react';
import { StyleSheet, TextInput, TextInputProps } from 'react-native';

const Search: React.FC<TextInputProps> = props => {
  return (
    <TextInput
      placeholder="Search"
      placeholderTextColor="#2C2C2C"
      returnKeyType="search"
      autoCapitalize="none"
      {...props}
      style={[styles.input, props.style]}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#F2F2F2',
    borderRadius: 17,
    backgroundColor: '#F2F2F2',
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
});

export default React.memo(Search);
