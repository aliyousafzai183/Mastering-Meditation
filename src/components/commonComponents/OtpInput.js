import React, { useState, useMemo } from 'react';
import { StyleSheet } from 'react-native';
import propTypes from 'prop-types';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {  SH } from '../../utils';
import { useTheme } from '@react-navigation/native';

function Otp(props) {
    const { pinnum, code, onCodeChanged } = props;
    const { colorsset } = useTheme();

    const Styles = useMemo(() =>
        StyleSheet.create({
            minviewotpin: {
                width: 183,
                height: 50,
            },
            settextinputstyle: {
                width: 50,
                height: 50,
                padding: 0,
                color: colorsset.theme_backgound,
                backgroundColor: colorsset.transpharent,
                fontSize: 24,
                borderWidth:0,
                borderWidth: 1,
                borderColor: colorsset.theme_backgound_second,
                fontWeight: '700',
                borderRadius: 5,
                marginHorizontal:SH(10)
            },
            setinputtexttwo: {
                color: colorsset.theme_backgound,
                fontSize: 24,
                height: 40,
                fontWeight: '700',
                borderRadius: 0,
            },
        })
    )


    return (
        <OTPInputView
            style={Styles.minviewotpin}
            pinCount={pinnum}
            autoFocusOnLoad={false}
            code={code}
            onCodeChanged={(code) => onCodeChanged(code)}
            codeInputFieldStyle={Styles.settextinputstyle}
            codeInputHighlightStyle={Styles.setinputtexttwo}
        // autoComplete="sms-otp"
        />
    )
}

Otp.defaultProps = {
    title: '',
    placeholder: '',
    titleStyle: {},
    inputStyle: {},
    onCodeChanged: () => { },
    onFocus: () => { },
    onBlur: () => { },
    value: '',
    textprops: {},
    inputprops: {},
    inputType: null,
};

Otp.propTypes = {
    title: propTypes.string,
    placeholder: propTypes.string,
    titleStyle: propTypes.shape({}),
    inputStyle: propTypes.shape({}),
    onCodeChanged: propTypes.func,
    value: propTypes.string,
    textprops: propTypes.object,
    inputprops: propTypes.object,
    onFocus: propTypes.func,
    onBlur: propTypes.func,
    inputType: propTypes.any,
};

export default Otp;
