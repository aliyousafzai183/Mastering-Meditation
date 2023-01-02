import React, { useState, useMemo } from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { HomeStyle } from '../../styles';
import { Button, Container, Spacing, OtpInput, SweetAlertModal, BottomTab, AppHeader, WeeklyGoal, BottomTabMenu } from '../../components';
import images from '../../index';
import { RouteName } from '../../routes';
import { SH } from '../../utils';
import { useTheme } from '@react-navigation/native';
const ExerciseVideo = (props) => {
  const { colorsset } = useTheme();
  const HomeStyles = useMemo(() => HomeStyle(colorsset), [colorsset]);
  const { navigation } = props;
  const BeginersData = [{ id: "1", title: "Soft Curve Workout", titletext: "Arms", image: images.category1 },
   { id: "2", title: "Toned", titletext: "Arms", image: images.category2 }, 
   { id: "3", title: "Toned", titletext: "Arms", image: images.category3 }, 
   { id: "4", title: "Soft Curve Workout", titletext: "Arms", image: images.category4 },
   { id: "5", title: "Soft Curve Workout", titletext: "Arms", image: images.category5 },
   { id: "6", title: "Soft Curve Workout", titletext: "Arms", image: images.category6 }]
  const SkillsData =[
  { id: "1", title: "Toned", titletext: "Arms", image: images.yoga3 }, 
  { id: "2", title: "Soft Curve Workout", titletext: "Arms", image: images.yoga4 },
  { id: "3", title: "Soft Curve Workout", titletext: "Arms", image: images.yoga5 },
  { id: "4", title: "Soft Curve Workout", titletext: "Arms", image: images.yoga6 }];
  
  const MasterData = [{ id: "1", title: "Soft Curve Workout", titletext: "Arms", image: images.category2 },
  { id: "2", title: "Toned", titletext: "Arms", image: images.yoga2 }, 
  { id: "3", title: "Toned", titletext: "Arms", image: images.category3 }, 
  { id: "4", title: "Soft Curve Workout", titletext: "Arms", image: images.category4 },
  { id: "5", title: "Soft Curve Workout", titletext: "Arms", image: images.yoga5 },
  { id: "6", title: "Soft Curve Workout", titletext: "Arms", image: images.category6 }];
  const [tabIndex, setTabIndex] = useState(1);

  const onpressHandle = () => {
    navigation.navigate(RouteName.WORKOUT_DETAIL_SCREEN)
  }

  const videoListView = (item, index) => {
    return (
      <>
        <TouchableOpacity onPress={() => onpressHandle(index)} style={[HomeStyles.RecentAllViewBoxYoga,(index == 1 || index == 3 || index == 5 ) ? HomeStyles.RecentAllViewBoxYogaBoxTopSpace :HomeStyles.RecentAllViewBoxYogaBoxBottomSpace]}>
          <View style={HomeStyles.viewImageBoxYoga}>
            <Spacing space={SH(50)} />
            <View>
              <Image source={item.image} resizeMode='contain' style={HomeStyles.setbgimageYoga} />
            </View>
            <View>
              <Spacing space={SH(30)} />
              <Text style={[HomeStyles.ImageTitleDaySizeYoga]}>{item.title}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </>
    )
  }
  return (
    <Container>
      <BottomTabMenu {...props} selected={1} />
      <Spacing space={SH(20)} />

      <View style={HomeStyles.VideoTab}>
        <TouchableOpacity onPress={() => setTabIndex(1)}>
          <Text style={[HomeStyles.VideoTabText, tabIndex == 1 && HomeStyles.activeBorder]}>Beginers</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setTabIndex(2)}>
          <Text style={[HomeStyles.VideoTabText, tabIndex == 2 && HomeStyles.activeBorder]}>Intermediate</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setTabIndex(3)}>
          <Text style={[HomeStyles.VideoTabText, tabIndex == 3 && HomeStyles.activeBorder]}>Expert</Text>
        </TouchableOpacity>
      </View>
      <Spacing space={SH(20)} />

      <ScrollView>
        <View style={HomeStyles.textcenterview}>
          <View>
            <FlatList
              data={tabIndex == 1 ? BeginersData : tabIndex == 2 ? SkillsData : MasterData}
              renderItem={({ item, index }) => videoListView(item, index)}
              keyExtractor={(item, index) => index.toString()}
              horizontal={false}
              numColumns={2}
            />
          </View>
        </View>

      </ScrollView>
      <Spacing space={SH(80)} />

    </Container>
  );
};
export default ExerciseVideo;
