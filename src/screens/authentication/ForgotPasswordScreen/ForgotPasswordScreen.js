import React, { useState, useMemo } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Authentication } from '../../../styles/Authentication';
import { Button, Container, Spacing, Input, SweetAlertModal } from '../../../components';
import { RouteName } from '../../../routes';
import { SH } from '../../../utils';
import { useTheme } from '@react-navigation/native';

const OtpVerifyScreen = (props) => {
  const { colorsset } = useTheme();
  const Authentications = useMemo(() => Authentication(colorsset), [colorsset]);
  const { navigation } = props;
  const [successModalVisible, setSuccessModalVisible] = useState(false);

  const onPressHandle = () => {
    setSuccessModalVisible(false)
    navigation.navigate(RouteName.LOGIN_SCREEN)
  }

  const [email, SetEmail] = useState('');
  return (
    <Container>

      <View style={Authentications.verifyMainView}>

        <View style={Authentications.verificationInputView}>
          <Text style={Authentications.verificationTextTitle}>Forgot Password</Text>
          <Spacing space={SH(15)} />
          <Text style={Authentications.verificationText}>We will send you a message to set or reset your new password</Text>


        </View>
        <View>
          <View style={Authentications.inputView}>
            <Input
              title="Enter your email address"
              onChangeText={(e) => { SetEmail(e) }}
              value={email}
              keyboardType={'email-address'}
            />

          </View>
          <Spacing space={SH(130)} />
        </View>
        <View>
          <View style={Authentications.buttonMainView}>
            <View style={Authentications.buttonView}>
              <Button title="" LeftArraow={true} buttonStyle={Authentications.PrevButton} onPress={() => navigation.navigate(RouteName.LOGIN_SCREEN)} />
            </View>
            <View style={Authentications.buttonView}>
              <Button title="Send" buttonStyle={Authentications.nextButton} onPress={() => setSuccessModalVisible(true) } />
            </View>
          </View>
          <Spacing space={SH(25)} />
        </View>

        <SweetAlertModal
          message={"Email has been sent"}
          modalVisible={successModalVisible}
          setModalVisible={setSuccessModalVisible}
          onPress={() => onPressHandle()}
          success={true}
          buttonText="OK"
        />
      </View>
    </Container>
  );
};
export default OtpVerifyScreen;
