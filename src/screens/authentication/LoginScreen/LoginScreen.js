import React, { useState, useMemo } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import { Authentication } from '../../../styles/Authentication';
import { Button, Container, Spacing, Input } from '../../../components';
import images from '../../../images';
import { RouteName } from '../../../routes';
import { SH } from '../../../utils';
import { useTheme } from '@react-navigation/native';

const LoginScreen = (props) => {
  const { colorsset } = useTheme();
  const Authentications = useMemo(() => Authentication(colorsset), [colorsset]);
  const { navigation } = props;
  const [inputMobile, setInputMobile] = useState('');
  const [inputPassword, setInputpassword] = useState('');

  return (
    <Container>
      <ScrollView>
        <View style={Authentications.setbgMainView}>

          <View style={Authentications.setbgimageView}>
            <ImageBackground source={images.login} resizeMode='cover' style={Authentications.setbgimage}>
              <View style={Authentications.loginSignUpTab}>
                <TouchableOpacity>
                  <Text style={[Authentications.loginSignUpText, Authentications.activeBorder]}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate(RouteName.SIGNUP_SCREEN)}>
                  <Text style={Authentications.loginSignUpText}>Sign Up</Text>
                </TouchableOpacity>
              </View>
              <View style={Authentications.loginSignUpTextView}>
                <Text style={Authentications.imageText}>Welcome Back,</Text>
                <Text style={[Authentications.imageText, Authentications.TextBold]}>Sign In</Text>
              </View>
            </ImageBackground>
          </View>

          <View style={Authentications.inputView}>
            <Spacing space={SH(30)} />
            <Input
              title="Mobile Number"
              onChangeText={setInputMobile}
              value={inputMobile}
              inputType='numeric'
              keyboardType='numeric'
              maxLength={10}
              autoCompleteType="tel"
            />
            <Spacing space={SH(30)} />
            <Input
              title="Password"
              onChangeText={setInputpassword}
              value={inputPassword}
              secureTextEntry={true}
            />
            <TouchableOpacity onPress={() => navigation.navigate(RouteName.FORGOT_PASSWORD_SCREEN)}>
              <Text style={Authentications.forgotText}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>

          <Spacing space={SH(30)} />

          <View style={Authentications.buttonView}>
            <Button title="Login" buttonStyle={Authentications.nextButton} onPress={() => navigation.navigate(RouteName.OTP_VERYFY_SCREEN)} />
          </View>
          <Spacing space={SH(25)} />
        </View>
      </ScrollView>
    </Container>
  );
};
export default LoginScreen;
