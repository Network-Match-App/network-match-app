import React from 'react';
import { Button } from '../atom/button';
import { View, StyleSheet } from 'react-native';

export const ContinueButton = ({ direct }) => {
  return <Button title="Continue" onPress={direct} withArrow={true} />
};