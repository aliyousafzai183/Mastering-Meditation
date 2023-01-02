import React, { useState, Component,useMemo } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { AgeStyle, Authentication } from '../../../styles';
import { Button, Container, Spacing } from '../../../components';
import { RouteName } from '../../../routes';
import { SH, SF } from '../../../utils';
import { Picker } from 'react-native-wheel-pick';
import { useTheme } from '@react-navigation/native';

const GoalScreen = (props) => {
  const { colorsset } = useTheme();
  const AgeStyles = useMemo(() => AgeStyle(colorsset), [colorsset]);
  const Authentications = useMemo(() => Authentication(colorsset), [colorsset]);
  const { navigation } = props;

  const Items = ["Lose weight", "Gain more flexible", "Get Filter", "Get Stronger", "Keep Fit"];
  return (
    <Container>
      <View style={Authentications.MainViewSingle}>

        <View>
          <Spacing space={SH(50)} />
          <View style={AgeStyles.textcenterview}>
            <Text style={[AgeStyles.Text, AgeStyles.TextBold]}>
              What's your goal?
            </Text>
            <Spacing space={SH(15)} />
            <Text style={[AgeStyles.TextNormal]}>
              Various versions have evolved over the years, sometimes by accident,
            </Text>
          </View>
        </View>

        <View style={AgeStyles.yourAgeMainBox}>

          <Picker
            style={AgeStyles.GoalPickerView}
            selectedValue='Get Filter'
            pickerData={Items}
            onValueChange={value => { console.log(value) }}
            textColor={colorsset.white}
            textSize={SF(20)}
            selectTextColor={colorsset.white}
            isShowSelectLine={true} // Default is true
            selectLineColor={colorsset.theme_backgound_second}
            selectLineSize={6} // Default is 4
          />
        </View>
        <View>
          <View style={Authentications.buttonMainView}>
            <View style={Authentications.buttonView}>
              <Button title="" LeftArraow={true} buttonStyle={Authentications.PrevButton} onPress={() => navigation.navigate(RouteName.WEIGHT_SCREEN)} />
            </View>
            <View style={Authentications.buttonView}>
              <Button title="Next" buttonStyle={Authentications.nextButton} nextArraow={true} onPress={() => navigation.navigate(RouteName.WE_HELP_SCREEN)} />
            </View>
          </View>
          <Spacing space={SH(25)} />
        </View>

      </View>
    </Container>
  );
};
export default GoalScreen;
