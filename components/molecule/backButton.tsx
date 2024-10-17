import React from 'react';
import { Button } from '../atom/button';
import { View, StyleSheet } from 'react-native';

export const BackButton = ({ direct }) => {
  return (
    <View style={styles.row}>
      <View style={styles.buttonElements} >
        <Button title="Voltar" onPress={direct} withArrow={true} direction={false}/>
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