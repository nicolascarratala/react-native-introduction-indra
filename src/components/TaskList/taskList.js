import React from 'react';
// React Native Components
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity, Touchable } from 'react-native';
// Redux hook
import { useSelector } from 'react-redux';

export default function TaskList() {

  const tasks = useSelector((state) => state.tasks)
  
  const renderItem = ({ item }) => <Item title={item.title} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={tasks} renderItem={renderItem} keyExtractor={item => item.id} />
    </SafeAreaView>
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
