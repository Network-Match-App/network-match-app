import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, ImageBackground, View, Image, Animated } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../../components/page/login';  // Tela de login
import HomeScreen from '../../components/page/home';    // Tela Home
import background from '@/assets/images/pre-login-background.png';
import logo from '@/assets/images/logo-facens.png';
import { textSimple } from '@/components/atom/textSimple'; // Seu componente de texto
import * as Font from 'expo-font';
import { Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';

const Stack = createStackNavigator();

const [fontsLoaded, setFontsLoaded] = useState(false);

const loadFonts = async () => {
  await Font.loadAsync({
    Poppins_400Regular,
    Poppins_600SemiBold,
  });
  setFontsLoaded(true);
};

useEffect(() => {
  loadFonts();
}, []);

if (!fontsLoaded) {
  return <AppLoading />;
}

function LoadingScreen({ navigation }) {
  const [loading, setLoading] = useState(true);
  const fadeAnim = useRef(new Animated.Value(1)).current; // Controle de opacidade

  useEffect(() => {
    // Simula carregamento de 3 segundos
    const timer = setTimeout(() => {
      // Inicia a animação de fade out (1 segundo)
      Animated.timing(fadeAnim, {
        toValue: 0, // Opacidade vai de 1 a 0
        duration: 1000, // Duração da animação em milissegundos (1 segundo)
        useNativeDriver: true, // Usar o driver nativo para performance
      }).start(() => {
        // Após a animação, navega para a tela de login
        setLoading(false); 
        navigation.replace('Login');
      });
    }, 3000);

    return () => clearTimeout(timer); // Limpa o temporizador ao desmontar o componente
  }, [fadeAnim, navigation]);

  return (
    <Animated.View style={{ ...styles.container, opacity: fadeAnim }}>
      <ImageBackground source={background} resizeMode="cover" style={styles.image}>
        <View style={styles.contentLogo}>
          <Image source={logo} style={styles.logo} />
        </View>
        {textSimple("CONECTA")}
      </ImageBackground>
    </Animated.View>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Loading">
        <Stack.Screen
          name="Loading"
          component={LoadingScreen}
          options={{ headerShown: false }} // Oculta o cabeçalho na tela de carregamento
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }} // Oculta o cabeçalho na tela de login
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home' }} // Exibe o cabeçalho na tela Home
        />
      </Stack.Navigator>
    </NavigationContainer>
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
    resizeMode: 'stretch',
  },
  logo: {
    justifyContent: 'center',
  },
  contentLogo: {
    alignItems: 'center',
  },
});
