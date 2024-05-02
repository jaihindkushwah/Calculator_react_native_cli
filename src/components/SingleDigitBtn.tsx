import { Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';

interface Props {
  setNumberHandler: (value: string) => void;
  value:number
}

const SingleDigit: FC<Props> = props => {
  const {value ,setNumberHandler} = props;
  return (
    <TouchableOpacity
      onPress={() => {
        setNumberHandler(value + '');
      }}
      style={styles.digitBtn}>
      <Text style={styles.btnText}>{value}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {},
  btnText: {
    fontSize: 24,
    fontWeight: '400',
    color: 'white',
    textAlign: 'center',
  },
  digitBtn: {
    borderRadius: 40,
    padding: 10,
    backgroundColor: '#808080',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 2,
  },
});

export default SingleDigit;
