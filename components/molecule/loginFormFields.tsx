import React from 'react';
import { View, StyleSheet } from 'react-native';
import { InputField } from '../atom/inputField';

export const FormFields = () => {
  return (
    <View style={styles.formContainer}>
      <InputField placeholder="Login" />
      <InputField placeholder="Senha" security={true} />
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
