import { StyleSheet } from 'react-native';
import { SF, SH, SW, Fonts } from '../../utils';

export default ReportStyle = (colorsset) => StyleSheet.create({
  textcenterview: {
    // flexDirection: 'column',
    // justifyContent: 'center',
    // textAlign: 'center',
    paddingHorizontal: SW(15),
  },
  text:{
    fontSize:SF(35),
    color:colorsset.theme_backgound_second,
    fontFamily:Fonts.RobotoCondensed_Bold
  },
  textSmall:{
    fontSize:SF(17),
    color:colorsset.off_white,
    fontFamily:Fonts.RobotoCondensed_Regular
  },
  firstView:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    textAlign: 'center',
  },
  firstViewBox:{
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems:'center'
  },
  imageSize:{
    width:SW(100),
    height:SH(100),
  },
  imageSizeSmall:{
    width:SW(20),
    height:SH(20),
  },
  secondViewMain:{
    paddingHorizontal: SW(15),
  },
  secondView:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center'
  },
  secondViewTextHistory:{
    fontSize:SF(21),
    color:colorsset.white,
    fontFamily:Fonts.RobotoCondensed_Regular
  },

  secondViewTextCalendar:{
    fontSize:SF(21),
    color:colorsset.theme_backgound_second,
    fontFamily:Fonts.RobotoCondensed_Regular
  },
  br:{
    borderBottomColor:colorsset.theme_backgound_second,
    borderBottomWidth:SH(0.5)
  },
  calendarBorderWidth:{
    borderBottomWidth:SH(6),
    borderBottomColor:colorsset.transpharentwhite,

  },
  HeightTextFirst:{
    fontSize:SF(23),
    color:colorsset.theme_backgound_second,
    fontFamily:Fonts.RobotoCondensed_Regular
  },
  HeightTextSecond:{
    fontSize:SF(23),
    color:colorsset.white,
    fontFamily:Fonts.RobotoCondensed_Regular,
    borderBottomWidth:SH(1),
    borderBottomColor:colorsset.white
  },
  graphView:{
    backgroundColor: colorsset.transpharentwhite,
    height:SH(250),
    overflow:'hidden',
    paddingHorizontal:SW(20),
    paddingVertical:SW(20)
  
  }
});