import React from 'react';
import { View } from 'react-native';
import { Logo } from '../atom/logo';
import { TextSimple } from '../atom/textSimple';

export const LoadingContent = () => {
  return (
    <View>
      <Logo />
      <TextSimple>CONECTA</TextSimple>
    </View>
  );
};
