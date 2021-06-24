import React, { useState } from 'react';
import Styles from '@theme/Styles';
import Colors from '@theme/Colors';
import { View, Text, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import {
  setCurrentScreen,
} from '@redux/actions/MyAction';

const Screen1 = (props) => {
  const [languages, setLanguages] = useState([
    { title: "English", selected: false },
    { title: "Hindi", selected: false },
    { title: "Gujarati", selected: false },
  ]);
  const [anyOneSelected, setAnyOneSelected] = useState(false);
  const dispatch = useDispatch()

  const setNextScreen = () => {
    dispatch(setCurrentScreen(4));
    alert("Done!")
  }

  const setLanguageSelection = (index) => {
    let tempLanguages = languages;
    tempLanguages[index].selected = !tempLanguages[index].selected;
    setLanguages([...tempLanguages]);
    let checkAnySelected = tempLanguages.filter(lang => lang.selected).length;
    setAnyOneSelected(checkAnySelected > 0);
  }

  return (
    <View style={[Styles.pageContainer]}> 
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={[Styles.scrollContainer]}>
        <View style={[Styles.quetionTextContainer]}>
          <Text style={[Styles.quetionText]}>Which languages you know?</Text>
        </View>

        <View style={[Styles.inputControlContainer]}>
          {
            languages && languages.length > 0?
              languages.map((lang, index) => {
                return (
                  <TouchableOpacity key={"Lang:"+index} style={[Styles.radioAndCheckBtn]} onPress={() => setLanguageSelection(index)}>
                    <View style={[Styles.radioIcon, lang.selected? Styles.selectedBox : null]}/>
                    <Text style={[Styles.textWithRadioAndCheck]}>{lang.title}</Text>
                  </TouchableOpacity>
                )
              })
            :
            <Text>ok</Text>
          }
        </View>

        <TouchableOpacity activeOpacity={0.8} disabled={!anyOneSelected} style={[Styles.whiteSmallBtn, !anyOneSelected? Styles.disableBtn : {}]} onPress={() => setNextScreen()}>
          <Text style={[Styles.whiteBtnText]}>Next</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

export default Screen1;