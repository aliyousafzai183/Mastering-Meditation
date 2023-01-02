import React, { useState, Component,useMemo } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { AgeStyle, Authentication } from '../../../styles';
import { Button, Container, Spacing } from '../../../components';
import { RouteName } from '../../../routes';
import {  SH, SF } from '../../../utils';
import { Picker } from 'react-native-wheel-pick';
import { useTheme } from '@react-navigation/native';

const AgeScreen = (props) => {
  const { colorsset } = useTheme();
  const AgeStyles = useMemo(() => AgeStyle(colorsset), [colorsset]);
  const Authentications = useMemo(() => Authentication(colorsset), [colorsset]);
  const { navigation } = props;

  const Items = Array.from(Array(100).keys());
  return (
    <Container>
      <View style={Authentications.MainViewSingle}>
        <View>
          <Spacing space={SH(50)} />
          <View style={AgeStyles.textcenterview}>
            <Text style={[AgeStyles.Text, AgeStyles.TextBold]}>
              How Old are you ?
            </Text>
            <Spacing space={SH(15)} />
            <Text style={[AgeStyles.TextNormal]}>
              The point of using Lorem Ipsum is that it has a more-or-less
            </Text>
          </View>
        </View>

        <View style={AgeStyles.yourAgeMainBox}>
          <Picker
            style={AgeStyles.AgePickerView}
            selectedValue='34'
            pickerData={Items}
            onValueChange={value => { console.log(value) }}
            textColor={colorsset.theme_backgound}
            textSize={SF(30)}
            selectTextColor={colorsset.theme_backgound}
            isShowSelectLine={true} // Default is true
            selectLineColor={colorsset.theme_backgound_second}
            selectLineSize={6} // Default is 4
          />
        </View>

        <View>
          <View style={Authentications.buttonMainView}>
            <View style={Authentications.buttonView}>
              <Button title="" LeftArraow={true} buttonStyle={Authentications.PrevButton} onPress={() => navigation.navigate(RouteName.ABOUT_SELF_SCREEN)} />
            </View>
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
export default AgeScreen;
