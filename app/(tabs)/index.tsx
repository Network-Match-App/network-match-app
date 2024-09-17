import { StyleSheet, Platform, ImageBackground, View, Text, Image} from 'react-native';

import React from 'react';

// const image = "@/assets/images/pre-login-background/png";
import backgroud from '@/assets/images/pre-login-background.png';
import logo from '@/assets/images/logo-facens.png';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground source={backgroud} resizeMode="cover" style={styles.image}>
        <View style={styles.contentLogo}>
          <Image source={logo} style={styles.logo}/>
        </View>
        <Text style={styles.text}>CONECTA</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: 'auto',
    height: 'auto',
    justifyContent: 'center',
    resizeMode: 'stretch'
  },
  text: {
    color: '#272F6D',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  logo: {
    justifyContent: 'center'
  },
  contentLogo: {
    alignItems: 'center'
  }
});
