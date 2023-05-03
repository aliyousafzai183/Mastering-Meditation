import React, { useMemo } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import propTypes from 'prop-types';
import {  SF, SH, SW, Fonts } from '../../utils';
import { useTheme, useNavigation } from '@react-navigation/native';


function AppHeader({headerStyle, leftImage, title, rightImage, onLeftPress, onRightPress, titleStyle, LeftComponent = null,headerTitle }) {
    const { colorsset } = useTheme();

    const styles = useMemo(
        () =>
            StyleSheet.create({
                container: {
                    paddingVertical:SH(10),
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    backgroundColor: colorsset.theme_backgound_second,
                    ...headerStyle
                },
                leftView: {
                    // height: '100%',
                    width: '15%',
                    justifyContent: 'center',
                    alignItems: 'flex-start'
                },
                leftImageStyle: {
                    height: SH(18),
                    width: SW(18),
                    resizeMode: 'contain'
                },
                titleStyle: {
                    fontSize: SF(18),
                    fontWeight: '400',
                    color: colorsset.theme_dark_gray,
                    ...titleStyle

                },
                rightView: {
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center'
                },
                rightImageStyle: {
                    resizeMode: 'contain',
                    marginLeft: 5
                },
                headerTitle:{
                  color:colorsset.white,
                  fontSize:SF(22),
                  alignSelf:'flex-start',
                  fontFamily:Fonts.RobotoCondensed_Bold
                },
  
            }),
        [headerStyle, colorsset],
    );

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=>navigation.toggleDrawer()}>
            {headerTitle && <Text style={styles.headerTitle}>{headerTitle}</Text>}
            </TouchableOpacity>
            {leftImage && 
                <TouchableOpacity disabled={!leftImage} style={styles.leftView} onPress={() => onLeftPress()}>
                    <Image style={styles.leftImageStyle} source={leftImage} />
                </TouchableOpacity>
            }
            {rightImage &&
            <TouchableOpacity style={styles.rightView} onPress={() => onRightPress()}>
                    <Image source={rightImage} style={styles.rightImageStyle} />
            </TouchableOpacity>
            }
           

        </View>
    )
}

AppHeader.defaultProps = {
    headerStyle: {},
    leftImage: null,
    LeftComponent: null,
    title: '',
    rightImage: null,
    onLeftPress: () => { },
    headerTitle :''
};

AppHeader.propTypes = {
    headerStyle: propTypes.shape({}),
    leftImage: propTypes.any,
    LeftComponent: propTypes.any,
    title: propTypes.string,
    rightImage: propTypes.any,
    onLeftPress: propTypes.func,
    headerTitle: propTypes.string
};

export default AppHeader;