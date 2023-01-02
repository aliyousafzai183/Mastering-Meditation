import { StyleSheet } from 'react-native';
import { SF, SH, SW, Fonts } from '../../utils';

export default HomeStyle = (colorsset) => StyleSheet.create({
  textcenterview: { 
    height: '100%',
    position:'relative',
    flexDirection:'column',
    justifyContent:'space-between',
    paddingHorizontal:SW(20),
  },
  HomeCommonTitle:{
    color:colorsset.theme_backgound,
    fontSize:SF(17),
    fontFamily:Fonts.RobotoCondensed_Regular
  },
  textView:{
    paddingHorizontal: SW(0),
  },
  HomeCommonView:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  viewAllColor:{
    color:colorsset.theme_backgound_second
  },
  viewImageBox:{
    flexDirection:'column',
    justifyContent:'space-between',
    height: SH(140),
    // width: SW(140),
    position:'relative',
    backgroundColor:colorsset.white,
    overflow: "hidden",
    borderRadius:10,
    paddingHorizontal:SW(10),
    paddingVertical:SW(10)

  },
  setbgimage:{
    height: SH(40),
    width: SW(40),
    alignSelf:'flex-end'
  },
  ImageTitle:{
    color:colorsset.theme_backgound_second,
    fontSize:SF(17),
    fontFamily:Fonts.RobotoCondensed_Regular
  },
  ImageTitleDaySize:{
    color:colorsset.theme_backgound,
    fontSize:SF(20),
    fontFamily:Fonts.RobotoCondensed_Bold
  },
  colorWhite:{
    color:colorsset.white
  },
  viewImageBoxChallenge:{
    marginRight:SW(20),
    height: SH(280),
    width: SW(360),
    position:'relative',
    backgroundColor:colorsset.theme_backgound,
    overflow: "hidden",
    borderRadius:10
  },
  challengeImageTitle:{
    color:colorsset.white,
    fontSize:SF(14),
    fontWeight:'00',
    paddingHorizontal:SW(10),
     fontFamily:Fonts.RobotoCondensed_Regular
  },
  challengeImageTitleBG:{
    color:colorsset.white,
    fontSize:SF(28),
    backgroundColor:'#A69F9F',
    width:'70%',
    textAlign:'center',
    paddingHorizontal:SW(10),
    fontFamily:Fonts.RobotoCondensed_Bold
  },
  challengeImageTitleText:{
    color:colorsset.white,
    fontSize:SF(20),
    paddingHorizontal:SW(10),
    fontFamily:Fonts.RobotoCondensed_Bold
  },
  viewImageBoxChallengeInnerView:{
    height: '100%',
    position:'relative',
    flexDirection:'column',
    justifyContent:'space-between',
  },
  StartButton:{
    width:'80%'
  },
  RecentAllViewBox:{
    paddingHorizontal:SW(10),
    paddingVertical:SW(10),
    flexBasis: '50%'
  },
  RecentAllView:{
    // marginRight:SW(20),
    // flex: 1,
    // flexWrap: 'wrap',
    // flexDirection: 'row'
  },
  RecentAllViewmargin:{
    marginRight:SW(20)
  },
  ImageTitleOther:{
    color:colorsset.white,
    fontSize:SF(21),
    fontFamily:Fonts.RobotoCondensed_Bold
  },
  ImageTitleOtherSmall:{
    color:colorsset.white,
    fontSize:SF(15),
    fontFamily:Fonts.RobotoCondensed_Regular
  },

  VideoviewImageBox:{
    height: SH(200),
    width: '100%',
    position:'relative',
    backgroundColor:colorsset.theme_backgound,
    overflow: "hidden",
    borderRadius:10
  },
  videoInnerView:{
    flexDirection: 'column',
    justifyContent: 'center',
  },
  VideoTab:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal:SW(25)
  },
  VideoTabText:{
    color:colorsset.theme_backgound,
    fontSize:SF(20),
    marginHorizontal:SW(10),
    lineHeight:45,
    fontFamily:Fonts.RobotoCondensed_Regular
  },
  activeBorder:{
    borderColor:colorsset.theme_backgound_second,
    borderBottomWidth:2,
  },
  counterStyleView:{
    width:'100%'
  },
  stepText:{
    color:colorsset.white,
    fontSize:SF(25),
    fontFamily:Fonts.RobotoCondensed_Regular
  },
  counterText:{
    color:colorsset.white,
    fontSize:SF(30),
    fontFamily:Fonts.RobotoCondensed_Bold
  },
  boxtexttime:{
    color:colorsset.theme_backgound_second,
    fontSize:SF(24),
    fontFamily:Fonts.RobotoCondensed_Regular
  },
  boxtextlocation:{
    color:colorsset.white,
    fontSize:SF(24),
    fontFamily:Fonts.RobotoCondensed_Regular
  },
  boxtextkm:{
    color:colorsset.white,
    fontSize:SF(24),
    fontFamily:Fonts.RobotoCondensed_Regular
  },
  bottomBox:{
    backgroundColor:colorsset.transpharentwhite,
    paddingHorizontal:SW(20),
    paddingVertical:SH(30),
    borderRadius:SH(15)
  },
  userIcon:{
    width:SW(30),
    height:SH(30),
    borderRadius:SH(30),
    overflow:'hidden'
  },
  userIconView:{
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
  },
  userTitle:{
    color:colorsset.theme_backgound,
    fontSize:SF(17),
    fontFamily:Fonts.RobotoCondensed_Regular,
    paddingHorizontal:SW(10)
  },
  userIconBox:{
    overflow:'hidden',
    paddingHorizontal:SW(8),
    paddingVertical:SW(8),
    backgroundColor:colorsset.white,
    borderRadius:SH(10)

  },
  heading:{
    color:colorsset.theme_backgound,
    fontSize:SF(19),
    fontFamily:Fonts.RobotoCondensed_Bold,
  },
  viewImageBoxYoga:{
    flexDirection:'column',
    justifyContent:'space-between',
    alignItems:'center',
    position:'relative',
    backgroundColor:colorsset.white,
    overflow: "hidden",
    borderRadius:10,
    paddingHorizontal:SW(10),
    paddingVertical:SW(10),
    flex: 1,
    alignContent: "center",
    justifyContent: "center",

  },
  setbgimageYoga:{
    height: SH(100),
    alignSelf:'center'
  },
  ImageTitleDaySizeYoga:{
    color:colorsset.theme_backgound,
    fontSize:SF(16),
    fontFamily:Fonts.RobotoCondensed_Bold,
    textAlign:'center'
  },
  RecentAllViewBoxYoga:{
    paddingHorizontal:SW(10),
    paddingVertical:SW(10),
    flexBasis: '50%',
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
  },
  RecentAllViewBoxYogaBoxTopSpace:{
    marginTop:SH(30)
  },
  RecentAllViewBoxYogaBoxBottomSpace:{
    marginBottom:SH(30)
  },
  viewImageBoxCategory:{
    flexDirection:'column',
    justifyContent:'space-between',
    alignItems:'center',
    position:'relative',

  },
  RecentAllViewBoxCategory:{
    paddingHorizontal:SW(10),
    paddingVertical:SW(10),
    flexBasis: '50%',
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
  },
  setbgimageCategory:{
    width: "100%",
    alignSelf:'center'
  },
  ImageTitleDaySizeCategory:{
    color:colorsset.theme_backgound,
    fontSize:SF(16),
    fontFamily:Fonts.RobotoCondensed_Regular,
    textAlign:'center'
  },
  viewImageBoxBgCategory:{
    flexDirection:'column',
    justifyContent:'space-between',
    alignItems:'center',
    position:'relative',
    backgroundColor:colorsset.white,
    overflow: "hidden",
    borderRadius:10,
    paddingHorizontal:SW(10),
    paddingVertical:SW(10),
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    width:"100%"

  },
  textViewCategory:{
    paddingHorizontal: SW(10),
  },
  meditationImageView:{

  },
  meditationImageicon:{
    width:"100%"
  },
  RecentAllViewBoxMeditation:{
    paddingHorizontal:SW(10),
    paddingVertical:SW(10),
  },
  viewImageBoxMeditation:{
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'flex-start',
    position:'relative',
    backgroundColor:colorsset.white,
    overflow: "hidden",
    borderRadius:10,
    paddingHorizontal:SW(15),
    paddingVertical:SW(15),
  },
  ImageTitleDaySizeMeditation:{
    color:colorsset.theme_backgound,
    fontSize:SF(16),
    fontFamily:Fonts.RobotoCondensed_Bold,
    textAlign:'left'
  },
  ImageDescriptionMeditation:{
    color:colorsset.theme_backgound,
    fontSize:SF(16),
    fontFamily:Fonts.RobotoCondensed_Regular,
    textAlign:'left'
  },
  ImageTitleDaySizeMeditationTime:{
    backgroundColor:colorsset.theme_backgound_secondLight,
    color:colorsset.theme_backgound_second,
    width:"30%",
    paddingHorizontal:SW(10),
    paddingVertical:SH(7),
    borderRadius:SH(10)
  },
  setbgimageMeditation:{
    width: SW(100),
    alignSelf:'center',
    position:'absolute',
    right:0,
  },
  viewImageBoxTextMeditation:{
    paddingRight:SW(23)
  }
});