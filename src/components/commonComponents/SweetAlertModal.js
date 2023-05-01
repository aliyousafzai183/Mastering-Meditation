import React, { useMemo } from "react";
import { Modal, Text, View } from "react-native";
import SweetAlertModalStyle from '../../styles/SweetAlertModalStyle';
import Button from './Button';
import LottieIcon from './LottieIcon';
import propTypes from 'prop-types';
import images from "../../index";
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../utils/colors';

function SweetaelertModal(props) {
    const Style = useMemo(() => SweetAlertModalStyle(colors), [colors]);
    const { message, modalVisible, setModalVisible, onPress, onPressCancel, buttonText, cancelButtonText, iconVisible, loginSuccess = false, success = false } = props;

    return <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
            setModalVisible(!modalVisible);
        }}
    >
        <View style={Style.setbgcolorgrsay}>
            <View style={Style.centeredView}>
                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    colors={[colors.theme_linear_gradient_1, colors.theme_linear_gradient_2, colors.theme_linear_gradient_3, colors.theme_linear_gradient_4, colors.theme_linear_gradient_2, colors.theme_linear_gradient_4, colors.theme_linear_gradient_2]}
                    style={Style.modalView}>

                    {iconVisible &&
                        <View style={Style.setroundcenter}>
                            <View style={Style.checkiconright}>
                            </View>
                        </View>
                    }
                    {loginSuccess &&
                        <LottieIcon
                            style={Style.loginSuccessIcon}
                            source={images.loginSuccess}
                            loop={false}
                        />
                    }
                    {success &&
                        <LottieIcon
                            style={Style.loginSuccessIcon}
                            source={images.success}
                            loop={false}
                        />
                    }
                    <View style={Style.registertextset}>
                        <Text style={Style.settext}>{message}</Text>
                    </View>
                    <View style={Style.buttonminview}>
                        {onPress &&
                            <View style={Style.setokbutton}>
                                <Button
                                    title={buttonText}
                                    onPress={() => onPress()}
                                />
                            </View>
                        }
                        {cancelButtonText &&
                            <View style={Style.setokbutton}>
                                <Button
                                    title={cancelButtonText}
                                    onPress={() => {
                                        setModalVisible(false);
                                        onPressCancel && onPressCancel();
                                    }}
                                />
                            </View>
                        }
                    </View>
                </LinearGradient>
            </View>
        </View>
    </Modal>
}

SweetaelertModal.propTypes = {
    message: propTypes.string.isRequired,
    modalVisible: propTypes.bool.isRequired,
    setModalVisible: propTypes.func.isRequired,
    onPress: propTypes.func,
    onPressCancel: propTypes.func,
    buttonText: propTypes.string.isRequired,
    cancelButtonText: propTypes.string,
    iconVisible: propTypes.bool,
    loginSuccess: propTypes.bool,
    success: propTypes.bool,
}

export default SweetaelertModal;