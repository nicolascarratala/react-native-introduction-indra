import React from 'react';
//Ract Native Components
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
//Components
import TaskList from '../components/TaskList/taskList';
import FloatButton from '../components/FloatButton/floatButton';


const Tasks = ( {navigation} ) => {
  return (
    <SafeAreaView style={ styles.container }>
      <TaskList/>
      <FloatButton navigation={ navigation }/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
});

export default Tasks;