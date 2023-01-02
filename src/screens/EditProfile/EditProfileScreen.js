import React, { useState,useMemo } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import { Authentication } from '../../styles/Authentication';
import { Button, Container, Spacing, Input, BottomTabMenu } from '../../components';
import images from '../../images';
import { RouteName } from '../../routes';
import { SH } from '../../utils';
import { useTheme } from '@react-navigation/native';

const EditProfileScreen = (props) => {
  const { colorsset } = useTheme();
  const Authentications = useMemo(() => Authentication(colorsset), [colorsset]);
  const { navigation } = props;
  const [inputMobile, setInputMobile] = useState('');
  const [inputName, setinputName] = useState('');
  const [inputNameemail, setinputNameemail] = useState('');
  const [inputPassword, setInputpassword] = useState('');
  
  return (
    <Container>
      <BottomTabMenu    
      {...props} 
      selected={4} />
      <ScrollView>
        <View style={Authentications.setbgMainViewtwo}>
         <Spacing space={SH(20)} />
          <View style={Authentications.inputView}>
            <Input
              title="Name"
              onChangeText={setinputName}
              value={inputName}
              autoCompleteType="tel"
            />
            <Spacing space={SH(30)} />
            <Input
              title="Mobile Number"
              onChangeText={setInputMobile}
              value={inputMobile}
              inputType='numeric'
              maxLength={10}
              autoCompleteType="tel"
            />
            <Spacing space={SH(30)} />
            <Input
              title="Enter your email address"
              onChangeText={setinputNameemail}
              value={inputNameemail}
              autoCompleteType="tel"
            />
          </View>
          <Spacing space={SH(30)} />
          <View style={Authentications.buttonView}>
            <Button title="Update" buttonStyle={Authentications.nextButton} onPress={() => navigation.navigate(RouteName.HOME_SCREEN)} />
          </View>
          <Spacing space={SH(25)} />
        </View>
      </ScrollView>
    </Container>
  );
};
export default EditProfileScreen;
