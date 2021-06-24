import { StyleSheet, Dimensions } from 'react-native';
import Colors from './Colors';
const Window = Dimensions.get("window");

export default StyleSheet.create({
  progressBarContainer: {
    // borderWidth: 2,
    padding: 20,
    backgroundColor: Colors.primeColor
  },
  pageContainer: {
    flex: 1,
    backgroundColor: Colors.secondColor
  },
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: Colors.primeColor,
    padding: 20
  },
  quetionTextContainer: {
  },
  quetionText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.secondColor
  },
  inputControlContainer: {
    paddingTop: 20,
    flex: 1,
  },
  textInputStyle: {
    borderWidth: 1,
    borderColor: Colors.secondColor,
    paddingHorizontal: 20,
    borderRadius: 8,
    color: Colors.secondColor,
    fontWeight: '700',
    fontSize: 16
  },
  errorMsgPopup: {
    backgroundColor: 'red',
    padding: 10
  },
  errorMsgText: {
    color: Colors.secondColor,
    textTransform: 'capitalize'
  },
  whiteSmallBtn: {
    backgroundColor: Colors.secondColor,
    padding: 16,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  whiteBtnText: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.primeColor
  },
  disableBtn: {
    opacity: 0.3,
  },
  radioAndCheckBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10
  },
  textWithRadioAndCheck: {
      fontSize: 16,
      color: Colors.secondColor,
      fontWeight: '700'
  },
  radioIcon: {
    width: 16,
    height: 16,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Colors.secondColor,
    marginRight: 10
  },
  selectedBox: {
    backgroundColor: Colors.secondColor
  }
})