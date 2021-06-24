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
  const [gender, setGender] = useState("");
  const dispatch = useDispatch();

  const setNextScreen = () => {
    dispatch(setCurrentScreen(3));
    navigation.navigate('Screen4');
  }

  return (
    <View style={[Styles.pageContainer]}> 
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={[Styles.scrollContainer]}>
        <View style={[Styles.quetionTextContainer]}>
          <Text style={[Styles.quetionText]}>What is gender ?</Text>
        </View>
        <View style={[Styles.inputControlContainer]}>
          <TouchableOpacity style={[Styles.radioAndCheckBtn]} onPress={() => setGender("male")}>
            <View style={[Styles.radioIcon, gender && gender == "male"? Styles.selectedBox : null]}/>
            <Text style={[Styles.textWithRadioAndCheck]}>Male</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[Styles.radioAndCheckBtn]} onPress={() => setGender("female")}>
            <View style={[Styles.radioIcon, gender && gender == "female"? Styles.selectedBox : null]}/>
            <Text style={[Styles.textWithRadioAndCheck]}>Female</Text>
            </TouchableOpacity>
        </View>

        <TouchableOpacity activeOpacity={0.8} disabled={!gender} style={[Styles.whiteSmallBtn, !gender? Styles.disableBtn : {}]} onPress={() => setNextScreen()}>
          <Text style={[Styles.whiteBtnText]}>Next</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

export default Screen1;