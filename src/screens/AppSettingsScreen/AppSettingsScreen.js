import React, { useState,useMemo } from 'react';
import { View, Text, Pressable, TouchableOpacity, Modal, Switch, ScrollView } from 'react-native';
import { HomeStyle,Settings } from '../../styles';
import { SweetAlertModal, Container, Spacing, } from '../../components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconF from 'react-native-vector-icons/AntDesign';
import { SH } from '../../utils';
import { useTheme } from '@react-navigation/native';
const AppSettingsScreen = (props) => {
    const { colorsset } = useTheme();
    const HomeStyles = useMemo(() => HomeStyle(colorsset), [colorsset]);
    const Settingss = useMemo(() => Settings(colorsset), [colorsset]);
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const [successModalVisible, setSuccessModalVisible] = useState(false);
    const onPressHandle = () => {
      setSuccessModalVisible(false)
    }
    return (
        <Container>
            <ScrollView>
                <View style={HomeStyles.textcenterview}>
                    <View style={Settingss.topspaceview}>
                        <View style={Settingss.minflexview}>
                            <View style={Settingss.togglrswitchflex}>
                                <View>
                                    <Text style={Settingss.cellulardatatext}>Cellular Data</Text>
                                </View>
                            </View>
                            <View style={Settingss.toggleswotchview}>
                                <Text style={Settingss.downlodtoggleswitchtext}>
                                    Cellular Data for Downnloads
                                </Text>
                                <View>
                                    <Switch
                                        trackColor={{ false: "lightgray", true: "lightgray" }}
                                        thumbColor={isEnabled ? "hsl(214.3, 83.2%, 51%)" : "white"}
                                        ios_backgroundColor="#3e3e3e"
                                        onValueChange={toggleSwitch}
                                        value={isEnabled}
                                    />
                                </View>
                            </View>
                            <Text style={Settingss.cellulardatatext}>Video Quality for Downloads</Text>
                            <View style={Settingss.righticonminview}>
                                <View>
                                    <Text style={Settingss.standardrecommedtext}>Standard (recommended)</Text>
                                    <Text style={Settingss.downloadfastertext}>Downnloads faster and uses less storage</Text>
                                </View>
                                <View>
                                    <IconF
                                        size={30}
                                        name="check"
                                        style={Settingss.chekiconstyle}
                                    />
                                </View>
                            </View>
                            <View style={Settingss.righticonminview}>
                                <View>
                                    <Text style={Settingss.standardrecommedtext}>High Definition</Text>
                                    <Text style={Settingss.downloadfastertext}>Use more storage</Text>
                                </View>
                            </View>
                            <Text style={Settingss.offlinedoenloadstextset}>Offline Downloads</Text>
                            <View style={Settingss.righticonminview}>
                                <View style={Settingss.bodysettextwidth}>
                                    <Text style={Settingss.standardrecommedtext}>Delete Completed Lessons</Text>
                                    <Text style={Settingss.downloadfastertext}>Lessons can automatically delete 24 hours after they are watched in full</Text>
                                </View>
                                <View>
                                    <IconF
                                        size={30}
                                        name="check"
                                        style={Settingss.chekiconstyle}
                                    />
                                </View>
                            </View>
                            <View style={Settingss.righticonminviewtwo}>
                                <View style={Settingss.bodysettextwidth}>
                                    <Text style={Settingss.deletedownloads}>Delete All Downloads</Text>
                                    <Text style={Settingss.downloadfastertext}>This will remove all downloaded Lessons Videos From your Phone</Text>
                                </View>
                              
                                <Pressable
                                    onPress={() => setSuccessModalVisible(true)}
                                >
                                    <Icon
                                        size={30}
                                        name="delete"
                                        style={Settingss.redcoloricondelete}
                                    />
                                </Pressable>
                            </View>
                        </View>
                    </View>
                </View>
                <Spacing space={SH(80)} />

            </ScrollView>
            <SweetAlertModal
          message={"Deleted Successfully"}
          modalVisible={successModalVisible}
          setModalVisible={setSuccessModalVisible}
          onPress={() => onPressHandle()}
          success={true}
          buttonText="OK"
        />
        </Container>
    );
};
export default AppSettingsScreen;
