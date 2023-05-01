import React, { useState,useMemo } from 'react';
import { View, Text, TouchableOpacity, FlatList, ScrollView, Image } from 'react-native';
import { HomeStyle } from '../../styles';
import { Container, Spacing, BottomTabMenu } from '../../components';
import images from '../../images';
import { RouteName } from '../../routes';
import { SH } from '../../utils';
import { useTheme } from '@react-navigation/native';
const HomeScreen = (props) => {
  const { colorsset } = useTheme();
  const HomeStyles = useMemo(() => HomeStyle(colorsset), [colorsset]);
  const { navigation } = props;
 const workoutData = [{ id: "1", title: "Mind",titletext: "Let's train it",image:images.slideimage1}, { id: "2", title: "Sleep",titletext: "Stomach",image:images.slideimage2 }, { id: "3", title: "Relax",titletext: "Stomach",image:images.slideimage3 }, { id: "4", title: "Focus",titletext: "Stomach",image:images.slideimage4 },{ id: "1", title: "Mind",titletext: "Let's train it",image:images.slideimage1}, { id: "2", title: "Sleep",titletext: "Stomach",image:images.slideimage2 }]

  const onpressHandle = (id) => {
      navigation.navigate(RouteName.WORKOUT_DETAIL_SCREEN)
  }
 
  const workOutView = (item, index) => {
    return (
      <TouchableOpacity onPress={()=>onpressHandle(index)} style={HomeStyles.RecentAllViewBox}>
         <View style={HomeStyles.viewImageBox}>
            <Image source={item.image} resizeMode='cover' style={HomeStyles.setbgimage}  />
            <Spacing space={SH(20)} />
            <Text style={[HomeStyles.ImageTitleDaySize]}>{item.title}</Text>
            <Text style={HomeStyles.ImageTitle}>{item.titletext}</Text>
          
        </View>
    </TouchableOpacity>

    )
  }

  return (
    <Container>
      <BottomTabMenu {...props} selected={0} />
      <FlatList
        data={[{ key: 'content' }]}
        renderItem={() => (
          <View style={HomeStyles.textcenterview}>
            <Spacing space={SH(20)} />
            <View style={HomeStyles.userIconView}>
              <View style={HomeStyles.userIconBox}>
                <Image
                  source={images.userIcon}
                  style={HomeStyles.userIcon}
                  resizeMode="cover"
                />
              </View>
  
              <Text style={HomeStyles.userTitle}>Hey Pinal!</Text>
            </View>
            <Spacing space={SH(30)} />
            <View style={HomeStyles.textView}>
              <Text style={HomeStyles.heading}>What's your mood today?</Text>
            </View>
  
            <Spacing space={SH(40)} />
            <View style={HomeStyles.HomeCommonView}>
              <Text style={HomeStyles.HomeCommonTitle}>Latest Practices</Text>
              <Text style={[HomeStyles.HomeCommonTitle, HomeStyles.viewAllColor]}>
                View All
              </Text>
            </View>
            <Spacing space={SH(20)} />
  
            <View style={HomeStyles.RecentAllView}>
              <FlatList
                data={workoutData}
                renderItem={({ item, index }) => workOutView(item, index)}
                keyExtractor={(item, index) => index.toString()}
                horizontal={false}
                numColumns={2}
              />
            </View>
            <Spacing space={SH(80)} />
          </View>
        )}
        keyExtractor={(item) => item.key}
      />
    </Container>
  );
};
export default HomeScreen;
