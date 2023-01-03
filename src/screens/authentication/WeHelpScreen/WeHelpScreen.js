import React, { useState, useMemo } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Authentication, WeHelpStyle } from '../../../styles';
import { Button, Container, Spacing } from '../../../components';
import images from '../../../index';
import { RouteName } from '../../../routes';
import { SH } from '../../../utils';
import { useTheme } from '@react-navigation/native';

const WeHelpScreen = (props) => {
  const { colorsset } = useTheme();
  const WeHelpStyles = useMemo(() => WeHelpStyle(colorsset), [colorsset]);
  const Authentications = useMemo(() => Authentication(colorsset), [colorsset]);
  const { navigation } = props;
  const [activeTab, setActiveTab] = useState('1');

  const onHandleButton = (e) => {
    setActiveTab(e)
  }
  const dataArray = [
    {
      id: '1',
      title: "LOSE WEIGHT",
      content: "Get Lean fast and healthy"
    },
    {
      id: '2',
      title: "GET STRONGER",
      content: "Get Lean fast and healthy"
    },
    {
      id: '3',
      title: "LOSE WEIGHT",
      content: "Get Lean fast and healthy"
    }
  ];

  return (
    <Container>
      <View style={Authentications.MainViewSingle}>

        <View>
          <Spacing space={SH(50)} />
          <View style={WeHelpStyles.textcenterview}>
            <Text style={[WeHelpStyles.Text, WeHelpStyles.TextBold]}>
              Welcome
            </Text>
            <Spacing space={SH(15)} />
            <Text style={[WeHelpStyles.TextNormal]}>
              How can we help you?
            </Text>
          </View>
        </View>
        <View>
          {dataArray.map((item, index) => {
            return (
              <>
                <TouchableOpacity onPress={() => onHandleButton(item.id)} style={[WeHelpStyles.MainBox, activeTab == item.id && WeHelpStyles.RoundActiveMainBox]}>
                  <View style={WeHelpStyles.MainBoxTextView}>
                    <Text style={[WeHelpStyles.buttonBigText, activeTab == item.id && WeHelpStyles.buttonBigTextActive]}>{item.title}</Text>
                    <Spacing space={SH(10)} />
                    <Text style={WeHelpStyles.buttonSmallText}>{item.content}</Text>
                  </View>
                  <Image source={images.rightArrow} style={WeHelpStyles.rightImageStyle} resizeMode='cover' />
                </TouchableOpacity>
                <Spacing space={SH(30)} />
              </>
            )
          })
          }
        </View>
        <View>
          <View style={WeHelpStyles.buttonMainView}>
            <View style={Authentications.buttonView}>
              <Button title="Next" buttonStyle={Authentications.nextButton} nextArraow={true} onPress={() => navigation.navigate(RouteName.LOGIN_SCREEN)} />
            </View>
          </View>
          <Spacing space={SH(25)} />
        </View>
      </View>
    </Container>
  );
};
export default WeHelpScreen;
