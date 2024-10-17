import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export const InputField = ({ placeholder = "", security = false }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor="#666"
      secureTextEntry={security}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 20,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
});
