import { StyleSheet } from 'react-native';
import { SF, SH, SW, Fonts } from '../../utils';

export default WeeklyGoalStyle = (colorsset)=> StyleSheet.create({
  mainView:{
    flexDirection:'row',
    justifyContent:'space-between',
  },
  roundView:{
    width:SW(38),
    height:SH(38),
    backgroundColor:colorsset.off_white,
    borderRadius:SH(50),
    justifyContent:'center',
    alignItems:'center'
  },
  title: {
   color:colorsset.theme_backgound_black,
   fontSize:SF(18),
   fontFamily:Fonts.RobotoCondensed_Bold
  },
  icon:{
    width:SW(55),
  },
selectedColor:{
  backgroundColor:colorsset.theme_backgound_black,

},
weektitle:{
  color:colorsset.theme_backgound_second,
  fontSize:SF(20),
  lineHeight:SH(25),
  fontFamily:Fonts.RobotoCondensed_Regular,
  marginBottom:SH(10)
},
weekMainView:{
  flexDirection:'column',
  justifyContent:'center',
  alignItems:'center'
}
});