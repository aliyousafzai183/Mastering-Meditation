import React, { useState, Component ,useMemo} from 'react';
import { View, Text, ScrollView } from 'react-native';
import { AgeStyle, Authentication } from '../../../styles';
import { Button, Container, Spacing } from '../../../components';
import { RouteName } from '../../../routes';
import { SH, SF } from '../../../utils';
import { Picker } from 'react-native-wheel-pick';
import { useTheme } from '@react-navigation/native';

const WeightScreen = (props) => {
  const { colorsset } = useTheme();
  const AgeStyles = useMemo(() => AgeStyle(colorsset), [colorsset]);
  const Authentications = useMemo(() => Authentication(colorsset), [colorsset]);
  const { navigation } = props;

  const Items = ["30 kg", "40 kg", "50 kg", "60 kg", "70 kg", "80 kg", "90 kg", "100 kg", "110 kg"];
  return (
    <Container>
      <View style={Authentications.MainViewSingle}>
        <View>
          <Spacing space={SH(50)} />
          <View style={AgeStyles.textcenterview}>
            <Text style={[AgeStyles.Text, AgeStyles.TextBold]}>
              What's your weight ?
            </Text>
            <Spacing space={SH(15)} />
            <Text style={[AgeStyles.TextNormal]}>
              Many desktop publishing packages and web page editors now
            </Text>
          </View>
        </View>

        <View style={AgeStyles.yourAgeMainBox}>

          <Picker
            style={AgeStyles.WeightPickerView}
            selectedValue='70 kg'
            pickerData={Items}
            onValueChange={value => { console.log(value) }}
            textColor={colorsset.white}
            textSize={SF(25)}
            selectTextColor={colorsset.white}
            isShowSelectLine={true} // Default is true
            selectLineColor={colorsset.theme_backgound_second}
            selectLineSize={6} // Default is 4
          />
        </View>

        <View>
          <View style={Authentications.buttonMainView}>
            <View style={Authentications.buttonView}>
              <Button title="" LeftArraow={true} buttonStyle={Authentications.PrevButton} onPress={() => navigation.navigate(RouteName.AGE_SCREEN)} />
            </View>
            <View style={Authentications.buttonView}>
              <Button title="Next" buttonStyle={Authentications.nextButton} nextArraow={true} onPress={() => navigation.navigate(RouteName.GOAL_SCREEN)} />
            </View>
          </View>
          <Spacing space={SH(25)} />
        </View>
      </View>
    </Container>
  );
};
export default WeightScreen;
