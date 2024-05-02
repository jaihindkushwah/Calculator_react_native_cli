import { View, StyleSheet } from 'react-native';
import React , { FC, useContext, } from 'react';
import OperatorBtn from './OperatorBtn';
import { CalculatorContext } from 'screens/Home/HomeScreen';

type Props = {

}

const AllOperatorBtn: FC<Props> = () => {
    const  {operatorHandler} = useContext(CalculatorContext);
    return (
        <View style={styles.operatorContainer}>
            <OperatorBtn operatorHandler={operatorHandler} operatorName="+"/>
            <OperatorBtn operatorHandler={operatorHandler} operatorName="-"/>
            <OperatorBtn operatorHandler={operatorHandler} operatorName="*"/>
            <OperatorBtn operatorHandler={operatorHandler} operatorName="/"/>
            <OperatorBtn operatorHandler={operatorHandler} operatorName="."/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {},
    operatorContainer:{
        gap:5,
        alignItems:'center',
        // marginRight:10,
      },
});

export default AllOperatorBtn;
