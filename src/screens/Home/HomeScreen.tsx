import {View, Text, StyleSheet, Pressable, TouchableOpacity, Image} from 'react-native';
import {FC, createContext} from 'react';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NavigationProps } from '../../../App';
import { useCalculator } from './hooks/useCalculator';
import AllOperatorBtn from 'components/AllOperatorBtn';
import AllDigitList from 'components/AllDigitBtnList';

interface Props {}

type CalculatorContextProps = {
    result: string;
    numbers: string;
    setNumber: (value: string) => void;
    clearHandler: () => void;
    operator: string;
    numbers1: string;
    setNumber1: (value: string) => void;
    operatorHandler: (value: string) => void;
    setNumberHandler: (value: string) => void;
    calculate: () => void;
    setOperator: (value: string) => void;
    clearOneByOneHandler: () => void;
 }


export const CalculatorContext = createContext<CalculatorContextProps>({} as CalculatorContextProps);


const HomeScreen: FC<Props> = () => {

  const calculator = useCalculator();
  const navigation = useNavigation<NavigationProps>();
  const {numbers,operator,numbers1,result,clearOneByOneHandler} = calculator;


  return (
    <CalculatorContext.Provider value={{...calculator}}>
      <SafeAreaView style={styles.container}>
        {/* show inputs  */}
      <View style={{marginBottom:10,backgroundColor:'#c4c4c4',minHeight:150,width:'98%',justifyContent:'flex-end',alignItems:'flex-end',padding:5,borderRadius:5}}>
        <Text style={{pointerEvents: 'none',fontSize:38,textAlign:'right'}}>{`${numbers1}${operator}${numbers}`}</Text>
      </View>
      {/* results of calculations */}
      <View style={{width:'100%',justifyContent:'flex-end',flexDirection:'row',marginBottom:20}}>
        <Text style={{fontSize:38,textAlign:'right',paddingRight:10}}>{result}</Text>
      </View>

      {/* show history and remove one digit */}

      <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%',paddingHorizontal:10}}>
        <Pressable  onPress={()=>{navigation.navigate('History');}}>
          <Text style={{fontSize:18,fontWeight:'bold',color:'black'}}>History</Text>
        </Pressable>
        <TouchableOpacity onPress={clearOneByOneHandler} style={{marginBottom:5}}>
          <Image style={{resizeMode:'cover',width:25,height:20}}source={require('./backspace.png')} />
        </TouchableOpacity>
      </View>

      {/* show bisecting line */}
      <View style={{borderWidth:0.5,borderColor:'black',width:'100%',marginBottom:15}}/>

      {/* show digits and operators buttons*/}

      <View style={{flexDirection:'row',justifyContent:'flex-start',paddingHorizontal:10}}>

        <AllDigitList/>
        <AllOperatorBtn   />

      </View>
    </SafeAreaView>
    </CalculatorContext.Provider>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent:'flex-end',
    alignItems:'center',
    padding:10,
    backgroundColor:'#c5c9c6',

  },
});

export default HomeScreen;
