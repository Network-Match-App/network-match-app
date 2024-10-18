import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Image } from 'react-native';

export const GoogleButton = () => {
  return (
    <TouchableOpacity style={styles.googleButton}>
      <Image
        source={require('@/assets/images/logo-facens.png')}
        style={styles.icon}
      />
      <Text style={styles.googleText}>Login com Google</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderRadius: 25,
    backgroundColor: '#fff',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  googleText: {
    color: '#000',
    fontSize: 16,
  },
});
