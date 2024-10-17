import React from 'react';
import { Image, StyleSheet } from 'react-native';
import logo from '@/assets/images/logo-facens.png';

export const Logo = () => {
  return <Image source={logo} style={styles.logo} />;
};

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
});
