import React, { useMemo } from 'react';
import {  View, Text, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { HomeStyle } from '../../styles';
import {  Container, Spacing,  BottomTabMenu } from '../../components';
import images from '../../index';
import { RouteName } from '../../routes';
import { SH } from '../../utils';
import { useTheme } from '@react-navigation/native';
const ExerciseVideo = (props) => {
  const { colorsset } = useTheme();
  const HomeStyles = useMemo(() => HomeStyle(colorsset), [colorsset]);
  const { navigation } = props;
  const BeginersData = [{ id: "1", title: "Stay Calm",  image: images.yoga1 },
   { id: "2", title: "Manage Desires",  image: images.yoga2 }, 
   { id: "3", title: "Heal and relax",  image: images.yoga3 }, 
   { id: "4", title: "Build Courage",  image: images.yoga4 },
   { id: "5", title: "Core practices", image: images.yoga5 },
   { id: "6", title: "For better sleep",  image: images.yoga6 },
   { id: "7", title: "Stay Calm",  image: images.yoga1 },
   { id: "8", title: "Manage Desires",  image: images.yoga2 }, 
   { id: "9", title: "Heal and relax",  image: images.yoga3 }, 
   { id: "10", title: "Build Courage",  image: images.yoga4 },
   { id: "11", title: "Core practices", image: images.yoga5 },
   { id: "12", title: "For better sleep",  image: images.yoga6 }]
 

  const onpressHandle = () => {
    navigation.navigate(RouteName.WORKOUT_DETAIL_SCREEN)
  }

  const videoListView = (item, index) => {
    return (
      <>
        <TouchableOpacity onPress={() => onpressHandle(index)} style={[HomeStyles.RecentAllViewBoxCategory]}>
          <View style={HomeStyles.viewImageBoxCategory}>
            <Spacing space={SH(20)} />
            <View style={HomeStyles.viewImageBoxBgCategory}>
              <Image source={item.image} resizeMode='contain' style={HomeStyles.setbgimageCategory} />
            </View>
            <View>
              <Spacing space={SH(30)} />
              <Text style={[HomeStyles.ImageTitleDaySizeCategory]}>{item.title}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </>
    )
  }
  return (
    <Container>
      <BottomTabMenu {...props} selected={3} />
      <Spacing space={SH(20)} />

      <ScrollView>
        <View style={HomeStyles.textcenterview}>
        <View style={HomeStyles.textViewCategory}>
            <Text style={HomeStyles.heading}>Why do you want to meditate?</Text>
          </View>
          <View>
            <FlatList
              data={BeginersData}
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
