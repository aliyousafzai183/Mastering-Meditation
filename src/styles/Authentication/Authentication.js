import { StyleSheet } from 'react-native';
import { SF, SH, SW, Fonts } from '../../utils';

export default Authentication = (colorsset) => StyleSheet.create({
  textcenterview: {
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    paddingHorizontal: SW(15),
  },
  Text: {
    color: colorsset.white,
    fontSize: SF(25),
    textAlign: 'center',
  },
  TextBold: {
    fontFamily: Fonts.RobotoCondensed_Bold
  },
  TextNormal: {
    color: colorsset.white,
    fontSize: SF(15),
    textAlign: 'center',
    lineHeight: SH(20)
  },
  yourSelfRoundMainBox: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  yourSelfRoundActiveBox: {
    backgroundColor: colorsset.theme_backgound_second,

  },
  yourSelfRoundBox: {
    width: SW(120),
    height: SH(120),
    backgroundColor: colorsset.theme_dark_gray,
    borderRadius: SH(120),
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  yourSelfRoundText: {
    color: colorsset.white,
    fontSize: SF(20),
    textAlign: 'center',
    fontWeight: 'bold'
  },
  nextButton: {
    width: SW(150),
    alignSelf: 'flex-end'
  },
  buttonView: {
    paddingHorizontal: SW(20)
  },
  yourSelfRoundImage: {
    width: SW(30),
    height: SH(30),
    tintColor: "#ffffff",
  },
  setbgMainView: {
    flex: 1,
  },
  setbgimageView: {
    height: SH(450),
    position: 'relative',
    backgroundColor: colorsset.theme_backgound,
    overflow: "hidden",
    borderBottomEndRadius: 50,
    borderBottomStartRadius: 50,
  },
  setbgimage: {
    height: '100%',
    position: 'relative',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingHorizontal: SW(20)
  },
  loginSignUpTextView: {
    marginBottom: SH(40)
  },
  imageText: {
    fontSize: SF(30),
    color: colorsset.white,
    fontFamily: Fonts.RobotoCondensed_Regular
  },
  loginSignUpTab: {
    marginTop: SH(30),
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  loginSignUpText: {
    color: colorsset.white,
    fontSize: SF(20),
    marginHorizontal: SW(10),
    lineHeight: 45,
    fontFamily: Fonts.RobotoCondensed_Bold
  },
  activeBorder: {
    borderColor: colorsset.theme_backgound_second,
    borderBottomWidth: 2,
  },
  inputView: {
    paddingHorizontal: SH(30)
  },
  forgotText: {
    color: colorsset.theme_backgound,
    alignSelf: 'flex-end',
    paddingTop: SH(10),
    fontFamily: Fonts.RobotoCondensed_Regular
  },
  verificationInputView: {
    paddingHorizontal: SH(30),
    marginTop: SH(50)
  },
  verificationTextTitle: {
    color: colorsset.theme_backgound_second,
    fontSize: SF(25),
    fontFamily: Fonts.RobotoCondensed_Bold
  },
  verificationText: {
    color: colorsset.theme_backgound,
    fontSize: SF(16),
    fontFamily: Fonts.RobotoCondensed_Bold,
  },
  resendText: {
    color: colorsset.theme_backgound,
    paddingTop: SH(10),
    textAlign: 'center',
    fontFamily: Fonts.RobotoCondensed_Bold
  },
  VerifyButton: {
    width: SW(150),
    alignSelf: 'center'
  },

  buttonMainView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  PrevButton: {
    width: SW(50),
    height: SH(50),
    alignSelf: 'flex-end',
    backgroundColor: colorsset.transpharent,
    // borderColor:colorsset.theme_backgound_second,
    // borderWidth:2
  },
  verifyMainView: {
    height: '100%',
    position: 'relative',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingHorizontal: SW(20),
  },

  MainViewSingle: {
    height: '100%',
    position: 'relative',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});