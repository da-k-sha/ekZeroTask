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
  const [nameText, setNameText] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const dispatch = useDispatch()

  const setNextScreen = () => {
    if(nameText && nameText.length >= 5) {
      dispatch(setCurrentScreen(1));
      navigation.navigate('Screen2');
    } else {
      setErrorMsg("Please enter atlease 5 character name")
    }
  }

  return (
    <View style={[Styles.pageContainer]}> 
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={[Styles.scrollContainer]}  keyboardShouldPersistTaps='handled'>
        <View style={[Styles.quetionTextContainer]}>
          <Text style={[Styles.quetionText]}>What is your name ?</Text>
        </View>
        <View style={[Styles.inputControlContainer]}>
          <TextInput placeholder="Enter your name" placeholderTextColor={Colors.secondColor} style={[Styles.textInputStyle]} value={nameText} onChangeText={(text) => setNameText(text)}/>
          {
            errorMsg?
              <View style={[Styles.errorMsgPopup]}>
                <Text style={[Styles.errorMsgText]}>{errorMsg}</Text>
              </View>
              :
              null
          }
        </View>
        <TouchableOpacity activeOpacity={0.8} disabled={!nameText} style={[Styles.whiteSmallBtn, !nameText? Styles.disableBtn : {}]} onPress={() => setNextScreen()}>
          <Text style={[Styles.whiteBtnText]}>Next</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

export default Screen1;