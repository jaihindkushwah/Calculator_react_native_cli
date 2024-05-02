import {StyleSheet, ScrollView, View, TouchableOpacity, Text} from 'react-native';
import React, {FC, useContext} from 'react';
import SingleDigit from './SingleDigitBtn';
import { CalculatorContext } from 'screens/Home/HomeScreen';

interface Props {

}

const data = [[7, 8, 9],[4, 5, 6],[1, 2, 3]];

const AllDigitList: FC<Props> = () => {
  const  {setNumberHandler,clearHandler,calculate,setNumber,setOperator} = useContext(CalculatorContext);
  const doCalculation = ()=>{
    calculate();
    setNumber('');
    setOperator('');
  };

  return (
    <>
      <ScrollView contentContainerStyle={styles.btnS_Container}>
        {
            data.map((item,index)=>{
                return (
                    <ScrollView contentContainerStyle={styles.digitBtnContainer} key={index + '@'}>
                        {
                            item.map((value)=>{
                               return <SingleDigit setNumberHandler={setNumberHandler} value={value} key={value}/>;
                            })
                        }
                    </ScrollView>
                );
            })
        }

        <View style={styles.digitBtnContainer}>
          <TouchableOpacity onPress={()=>{setNumberHandler('0');}} style={[styles.digitBtn,{flexGrow:1}]}>
            <Text style={styles.btnText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={clearHandler} style={[styles.digitBtn,{flexGrow:1,paddingBottom:4}]}>
            <Text style={[styles.btnText,{color:'#FF7F7F',fontSize:32,fontWeight:'600',textAlign:'center'}]}>c</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={doCalculation} style={[styles.digitBtn,{flexGrow:2,backgroundColor:'#fc8e58'}]}>
            <Text style={[styles.btnText,{color:'white',fontSize:32,fontWeight:'600'}]}>=</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      </>
  );
};

const styles = StyleSheet.create({
  container: {},
  btnText:{
    fontSize:24,
    fontWeight:'400',
    color:'white',
    textAlign:'center',
  },
  digitBtn:{
    borderRadius:40,
    // paddingHorizontal:10,
    backgroundColor:'#8b8f8c',
    justifyContent:'center',
    alignItems:'center',
    flexGrow:2,

  },
  btnS_Container: {
    gap: 5,
  },
  digitBtnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '96%',
    gap: 5,
  },
});

export default AllDigitList;
