import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';  // Ícone de seta

export const Button = ({ title, onPress, withArrow, direction = true }) => {
  return (
    direction === true ?
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
        {withArrow && <AntDesign name="arrowright" size={24} color="white" />}
      </TouchableOpacity>
    :
      <TouchableOpacity style={styles.button} onPress={onPress}>
        {withArrow && <AntDesign name="arrowleft" size={24} color="white" />}
        <Text style={styles.buttonTextLeft}>{title}</Text>
      </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderRadius: 25,
    backgroundColor: '#4A90E2',
    paddingHorizontal: 20,
    fontFamily: 'Poppins_400Regular'
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    marginRight: 10,
  },
  buttonTextLeft: {
    color: '#fff',
    fontSize: 18,
    marginLeft: 10,
  },
});
