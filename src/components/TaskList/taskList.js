import React, { useEffect, useState } from 'react';
// React Native Components
import { 
  ActivityIndicator, 
  View, FlatList, 
  StyleSheet, 
  Text, 
  StatusBar } from 'react-native';
// Redux hook
import { useSelector, useDispatch } from 'react-redux';
import { addTask } from '../../redux/actions';
// Services 
import { getTasks } from '../../services/taskServices';



export default function TaskList() {

  const dispatch = useDispatch()

  const[spinner, setSpinner] = useState(false);

  const tasks = useSelector((state) => state.tasks)

  useEffect(() => {
    const getNewTasks = async () => {
      setSpinner(true);
      const res = await getTasks();
      if(res != 400){
        dispatch(addTask(JSON.parse(res)));
        setSpinner(false);
        return;
      }
    }
    getNewTasks();
  }, []);
  

  const renderItem = ({ item }) => <Item title={item.tarea} />;

  return (
    <View style={styles.container}>

      <ActivityIndicator 
        size="large" 
        animating={spinner} 
        color="#0000ff"/>

      <FlatList 
        data={tasks} 
        renderItem={renderItem} 
        keyExtractor={item => item.id.toString()} />

    </View>
  );
}

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#009eff',
    padding: 20,
    borderRadius: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  }
});
