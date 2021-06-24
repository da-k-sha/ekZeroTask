import React, { useState } from 'react';
import Styles from '@theme/Styles';
import Colors from '@theme/Colors';
import { View, Text, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import {
  setCurrentScreen,
} from '@redux/actions/MyAction';

const Screen1 = (props) => {
  const { navigation } = props;
  const [mobileNumber, setMobileNumber] = useState("");
  const dispatch = useDispatch()
  const [errorMsg, setErrorMsg] = useState("");

  const setNextScreen = () => {
    if(mobileNumber && mobileNumber.length == 10) {
      dispatch(setCurrentScreen(2));
      navigation.navigate('Screen3');
    } else {
      setErrorMsg("10 digit number required !")
    }
  }

  return (
    <View style={[Styles.pageContainer]}> 
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={[Styles.scrollContainer]} keyboardShouldPersistTaps="handled">
        <View style={[Styles.quetionTextContainer]}>
          <Text style={[Styles.quetionText]}>What is your Mobile number ?</Text>
        </View>
        <View style={[Styles.inputControlContainer]}>
          <TextInput placeholder="Enter Mobile number" maxLength={10} keyboardType="phone-pad" placeholderTextColor={Colors.secondColor} style={[Styles.textInputStyle]} value={mobileNumber} onChangeText={(text) => setMobileNumber(text)}/>
          {
            errorMsg?
              <View style={[Styles.errorMsgPopup]}>
                <Text style={[Styles.errorMsgText]}>{errorMsg}</Text>
              </View>
              :
              null
          }
        </View>
        <TouchableOpacity activeOpacity={0.8} disabled={!mobileNumber} style={[Styles.whiteSmallBtn, !mobileNumber? Styles.disableBtn : {}]} onPress={() => setNextScreen()}>
          <Text style={[Styles.whiteBtnText]}>Next</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

export default Screen1;