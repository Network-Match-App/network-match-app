import React from 'react';
import { View, StyleSheet } from 'react-native';
import { InputField } from '../atom/inputField';

export const FormFields = () => {
  return (
    <View style={styles.formContainer}>
      <InputField placeholder="Seu nome" />
      <View style={styles.row}>
        <InputField placeholder="Curso" />
        <InputField placeholder="Idade" />
      </View>
      <InputField placeholder="Interesses" />
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
