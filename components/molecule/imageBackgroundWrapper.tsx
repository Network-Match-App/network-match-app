import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import background from '@/assets/images/pre-login-background.png';

export const ImageBackgroundWrapper = ({ children }) => {
  return (
    <ImageBackground source={background} style={styles.image}>
      <View style={styles.container}>{children}</View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
    image: {
        flex: 1,
        width: 'auto',
        height: 'auto',
        justifyContent: 'center',
        resizeMode: 'stretch',
      },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
