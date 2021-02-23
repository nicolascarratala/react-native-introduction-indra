import React, { useState } from 'react';
//Ract Native Components
import { StyleSheet, TextInput, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
//Redux
import { useDispatch } from 'react-redux'
//Actions
import { addTask } from '../../redux/actions'


const AddTask = ({navigation}) => {

  const dispatch = useDispatch();

  const[newTask, setNewTask] = useState("");

  return (
    <>
      <Text>Escriba tarea:</Text>
      <TextInput style={ styles.input } onChangeText={text => setNewTask( text )} value={ newTask }/>
      <TouchableOpacity 
      style={ styles.button } 
      onPress={() => {
        dispatch( addTask( {id: Math.random(), title: newTask} ) );
        navigation.pop();
      }}>
        <Text>Agregar</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
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

export default AddTask;