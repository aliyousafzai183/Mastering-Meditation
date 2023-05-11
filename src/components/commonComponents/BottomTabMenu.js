import React from 'react';
import { StyleSheet } from 'react-native';
import BottomTab from './BottomTab';
import { Fonts, SF, SH } from '../../utils';
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import { RouteName } from '../../routes';
import { useTheme } from '@react-navigation/native';

function BottomTabMenu(props) {
  const { colorsset } = useTheme();

  const { navigation, selected } = props;
  const tabs = [
    {
      id: '1',
      name: '',
      activeIcon: <Icon name="home" color={colorsset.white} size={SF(25)} />,
      inactiveIcon: <Icon name="home" color={colorsset.white} size={SF(25)} />
    },
    {
      id: '2',
      name: '',
      activeIcon: <Icon name="flower-tulip" color={colorsset.white} size={SF(25)} />,
      inactiveIcon: <Icon name="flower-tulip" color={colorsset.white} size={SF(25)} />
    },
    {
      id: '3',
      name: '',
      activeIcon: <Icon name="heart" color={colorsset.white} size={SF(25)} />,
      inactiveIcon: <Icon name="heart" color={colorsset.white} size={SF(25)} />
    },
    {
      id: '4',
      name: '',
      activeIcon: <Icon name="account" color={colorsset.white} size={SF(25)} />,
      inactiveIcon: <Icon name="account" color={colorsset.white} size={SF(25)} />
    },
  ];

  const onPressHandle = (id) => {
    id == 1 ? 
    navigation.replace(RouteName.HOME_SCREEN)
    : id == 2 ?
    navigation.navigate(RouteName.YOGA_SCREEN)
    : id == 3 ?
    navigation.navigate(RouteName.MEDITATION_SCREEN)
    : navigation.navigate(RouteName.CATEGORY_SCREEN)
  }

  return (
    <BottomTab
      tabs={tabs}
      tabBarContainerBackground={colorsset.theme_backgound_second}
      tabBarBackground={colorsset.white}
      activeTabBackground={colorsset.theme_backgound_second}
      labelStyle={{ color: colorsset.white, fontSize: SF(10), fontFamily:Fonts.RobotoCondensed_Bold }}
      onTabChange={(e) => onPressHandle(e.id)}
      defaultActiveTabIndex={selected}
    />
  );
}

export default BottomTabMenu;
