import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ProfileImage } from '../atom/profileImage';

export const ProfileSection = ({ imageSource }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ANÔNIMO</Text>
      <ProfileImage source={imageSource} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
});