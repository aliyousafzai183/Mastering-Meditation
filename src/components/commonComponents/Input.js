import React, { useMemo } from 'react';
import propTypes from 'prop-types';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { SF, SH, SW,Fonts } from '../../utils';
import { useTheme } from '@react-navigation/native';

function Input({
  title,
  placeholder,
  titleStyle,
  inputStyle,
  onChangeText,
  value,
  textprops,
  inputprops,
  onBlur,
  onFocus,
  inputType,
  autoFocus,
  autoCompleteType,
  secureTextEntry,
  maxLength }) {
    const { colorsset } = useTheme();

  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: { width: '100%' },
        title_style: {
          width: '100%',
          fontSize: SF(13),
          color: colorsset.theme_backgound,
          fontFamily:Fonts.RobotoCondensed_Bold,
          ...titleStyle,
        },
        input_style: {
          width: '100%',
          borderBottomWidth: SH(1),
          borderColor: colorsset.theme_backgound_second,
          fontSize: SF(15),
          color: colorsset.theme_backgound_second,
          paddingVertical:SH(8),
          fontFamily:Fonts.RobotoCondensed_Regular,
          ...inputStyle,
        },
      }),
    [title, titleStyle, inputStyle, colorsset],
  );
  return (
    <View style={styles.container}>
      {title &&
        <Text style={styles.title_style} {...textprops}>
          {title}
        </Text>
      }
      <TextInput
        style={styles.input_style}
        placeholder={placeholder}
        placeholderTextColor={colorsset.theme_backgound_second}
        autoCompleteType={autoCompleteType}
        onChangeText={(text) => onChangeText(text)}
        secureTextEntry={secureTextEntry}
        value={value}
        keyboardType={!inputType ? 'default' : inputType}
        selectionColor={colorsset.theme_backgound_second}
        onFocus={() => onFocus()}
        onBlur={() => onBlur()}
        autoFocus={autoFocus}
        maxLength={maxLength}
        {...inputprops}
      />
    </View>
  );
}

Input.defaultProps = {
  title: '',
  placeholder: '',
  titleStyle: {},
  inputStyle: {},
  onChangeText: () => { },
  onFocus: () => { },
  onBlur: () => { },
  value: '',
  textprops: {},
  inputprops: {},
  inputType: null,
  autoCompleteType: ''
};

Input.propTypes = {
  title: propTypes.string,
  autoCompleteType: propTypes.string,
  placeholder: propTypes.string,
  titleStyle: propTypes.shape({}),
  inputStyle: propTypes.shape({}),
  onChangeText: propTypes.func,
  value: propTypes.string,
  textprops: propTypes.object,
  inputprops: propTypes.object,
  onFocus: propTypes.func,
  onBlur: propTypes.func,
  inputType: propTypes.any,
};

export default Input;
