import React, { useState,useMemo } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { AboutSelfStyle, Authentication } from '../../../styles';
import { Button, Container, LottieIcon, Spacing } from '../../../components';
import images from '../../../index';
import { RouteName } from '../../../routes';
import { SH } from '../../../utils';
import { useTheme } from '@react-navigation/native';

const AboutSelfScreen = (props) => {
  const { colorsset } = useTheme();
  const AboutSelfStyles = useMemo(() => AboutSelfStyle(colorsset), [colorsset]);
  const Authentications = useMemo(() => Authentication(colorsset), [colorsset]);
  const { navigation } = props;
  const [activeTab, setActiveTab] = useState('MALE');

  const onHandleButton = (e) => {
    setActiveTab(e)
  }

  return (
    <Container>
      <View style={Authentications.MainViewSingle}>
        <View>
          <Spacing space={SH(50)} />
          <View style={AboutSelfStyles.textcenterview}>
            <Text style={[AboutSelfStyles.Text, AboutSelfStyles.TextBold]}>
              Tell Us about yourself
            </Text>
            <Spacing space={SH(15)} />
            <Text style={[AboutSelfStyles.TextNormal]}>
              It is a long established fact that a reader will be distracted 
            </Text>
          </View>
        </View>

        <View style={AboutSelfStyles.yourSelfRoundMainBox}>
          <TouchableOpacity onPress={() => onHandleButton("MALE")}>
            <View style={[AboutSelfStyles.yourSelfRoundBox, activeTab == "MALE" && AboutSelfStyles.yourSelfRoundActiveBox]}>
              {activeTab == "MALE" &&
                <LottieIcon source={images.selectionRound} style={AboutSelfStyles.selectionRoundBox} loop={false} />
              }

              <Image resizeMode='cover' source={images.male} style={AboutSelfStyles.yourSelfRoundImage} />
              <Spacing space={SH(10)} />
              <Text style={AboutSelfStyles.yourSelfRoundText}>Male</Text>
            </View>
          </TouchableOpacity>
          <Spacing space={SH(30)} />
          <TouchableOpacity onPress={() => onHandleButton("FEMALE")}>
            <View style={[AboutSelfStyles.yourSelfRoundBox, activeTab == "FEMALE" && AboutSelfStyles.yourSelfRoundActiveBox]}>
              {activeTab == "FEMALE" &&
                <LottieIcon source={images.selectionRound} style={AboutSelfStyles.selectionRoundBox}  loop={false} />
              }
              <Image resizeMode='cover' source={images.female} style={AboutSelfStyles.yourSelfRoundImage} />
              <Spacing space={SH(10)} />
              <Text style={AboutSelfStyles.yourSelfRoundText}>Female</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View>
          <View style={Authentications.buttonView}>
            <Button title="Next" nextArraow={true} buttonStyle={Authentications.nextButton} onPress={() => navigation.navigate(RouteName.LOGIN_SCREEN)} />
          </View>
          <Spacing space={SH(25)} />
        </View>
      </View>
    </Container>
  );
};
export default AboutSelfScreen;
