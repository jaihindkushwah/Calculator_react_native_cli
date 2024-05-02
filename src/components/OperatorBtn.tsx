import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import React , { FC} from 'react';

interface Props {
  operatorName: string;
  operatorHandler:(value:string)=>void;
}

const OperatorBtn: FC<Props> = (props) => {
    const {operatorName,operatorHandler} = props;
    return (
        <TouchableOpacity onPress={()=>{operatorHandler(operatorName);}} style={styles.operatorBtn}>
            <Text style={styles.btnText}>{operatorName}</Text>
          </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    operatorBtn:{
        borderRadius:25,
        paddingHorizontal:5,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
        flexGrow:1,
        width:50,
      },
      btnText:{
        fontSize:24,
        fontWeight:'400',
        color:'black',
        textAlign:'center',
      },
});

export default OperatorBtn;
