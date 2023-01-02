import React, { useState ,useMemo} from 'react';
import { View, Text } from 'react-native';
import { Authentication } from '../../../styles/Authentication';
import { Button, Container, Spacing, OtpInput, SweetAlertModal } from '../../../components';
import { RouteName } from '../../../routes';
import { SH } from '../../../utils';
import { useTheme } from '@react-navigation/native';

const OtpVerifyScreen = (props) => {
  const { colorsset } = useTheme();
  const Authentications = useMemo(() => Authentication(colorsset), [colorsset]);
  const { navigation } = props;
  const [code, setCode] = useState('');
  const [successModalVisible, setSuccessModalVisible] = useState(false);
  const onPressHandle = () => {
    setSuccessModalVisible(false)
    navigation.navigate(RouteName.HOME_SCREEN)
  }
  return (
    <Container>

      <View style={Authentications.verifyMainView}>

        <View style={Authentications.verificationInputView}>
          <Text style={Authentications.verificationTextTitle}>Verification</Text>
          <Spacing space={SH(15)} />

          <Text style={Authentications.verificationText}>We sent you an SMS code</Text>
          <Spacing space={SH(3)} />

          <Text style={Authentications.verificationText}>On number +91 1234567890</Text>
          <Spacing space={SH(100)} />
          <OtpInput
            pinnum={4}
            autoFocusOnLoad={false}
            code={code}
            onCodeChanged={(code) => setCode(code)}
          />
          <Spacing space={SH(30)} />

          <Text style={Authentications.resendText}>Resend OTP?</Text>
        </View>

        <View>
          <View style={Authentications.buttonMainView}>
            <View style={Authentications.buttonView}>
              <Button title="" LeftArraow={true} buttonStyle={Authentications.PrevButton} onPress={() => navigation.navigate(RouteName.LOGIN_SCREEN)} />
            </View>
            <View style={Authentications.buttonView}>
              <Button title="Verify" buttonStyle={Authentications.nextButton} onPress={() => setSuccessModalVisible(true)} />
            </View>
          </View>
          <Spacing space={SH(25)} />
        </View>

        <SweetAlertModal
          message={"Login Success"}
          modalVisible={successModalVisible}
          setModalVisible={setSuccessModalVisible}
          onPress={() => onPressHandle()}
          loginSuccess={true}
          buttonText="OK"
        />
      </View>
    </Container>
  );
};
export default OtpVerifyScreen;
