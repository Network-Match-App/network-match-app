import { Text, StyleSheet } from 'react-native';

import React from 'react';

export function textSimple(textStr: String) {
    return (
      <Text style={styles.text}>{textStr}</Text>
    );
  }

  const styles = StyleSheet.create({
    text: {
      color: '#272F6D',
      fontSize: 42,
      lineHeight: 84,
      fontWeight: 'bold',
      textAlign: 'center'
    }
  });