import 'react-native-gesture-handler';
import {FC} from 'react';
import React from 'react';
import HomeScreen from 'screens/Home/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { NativeStackNavigationProp, createNativeStackNavigator } from '@react-navigation/native-stack';
import History from 'screens/History/History';


interface Props {}

type StackParamList = {
    Home:undefined,
    History:undefined
}

export type NavigationProps=NativeStackNavigationProp<StackParamList>

const App: FC<Props> = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen component={HomeScreen} name="Home" options={{headerShown: false}}/>
        <Stack.Screen component={History} name="History" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default App;
