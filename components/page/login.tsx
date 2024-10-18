import React, { useState } from 'react';
import { View } from 'react-native';
import { ProfileSection } from '../organism/profileSection';
import { FormFields } from '../molecule/loginFormFields';
import { LoginButton } from '../molecule/loginButton';
import { ContinueButton } from '../molecule/continueButton';
import { BackButton } from '../molecule/backButton';
import { ImageBackgroundWrapper } from '../molecule/imageBackgroundWrapper';
import { SignupForm } from '../organism/signupForm';
import { GoogleButton } from '../atom/googleButton'; // Botão de login Google


export default function LoginScreen({ navigation }) {
  const handleLogin = () => {
    navigation.replace('Home');
  };
  const [isSignup, setIsSignup] = useState(false);
  return (
    <ImageBackgroundWrapper>
      <View>
        {!isSignup ? (
            <>
              <ProfileSection imageSource={require('@/assets/images/logo-facens.png')} />  {/* Sua imagem de perfil */}
              <FormFields />
              <View>
                <LoginButton 
                  login={handleLogin} 
                  cadastrar={() => setIsSignup(true)}
                />
              </View>
              <GoogleButton />
          </>
        ) : (
          <View>
            <BackButton direct={() => setIsSignup(false)}/>
            <ProfileSection imageSource={require('@/assets/images/logo-facens.png')} />  {/* Sua imagem de perfil */}
            <SignupForm />
            <ContinueButton direct={handleLogin}/>
          </View>
        )}
      </View>
    </ImageBackgroundWrapper>
  );
}

// const styles = StyleSheet.create({
//   background: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   container: {
//     width: '80%',
//   },
// });
