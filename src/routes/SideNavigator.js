import React from 'react';
import RouteName from './RouteName';
import {
  HomeScreen,EditProfileScreen, AppSettingsScreen, HelpScreen, YogaScreen, CategoryScreen, MeditationScreen
} from '../screens';
import { AppHeader, ColorPicker } from '../components';
import { colorsset, Fonts, SF } from '../utils';
import { createDrawerNavigator } from "@react-navigation/drawer";
const Drawer = createDrawerNavigator();
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import { View, Text } from 'react-native';



const SideNavigator = props => {
  const styleArray = {
    headerStyle: {
      backgroundColor: colorsset.theme_backgound_second,
    },
    headerShown: true,
    headerRight: (props) => <ColorPicker {...props} />,
    drawerActiveTintColor: colorsset.theme_backgound,
    drawerInactiveTintColor: colorsset.white,
    drawerLabelStyle: { color: colorsset.theme_backgound, fontSize: SF(18), fontFamily: Fonts.RobotoCondensed_Regular },
    drawerActiveBackgroundColor: colorsset.theme_backgound_second,
  };

  const drawerIcon = (focused, icon) => {
    return (
      <Icon
        name={icon}
        size={24}
        color={focused ? colorsset.theme_backgound : colorsset.theme_backgound_second}
      />
    )
  }

  const drawerTitle = (focused, title) => {
    return (
      <Text style={{ color: focused ? colorsset.white : colorsset.theme_backgound, fontSize: SF(18), fontFamily: Fonts.RobotoCondensed_Regular }}>{title}</Text>
    )
  }

  return (
    <Drawer.Navigator screenOptions={{
      headerShown: false,
      drawerStyle: {
        backgroundColor: colorsset.white,
        width: 240,
      }
    }} >
      <Drawer.Screen
        name={RouteName.MAIN_HOME_SCREEN} component={HomeScreen}
        options={{
          title: "Home",
          headerTitle: (props) => <AppHeader {...props} headerTitle="Home" />,
          ...styleArray,
          drawerIcon: ({ focused }) => drawerIcon(focused, "home"),
          drawerLabel: ({ focused }) => drawerTitle(focused, "Home")
        }}

      />
      <Drawer.Screen
        name={RouteName.YOGA_SCREEN} component={YogaScreen}
        options={{
          title: "Yoga",
          headerTitle: (props) => <AppHeader {...props} headerTitle="Yoga" />,
          ...styleArray,
          drawerIcon: ({ focused }) => drawerIcon(focused, "yoga"),
          drawerLabel: ({ focused }) => drawerTitle(focused, "Yoga")
        }}
      />
      <Drawer.Screen
        name={RouteName.MEDITATION_SCREEN} component={MeditationScreen}
        options={{
          title: "Meditation",
          headerTitle: (props) => <AppHeader {...props} headerTitle="Meditation" />,
          ...styleArray,
          drawerIcon: ({ focused }) => drawerIcon(focused, "flower-tulip"),
          drawerLabel: ({ focused }) => drawerTitle(focused, "Meditation")
        }}
      />
      <Drawer.Screen
        name={RouteName.CATEGORY_SCREEN} component={CategoryScreen}
        options={{
          title: "Category",
          headerTitle: (props) => <AppHeader {...props} headerTitle="Category" />,
          ...styleArray,
          drawerIcon: ({ focused }) => drawerIcon(focused, "shape"),
          drawerLabel: ({ focused }) => drawerTitle(focused, "Category")
        }}
      />
      <Drawer.Screen
        name={RouteName.EDIT_PROFILE_SCREEN} component={EditProfileScreen}
        options={{
          title: "Profile",
          headerTitle: (props) => <AppHeader {...props} headerTitle="Profile" />,
          ...styleArray,
          drawerIcon: ({ focused }) => drawerIcon(focused, "account"),
          drawerLabel: ({ focused }) => drawerTitle(focused, "Profile")
        }}
      />
      <Drawer.Screen
        name={RouteName.APP_SETTINGS_SCREEN} component={AppSettingsScreen}
        options={{
          title: "Settings",
          headerTitle: (props) => <AppHeader {...props} headerTitle="Settings" />,
          ...styleArray,
          drawerIcon: ({ focused }) => drawerIcon(focused, "cog"),
          drawerLabel: ({ focused }) => drawerTitle(focused, "Settings")
        }}
      />
      <Drawer.Screen
        name={RouteName.HELP_SCREEN} component={HelpScreen}
        options={{
          title: "Help",
          headerTitle: (props) => <AppHeader {...props} headerTitle="Help" />,
          ...styleArray,
          drawerIcon: ({ focused }) => drawerIcon(focused, "help-box"),
          drawerLabel: ({ focused }) => drawerTitle(focused, "Help")
        }}
      />
    </Drawer.Navigator>
  );
}
export default SideNavigator;