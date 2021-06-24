import 'react-native-gesture-handler';
import React from 'react';
import { View, Text} from 'react-native';
import Screen1 from './src/containers/Screen1';
import Screen2 from './src/containers/Screen2';
import Screen3 from './src/containers/Screen3';
import Screen4 from './src/containers/Screen4';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import Styles from '@theme/Styles';
import Colors from '@theme/Colors';
import ProgressBar from 'react-native-progress/Bar';
import { Provider } from 'react-redux'
import store from '@redux/store'
import { useSelector, useDispatch } from 'react-redux'

const MainComponent = (props) => {
  const currentScreen = useSelector(state => state.currentScreen * 0.3);

  return (
    <NavigationContainer>
      <View style={[Styles.progressBarContainer]} >
        <ProgressBar color={Colors.secondColor} height={12} borderWidth={1} borderColor={Colors.secondColor} borderRadius={6} progress={currentScreen} indeterminateAnimationDuration={500} width={null}/>
      </View>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Screen2" component={Screen2} />
        <Stack.Screen name="Screen3" component={Screen3} />
        <Stack.Screen name="Screen4" component={Screen4} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
const App = (props) => {
  return (
    <Provider store={store}>
      <MainComponent />
    </Provider>
  )
}
export default App;