import React, { useState } from 'react';
//Ract Native Components
import { StyleSheet, TextInput, Text, ActivityIndicator } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
// Services 
import { postTask } from '../../services/taskServices';

const AddTask = ({navigation}) => {

  const[newTask, setNewTask] = useState("");
  const[spinner, setSpinner] = useState(false);

  const postNewTask = async (task) => {
    setSpinner(true);
    const res = await postTask(task);
    if(res == 200) {
      navigation.popToTop();
      navigation.push('Tasks');
      setSpinner(false);
    }else{
      setSpinner(false);
    }
  }

  return (
    <>

      <Text>Escriba tarea:</Text>

      <TextInput 
        style={ styles.input } 
        onChangeText={text => setNewTask( text )} 
        value={ newTask }/>

      <TouchableOpacity 
      style={ styles.button } 
      onPress={() => { postNewTask(newTask) }}>
        <Text>Agregar</Text>
      </TouchableOpacity>

      <ActivityIndicator 
        size="large" 
        animating={spinner} 
        color="#0000ff"/>

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