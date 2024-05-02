import {View, Text, StyleSheet} from 'react-native';
import React, {FC} from 'react';

interface Props {}

const History: FC<Props> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Coming soon</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
  },
  text:{
    fontSize:34,
    color:'lightblue',
  },
});

export default History;
