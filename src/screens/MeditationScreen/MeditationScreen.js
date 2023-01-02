import React, { useState, useMemo } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { HomeStyle } from '../../styles';
import {  Container, Spacing, BottomTabMenu, LottieIcon } from '../../components';
import images from '../../index';
import { RouteName } from '../../routes';
import { SH } from '../../utils';
import { useTheme } from '@react-navigation/native';
const MeditationScreen = (props) => {
  const { colorsset } = useTheme();
  const HomeStyles = useMemo(() => HomeStyle(colorsset), [colorsset]);
  const { navigation } = props;
  const BeginersData = [{ id: "1", time: "20 mins", title: "Breather", titletext: "t is a long established fact that a reader will be distracted by the readable content of", image: images.meditation1 },
   { id: "2", time: "21 mins", title: "Toned", titletext: "t is a long established fact that a reader will be distracted by the readable content of", image: images.meditation2 }, 
   { id: "3", time: "10 mins", title: "Toned", titletext: "t is a long established fact that a reader will be distracted by the readable content of", image: images.meditation3 }, 
   { id: "4", time: "15 mins", title: "Soft Curve Workout", titletext: "t is a long established fact that a reader will be distracted by the readable content of", image: images.meditation1 },]

  const [tabIndex, setTabIndex] = useState(1);

  const onpressHandle = () => {
    navigation.navigate(RouteName.WORKOUT_DETAIL_SCREEN)
  }

  const videoListView = (item, index) => {
    return (
      <>
        <TouchableOpacity onPress={() => onpressHandle(index)} style={[HomeStyles.RecentAllViewBoxMeditation]}>
          <View style={HomeStyles.viewImageBoxMeditation}>
          
            <Image source={item.image} resizeMode='contain' style={HomeStyles.setbgimageMeditation} />
            <View style={HomeStyles.viewImageBoxTextMeditation}>

              <Text style={[HomeStyles.ImageTitleDaySizeMeditationTime]}>{item?.time}</Text>
              <Spacing space={SH(10)} />

              <Text style={[HomeStyles.ImageTitleDaySizeMeditation]}>{item.title}</Text>
              <Spacing space={SH(10)} />

              <Text style={[HomeStyles.ImageDescriptionMeditation]}>{item.titletext}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </>
    )
  }
  return (
    <Container>
      <BottomTabMenu {...props} selected={2} />
      <Spacing space={SH(20)} />
      <View style={HomeStyles.meditationImageView}>
      <LottieIcon source={images.meditationbg} style={HomeStyles.meditationImageicon} />
      </View>
      <View style={HomeStyles.VideoTab}>
        <TouchableOpacity onPress={() => setTabIndex(1)}>
          <Text style={[HomeStyles.VideoTabText, tabIndex == 1 && HomeStyles.activeBorder]}>Beginers</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setTabIndex(2)}>
          <Text style={[HomeStyles.VideoTabText, tabIndex == 2 && HomeStyles.activeBorder]}>Skills</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setTabIndex(3)}>
          <Text style={[HomeStyles.VideoTabText, tabIndex == 3 && HomeStyles.activeBorder]}>Master</Text>
        </TouchableOpacity>
      </View>
      <Spacing space={SH(20)} />

      <ScrollView>
        <View style={HomeStyles.textcenterview}>
          <View>
            <FlatList
              data={BeginersData}
              renderItem={({ item, index }) => videoListView(item, index)}
              keyExtractor={(item, index) => index.toString()}
              horizontal={false}
            />
          </View>
        </View>

      </ScrollView>
      <Spacing space={SH(80)} />

    </Container>
  );
};
export default MeditationScreen;
