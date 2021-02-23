import React from 'react';
import { StyleSheet, Text, TouchableOpacity} from 'react-native';


export default function FloatButton({navigation}) {
  return (
    <TouchableOpacity style={styles.button} onPress={() => {navigation.push('Add')}}>
        <Text style={styles.icon}>+</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems:'center',
    justifyContent:'center',
    width:70,
    position: 'absolute',                                          
    bottom: 10,                                                    
    right: 10,
    height:70,
    backgroundColor:'#0036ff',
    borderRadius:100,
  },
  icon: {
      fontSize: 40,
      color: '#fff'
  }
});