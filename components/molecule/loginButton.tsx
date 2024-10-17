import React from 'react';
import { Button } from '../atom/button';
import { View, StyleSheet } from 'react-native';

export const LoginButton = ({ login , cadastrar }) => {
  return (
    <View style={styles.row}>
      <View>
        <Button title="Login" onPress={login} withArrow={true} />
      </View>
      <View style={styles.buttonElements} >
        <Button title="Cadastrar" onPress={cadastrar} withArrow={true} />
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  buttonElements: {
    paddingLeft: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});