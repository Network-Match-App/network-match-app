import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { InputField } from '../atom/inputField';
import { SelectField } from '../atom/selectField';

export const SignupForm = () => {

  const [selectedCourse, setSelectedCourse] = useState('');
  const [selectedInterest, setSelectedInterest] = useState('');

  const courseOptions = [
    { label: 'Engenharia', value: 'engenharia' },
    { label: 'Ciência da Computação', value: 'computacao' },
    // Adicione mais opções aqui
  ];

  const interestOptions = [
    { label: 'Tecnologia', value: 'tecnologia' },
    { label: 'Design', value: 'design' },
    // Adicione mais opções aqui
  ];

  return (
    <View style={styles.container}>
      <InputField placeholder="Seu nome" />
      <View style={styles.row}>
        <SelectField
          selectedValue={selectedCourse}
          onValueChange={(value) => setSelectedCourse(value)}
          options={courseOptions}
        />
        <View style={styles.inputElements}>
          <InputField placeholder="Idade" />
        </View>
      </View>
      <SelectField
        selectedValue={selectedInterest}
        onValueChange={(value) => setSelectedInterest(value)}
        options={interestOptions}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  inputElements: {
    paddingLeft: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
