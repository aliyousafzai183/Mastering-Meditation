import {SafeAreaView, StyleSheet, View} from 'react-native';
import React, {useMemo} from 'react';
import propTypes from 'prop-types';
import { useTheme } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
function ContainerComponent({
  children,
  fullScreen,
  statusBarPropStyle,
  containerPropStyle,
}) {
  const { colorsset } = useTheme();
  const styles = useMemo(
    () =>
      StyleSheet.create({
        statusBarStyle: {
          flex: 0,
          backgroundColor: colorsset.transpharent,
        },
        containerStyle: {
          flex: 1,
          backgroundColor: colorsset.transpharent,
        },
        linearGradient: {
          flex: 1
        },
      }),
    [colorsset],
  );
  return fullScreen ? (
    <View style={[styles.containerStyle, {...containerPropStyle}]}>
      {children}
    </View>
  ) : (
    <View style={[styles.containerStyle, {...containerPropStyle}]}>
    <LinearGradient
    start={{ x: 0, y: 0 }}
    end={{x: 1, y: 1 }}
    colors={[colorsset.theme_linear_gradient_1, colorsset.theme_linear_gradient_2, colorsset.theme_linear_gradient_3, colorsset.theme_linear_gradient_4, colorsset.theme_linear_gradient_2, colorsset.theme_linear_gradient_4,colorsset.theme_linear_gradient_2]}
    style={styles.linearGradient}>
      <SafeAreaView
        style={[
          styles.statusBarStyle,
          {statusBarPropStyle},
        ]}
      />
      <SafeAreaView style={[styles.containerStyle, {...containerPropStyle}]}>
        {children}
      </SafeAreaView>
    </LinearGradient>
    </View>
  );
}

ContainerComponent.defaultProps = {
  fullScreen: false,
  statusBarPropStyle: {},
  containerPropStyle: {},
};

ContainerComponent.propTypes = {
  fullScreen: propTypes.bool,
  statusBarPropStyle: propTypes.shape({}),
  containerPropStyle: propTypes.shape({}),
};

export default ContainerComponent;
