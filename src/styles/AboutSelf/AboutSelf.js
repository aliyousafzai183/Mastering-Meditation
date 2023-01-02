import { StyleSheet } from 'react-native';
import { SF, SH, SW, Fonts } from '../../utils';

export default AboutSelfStyle=(colorsset)=> StyleSheet.create({
  textcenterview: {
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    paddingHorizontal: SW(15),
  },
  Text: {
    color: colorsset.theme_backgound_second,
    fontSize: SF(25),
    textAlign: 'center',
    fontFamily:Fonts.RobotoCondensed_Regular
  },
  TextBold: {
    fontFamily:Fonts.RobotoCondensed_Bold
  },
  TextNormal:{
    color: colorsset.theme_backgound,
    fontSize: SF(20),
    textAlign: 'center',
    lineHeight:SH(23),
    fontFamily:Fonts.RobotoCondensed_Regular
  },
  yourSelfRoundMainBox:{
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
   },
   yourSelfRoundActiveBox:{
    backgroundColor:colorsset.theme_backgound_second,

   },
  yourSelfRoundBox:{
   width:SW(120),
   height:SH(120),
   backgroundColor:colorsset.theme_dark_gray,
   borderRadius:SH(120),
   flexDirection:'column',
   justifyContent:'center',
   alignItems:'center'
  },
  yourSelfRoundText:{
    color: colorsset.white,
    fontSize: SF(20),
    textAlign: 'center',
    fontFamily:Fonts.RobotoCondensed_Bold
  },
  nextButton:{
  width:SW(150),
  alignSelf:'flex-end'
  },
  buttonView:{
    paddingHorizontal:SW(20)
  },
  yourSelfRoundImage:{
    width:SW(30),
    height:SH(30),
    tintColor: "#ffffff",
  },
  selectionRoundBox:{
    width:SW(300),
    position:'absolute',
  }
});