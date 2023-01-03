import React, { useState, useMemo } from 'react';
import { View, Text, Image } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { GetstartedSliderStyle } from '../../styles/GetstartedSliderscreen';
import { Button, Container, LottieIcon, Spacing } from '../../components';
import images from '../../index';
import { RouteName } from '../../routes';
import { useTheme } from '@react-navigation/native';
import { SH } from '../../utils';

const GetstartedSliderscreen = (props) => {
  const { colorsset } = useTheme();
  const GetstartedSliderStyles = useMemo(() => GetstartedSliderStyle(colorsset), [colorsset]);
 
  const { navigation } = props;
  const slides = [
    {
      key: '1',
      text: "Meet Your Coach",
      boldText: 'Start your journey',
    },
    {
      key: '2',
      text: "Get stronger and",
      boldText: 'fitter with us',
    },
    {
      key: '3',
      text: "Make this season",
      boldText: 'better with fitness',
    },

  ];

  const RenderItem = ({ item }) => {
    return (
      <View>
        <View style={[GetstartedSliderStyles.minstyleviewphotograpgy, { backgroundColor: colorsset.transpharent }]}>
          <View style={GetstartedSliderStyles.mainInnerView}>
          
            <View style={GetstartedSliderStyles.smallimagcenter}>
          
              {item.key == 1 ?
                <LottieIcon source={images.slide1} style={[GetstartedSliderStyles.imagesetus, GetstartedSliderStyles.imageSlide1]} />
                : item.key == 2 ?
                  <LottieIcon source={images.slide2} style={[GetstartedSliderStyles.imagesetus, GetstartedSliderStyles.imageSlide2]} />
                  :
                  <LottieIcon source={images.slide3} style={[GetstartedSliderStyles.imagesetus, GetstartedSliderStyles.imageSlide3]} />
              }

            </View>

            <View style={GetstartedSliderStyles.textcenterview}>
              <Text style={GetstartedSliderStyles.sliderText}>
                {item.text}
              </Text>
              <Text style={[GetstartedSliderStyles.sliderText, GetstartedSliderStyles.sliderTextBold]}>
                {item.boldText}
              </Text>
            </View>
            {item.key == 1 ?
              <Spacing space={SH(30)} />
              : item.key == 2 ?
                <Spacing space={SH(0)} />
                :
                <Spacing space={SH(0)} />
            }
          </View>
        </View>
      </View>
    );
  };
  const _renderDoneButton = () => {
    return (
      <View style={GetstartedSliderStyles.setbgbuttondiv}>
        <View style={GetstartedSliderStyles.buttonCircle}>
          <Button
            title="Let's get started"
            onPress={() => navigation.navigate(RouteName.ABOUT_SELF_SCREEN)}
          />
        </View>
      </View>
    );
  };

  return (
    <Container>
      <AppIntroSlider
        data={slides}
        renderItem={RenderItem}
        showNextButton={false}
        showSkipButton={false}
        renderDoneButton={_renderDoneButton}
        activeDotStyle={GetstartedSliderStyles.activebutonstyleset}
        dotStyle={GetstartedSliderStyles.dotStyle}
      />
    </Container>
  );
};
export default GetstartedSliderscreen;
