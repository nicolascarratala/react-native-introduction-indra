import React from 'react';
//Ract Native Components
import { StyleSheet } from 'react-native';
//React Navigation
import { SafeAreaView } from 'react-native-safe-area-context';
// Components
import AddTask from '../components/AddTask/addTask';

const Add = ({navigation}) => {
  return (
    <SafeAreaView style={ styles.container }>
      <AddTask navigation={ navigation } />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#0036ff',
    padding: 10,
    marginTop: 10,
    borderRadius: 30
  },
  input: {
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1,
    borderRadius: 10
  }
});

export default Add;