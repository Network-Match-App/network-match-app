import React from 'react';
import { Image, StyleSheet } from 'react-native';

export const ProfileImage = ({ source }) => {
  return <Image source={source} style={styles.profileImage} />;
};

const styles = StyleSheet.create({
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#fff',
    marginBottom: 15,
  },
});
