import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { AppSettingsScreen } from '../../screens';
import { SF, SH, SW, Fonts } from '../../utils';

export default Settings = (colorsset) =>  StyleSheet.create({
  titleStyle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18
  },
  flexDirectionrowskipnext: {
      flexDirection:'row',
      justifyContent:'space-between',
      width:'100%',
      marginTop:'20%',
      paddingHorizontal:'5%',
      alignItems:'center',
  },
  homeheadertext: {
      color:'white',
      fontWeight:'700',
      fontSize:25,
      position:'relative',
      top:25,
  },   
  whilistminbody: {
    width:'90%',
    marginTop:'7%',
    height:'100%',
    marginHorizontal:'5%',
},
  iconlessthanback: {
    color:'hsl(214.3, 83.2%, 51%)',
    flexDirection:'row',
    justifyContent:'flex-start',
    marginTop:10,
    position:'relative',
    left:-7,
  },
  cellulardatatext: {
      fontSize:20,
      fontFamily:'DMSans-Bold',
      color:'white',
  },
  toggleswotchview: {
      marginTop:'5%',
      borderBottomWidth:0.3,
      borderBottomColor:'lightgray',
      paddingBottom:22,
      marginBottom:'7%',
      flexDirection:'row',
      justifyContent:'space-between',
  },
 
  downlodtoggleswitchtext: {
    fontFamily:'DMSans-Bold',
      color:'white',
      fontSize:16,
  },
  righticonminview: {
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      width:'100%',
      marginTop:'5%',
      borderBottomWidth:1,
      borderBottomColor:'lightgray',
      paddingBottom:17,
  },
  righticonminviewtwo: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    width:'100%',
    marginTop:'7%',
    borderBottomWidth:1,
    paddingBottom:17,
    borderBottomColor:'red',
},
  chekiconstyle: {
      color:'black',
  },
  standardrecommedtext: {
    fontFamily:'DMSans-Bold',
    color:'white',
    fontSize:16,
  },
  downloadfastertext: {
    fontSize:14.5,
    fontFamily:'DMSans-Bold',
    opacity:0.5,
    paddingTop:'3%',
    color:'white',
  },
  offlinedoenloadstextset: {
    fontSize:20,
    fontFamily:'DMSans-Bold',
    paddingTop:'8%',
    color:'black',
  },
  bodysettextwidth: {
      width:'80%',    
  },
  deletedownloads: {
    fontFamily:'DMSans-Bold',
    color:'red',
    fontSize:18,
  },
  redcoloricondelete: {
      color:'red',
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'gray',
    opacity: Platform.OS === 'ios' ? 1 : 0.9,
  },

 modalView: { 
backgroundColor: "white",
borderRadius: 7,
width: '90%',
shadowColor: "#000",
flexDirection:'row',
alignItems:'center',
justifyContent:'center',
shadowOffset: {
  width: 0,
  height: 2
},
shadowOpacity: 0.25,
shadowRadius: 4,
elevation: 5
},
setshadowstylemodaltwo: {
backgroundColor: "white",
padding:1.2,
borderRadius: 7,
width: '100%',
shadowColor: "#000",
shadowOffset: {
  width: 0,
  height: 2
},
shadowOpacity: 0.25,
shadowRadius: 4,
elevation: 5
},
centericon: {
flexDirection:'row',
alignItems:'center',
justifyContent:'center',

},
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 20,
    textAlign: "center",
    color:'black',
    fontSize:22,
    fontWeight:'600',
    paddingLeft:10,
    paddingRight:10,
  },
  togglrswitchflex: {
    flexDirection:'row',
    justifyContent:'space-between',
    width:'100%',
  },
  setbuttonwidth: {
    width:'50%',
    marginHorizontal:'25%',
    paddingBottom:25,
  },
  buttonset: { 
    borderWidth: 1,
    borderColor: 'hsl(216.8, 90.7%, 38%)',
    backgroundColor:'hsl(216.8, 90.7%, 38%)',
    width:'100%',
    borderRadius:222,
    height:50,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
 buttonTextStyleSignWithNumber: {
 
    color: 'hsl(216.8, 90.7%, 38%)',
    fontWeight:'700',
    fontSize:18,
  },
  buttonTextStyleSignWithNumber2: {
    color: 'white',
    fontWeight:'700',
    fontSize:18,
  },
  paregraphtextmodal: {
    textAlign:'center',
    fontSize:16,
    paddingTop:15,
    paddingBottom:25,
    color:'gray',
    fontWeight:'700',
  },
  hometextheadercolor: {
    color:'hsl(214.3, 83.2%, 51%)',
    fontSize:23,
    fontWeight:'700',
    marginTop:12,
    paddingLeft:2,
  },
  nabarview: {
    flexDirection:'row',
    paddingLeft:7,
  },
  icomvlose: {
    position:'relative',
    width:'100%',
    flexDirection:'row',
    justifyContent:'flex-end',
    top:15,
    left:-15,
  },
  keybordtopviewstyle: {
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:7,
  },
  minstyleviewphotograpgy: {
    flexDirection:'row',
    justifyContent:'center',
    height: '100%',
     width: '100%', 
  },
  minflexview: {
    width:'93%',
  
  },
  topspaceview: {
    marginTop:20,
  }
 
});