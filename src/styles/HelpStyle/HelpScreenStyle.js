import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { SF, SH, SW, Fonts,  ColorTheme } from '../../utils';

export default HelpStyle = (colorsset) => StyleSheet.create({
  minstyleviewphotograpgy: {
    flexDirection: 'row',
    justifyContent: 'center',
    // alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  bgcolorset: {
    backgroundColor: ColorTheme.BGScreen
  },
  keybordtopviewstyle: {
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  minviewsigninscreen: {
    width: '90%',
    height: '100%',
    marginHorizontal: '5%',
  },
  minflexview: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    paddingBottom: 200,
    paddingTop: 5,
  },
  settextinputwidth: {
    backgroundColor: 'white',
    borderRadius: 7,
    paddingBottom: 100,
    paddingLeft: 10,
    paddingRight: 10,
    color: ColorTheme.TextGreyColor,
    fontFamily: Fonts.Metropolis_Medium,
  },
  settextinputtext: {
    fontFamily: Fonts.Metropolis_Medium,
    color: 'white',
    fontSize: 16,
    lineHeight: 20,
    marginTop: 20,
  },
  setbuttonstyle: {
    position: 'absolute',
    bottom: 5,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingBottom: 5,
  },
  settopspace: {
    paddingTop: 25,
  }
});