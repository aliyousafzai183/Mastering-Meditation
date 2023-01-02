import React, { useState,useMemo } from 'react';
import { View, Text, ImageBackground, TouchableOpacity ,ScrollView} from 'react-native';
import { Authentication } from '../../../styles/Authentication';
import { Button, Container, Spacing, Input } from '../../../components';
import images from '../../../index';
import { RouteName } from '../../../routes';
import {  SH } from '../../../utils';
import { useTheme } from '@react-navigation/native';

const SignUpScreen = (props) => {
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
        <ImageBackground source={images.signUp} resizeMode='cover' style={Authentications.setbgimage}>
          <View style={Authentications.loginSignUpTab}>
            <TouchableOpacity onPress={()=>navigation.navigate(RouteName.LOGIN_SCREEN)}>
            <Text style={[Authentications.loginSignUpText]}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style={[Authentications.loginSignUpText, Authentications.activeBorder]}>Sign Up</Text>
            </TouchableOpacity>
          </View>
          <View style={Authentications.loginSignUpTextView}>
            <Text style={Authentications.imageText}>Welcome Back,</Text>
            <Text style={[Authentications.imageText, Authentications.TextBold]}>Sign Up</Text>
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
      </View>
      
      <Spacing space={SH(50)} />
    
      <View style={Authentications.buttonView}>
        <Button title="Sign Up" buttonStyle={Authentications.nextButton}  onPress={()=>navigation.navigate(RouteName.OTP_VERYFY_SCREEN)} />
      </View>
      <Spacing space={SH(25)} />
      </View>
      </ScrollView>
    </Container>
  );
};
export default SignUpScreen;
