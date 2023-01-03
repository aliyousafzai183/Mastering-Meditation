import React, { useState, useEffect,useMemo } from "react";
import { Text, View, ScrollView, KeyboardAvoidingView, TextInput, } from "react-native";
import { HelpStyle,HomeStyle } from '../../styles';
import { Button,Container,SweetAlertModal } from '../../components';
import { useTheme } from '@react-navigation/native';

const DoctoreHelpScreen = (props) => {
  const { colorsset } = useTheme();
    const HomeStyles = useMemo(() => HomeStyle(colorsset), [colorsset]);
    const HelpStyles = useMemo(() => HelpStyle(colorsset), [colorsset]);
  const { navigation } = props;
  const [successModalVisible, setSuccessModalVisible] = useState(false);
  const onPressHandle = () => {
    setSuccessModalVisible(false)
  }

  return (
    <Container>
      <ScrollView>
        <View style={HomeStyles.textcenterview}>
          <View style={HelpStyles.settopspace}>
            <TextInput style={HelpStyles.settextinputwidth} placeholder="Type Your Message" placeholderTextColor="black" />
          </View>
          <View>
            <Text style={HelpStyles.settextinputtext}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
          </View>
        </View>
      </ScrollView>
      <View style={HelpStyles.textcenterview}>
          <View style={HelpStyles.setbuttonstyle}>
            <Button  title="Send Mail" onPress={()=>setSuccessModalVisible(true)} />
          </View>
        </View>

        <SweetAlertModal
          message={"Email has been sent."}
          modalVisible={successModalVisible}
          setModalVisible={setSuccessModalVisible}
          onPress={() => onPressHandle()}
          success={true}
          buttonText="OK"
        />
    </Container>
  );
};
export default DoctoreHelpScreen;
